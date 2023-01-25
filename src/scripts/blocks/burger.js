window.app.openBurger = () => {

   // Open menu burger
   const burger = document.querySelector('.go-js-burger');
   const menuClose = document.querySelector('.go-js-close-menu');

   if (burger) {
      let menu   = document.querySelector('.nav-menu');
      let body = document.querySelector('body');

      const closeMobileMenu = () => {
         menu.classList.remove('nav-menu--active');
         body.classList.remove('lock');
      }

      burger.addEventListener('click', () => {
         menu.classList.toggle('nav-menu--active');
         body.classList.add('lock');
      });

      //закрытие по кнопке
      menuClose.addEventListener('click', () => {
         closeMobileMenu();
      });

      // закрытие по ESC 
      document.body.addEventListener('keyup', function (e) {
         let key = e.keyCode;
         if (key == 27) {
            closeMobileMenu();
         };
      }, false);

      //закрытие по подложке
      menu.addEventListener('click', (e) => {
         if (e.target === menu) {
            closeMobileMenu();
         }
      });
   }

};

window.app.openBurger();