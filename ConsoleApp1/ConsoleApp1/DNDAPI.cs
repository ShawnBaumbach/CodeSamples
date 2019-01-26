using Newtonsoft.Json;
using RestSharp;
using RestSharp.Authenticators;
using RestSharp.Serialization.Json;
using System;
using System.Net;

namespace ConsoleApp1
{
    /*
    Author: Shawn Baumbach
    Description: This class calls the dnd5eapi.co api and looks up a certain ability with a index of 1
    It then deserailizes the json response into a more readable format.
    */
    class DNDAPI
    {
        public void CallAPI()
        {
            String uri = "http://dnd5eapi.co";
            String uri_parameters = "/api/ability-scores/1";

            var client = new RestClient();
            client.BaseUrl = new Uri(uri);

            var request = new RestRequest(uri_parameters, Method.GET);
            request.RequestFormat = DataFormat.Json;
            var response = client.Execute(request);
            // response.Content holds all of the data in json format
            Rootobject obj = JsonConvert.DeserializeObject<Rootobject>(response.Content);

            if (response.StatusCode == HttpStatusCode.OK)
            {
                Console.WriteLine("This is the full json response:");
                Console.WriteLine("\r\n{0}\r\n", response.Content);

                Console.WriteLine("\r\nThis is just the Skills array:\r\n");
                Console.WriteLine(obj.skills[0].name);
                Console.WriteLine(obj.skills[0].url);
            }

        }

        // Json objects
        public class Rootobject
        {
            public string _id { get; set; }
            public int index { get; set; }
            public string name { get; set; }
            public string full_name { get; set; }
            public string[] desc { get; set; }
            public Skill[] skills { get; set; }
            public string url { get; set; }
        }

        public class Skill
        {
            public string name { get; set; }
            public string url { get; set; }
        }

    }
}
