function navbar() {
    var nav = document.getElementById("navigation");
    nav.innerHTML = `
    <div class="titlenav">
        <a class="active" href="/">Home</a>
        <div class="topnav">
            <a href="/forms">Forms</a>
            <a href="/cats">Cats</a>
        </div>
    </div>`

  }
  window.onload=navbar;
  
  // TODO: Make active button dynamically update