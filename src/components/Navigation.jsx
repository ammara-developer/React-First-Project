const Navigation =() => {
 
    return(
      
        <div className="navbar-wrapper">
        <nav className="navbar container">
          <div className="logo">
            <img src={`${import.meta.env.BASE_URL}images/brand_logo.png`} alt="logo" />
          </div>

          <ul className="nav-links">
            <li><a href="#">MENU</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>

          <button className="login-btn">Login</button>
           <div className="menu-toggle" onClick={() => {
  document.querySelector(".nav-links").classList.toggle("active");
}}>
  ☰
</div>
        </nav>
      </div>
    )

};
export default Navigation;