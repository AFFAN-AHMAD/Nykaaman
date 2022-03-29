
// const navbar = () => {

//     return `<div>
// <div>
//     <img src="https://cdn.grabon.in/gograbon/images/merchant/1620649469652/nykaaman-logo.jpg" width="" height="54%" alt="logo">
//     <div>CATEGORIES</div>
//     <div>BRANDS</div>
//     <div>GROOMING ADVICE</div>

// </div>
// <div>
// <input type="text" placeholder="Search on Men">

//     <div><img src="http://www.w3.org/2000/svg" width="24" height="24" alt="logo">Account</div>
//     <div>Cart</div>

// </div>`

// };


const navbar = () => {
    return `<section class="navigation">
    <div class="nav-container">
      <div class="brand">
        <a href="#!">Logo</a>
      </div>
      <nav>
        <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
        <ul class="nav-list">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <a href="#!">Services</a>
            <ul class="navbar-dropdown">
              <li>
                <a href="#!">Sass</a>
              </li>
              <li>
                <a href="#!">Less</a>
              </li>
              <li>
                <a href="#!">Stylus</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#!">Portfolio</a>
          </li>
          <li>
            <a href="#!">Category</a>
            <ul class="navbar-dropdown">
              <li>
                <a href="#!">Sass</a>
              </li>
              <li>
                <a href="#!">Less</a>
              </li>
              <li>
                <a href="#!">Stylus</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </section>`
}


export {navbar};