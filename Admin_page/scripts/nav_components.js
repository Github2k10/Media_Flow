const navbar = () => {
  return ` <img src="../images/BeautyVerse.png" alt="" />
    <div id="username">
      <button id="name">
        <h3><i class="fa-solid fa-user"></i></h3>
      </button>

      <div id="login">
        <ul>
          <li ><button id="logout" class="red"><h3><i class="fa-solid fa-right-from-bracket"></i> Logout</h3><button></li>
          <li><h4><i class="fa-solid fa-gear"></i> Settings</h4></li>
        </ul>
      </div>
    </div>`;
};

const leftSideNavbar = () => {
  return ` <div id="home">Dashboard <i class="fa-solid fa-shop"></i></div>
    <div id="product">
      Add Product <i class="fa-solid fa-cart-shopping"></i>
    </div>
    <div id="order">Manage Product <i class="fa-solid fa-users"></i></div>
    <div id="payment">
      Manage Payment <i class="fa-solid fa-money-check-dollar"></i>
    </div>
    <div id="feedback">Check Feedback</div>`;
};

export { navbar, leftSideNavbar };
