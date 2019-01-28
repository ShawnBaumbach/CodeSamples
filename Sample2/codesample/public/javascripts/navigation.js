function navbar() {
    var nav = document.getElementById("navigation");
    nav.innerHTML = `
    <div>
        <div class="topnav">
            <a href="/">Home</a>
            <a href="/forms">Forms</a>
            <a href="/cats">Cats</a>
        </div>
    </div>`

  }
  window.onload=navbar;
  
  // TODO: Make active button dynamically update