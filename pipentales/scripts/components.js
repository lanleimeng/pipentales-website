document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("header-placeholder").innerHTML = `
    <header id="header">
      <div class="search-icon">
        <h2>🔍</h2>
      </div>
      <div class="logo-container">
        <h1 class="logo">PIPENTALES</h1>
        <nav id="nav-links">
          <a href="index.html">Shopping</a>
          <a href="contact.html">Contact & FAQ</a>
        </nav>
      </div>
      <div class="cart-icon">
        <h2><a href="cart.html">🛒</a></h2>
        
      </div>
    </header>
  `;
  document.getElementById("footer-placeholder").innerHTML = `
    <footer id="sosmed-holder">
      <div class="sosmed-card">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </footer>
    <hr class="soft-line">
    <div id="brand-holder">
      <h4>© 2025, PipenTales <span>Terms of service</span></h4>
    </div>
  `;

});