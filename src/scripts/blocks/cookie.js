window.app.CookieInit = () => {

   const cookieName = 'visit';
   const cookieAlert = document.querySelector('.cookie-alert--js');
   const cookieBtn = document.querySelector('.cookie-alert__btn--js');
   const expires = new Date(new Date().getTime() + 2 * 60 * 1000);

   if (!Cookies.get(cookieName)) {
      setTimeout(() => {
         cookieAlert.classList.add('is-show');
      }, 3000);

      cookieBtn.addEventListener('click', () => {
         cookieAlert.classList.remove('is-show');

         Cookies.set(cookieName, true, {
            expires,
         })
      });
   }
};

window.app.CookieInit();