window.app.openBurger = () => {

   // Open menu burger
   const burger = document.querySelector('.go-js-burger');
   const menuClose = document.querySelector('.go-js-close-menu');

   if (burger) {
      let menu   = document.querySelector('.nav-menu');
      burger.addEventListener('click', () => {
         menu.classList.toggle('nav-menu--active');
      });
      menuClose.addEventListener('click', () => {
         menu.classList.remove('nav-menu--active');
      });
  }

};

window.app.openBurger();