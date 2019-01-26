using System;


/*
Author: Shawn Baumbach
Description: This is just a simple code sample to show the consumption of a web api.
To keep things simple I chose to use http://dnd5eapi.co which lets you call any of the endpoints without authenticating
*/
namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var dnd = new DNDAPI();
            dnd.CallAPI();
            Console.ReadKey();
        }
    }
}
