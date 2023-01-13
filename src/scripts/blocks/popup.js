window.app.PopupModal = () => {
   const body = document.querySelector('body');
   const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
   const header = document.querySelector('.header');

   const popupButtons = document.querySelectorAll('.go-js-open-popup');
   if (!popupButtons) return;
   popupButtons.forEach((popupButton) => {
      popupButton.addEventListener("click", (event) => {
         openPopup(popupButton.dataset.popupName);
         document.body.style.paddingRight = paddingOffset;
      });
   });

   const popupHoverButtons = document.querySelectorAll('.go-js-open-popup-hover');
   if (!popupHoverButtons) return;
   if (document.documentElement.clientWidth > 1024) {
      popupHoverButtons.forEach((popupHoverButton) => {
         popupHoverButton.addEventListener("mouseenter", (event) => {
            openPopup(popupHoverButton.dataset.popupName);
         });
      });
   }

   const openPopup = (popupName) => {
      const popups = document.querySelectorAll('.go-js-popup');
      if (!popups) return;
      popups.forEach((popup) => {

         const closeModalPopup = () => {
            popup.classList.remove('body__popup--active');
            body.classList.remove('lock');
            document.body.style.paddingRight = 0;
            header.style.paddingRight = 0;
         }

         if (popup.classList.contains('body__popup--active')) {
            closeModalPopup();
         } else {
            if (popup.dataset.popupName == popupName) {
               if (popup.classList.contains('body__popup--active')) {
                  closeModalPopup();
               } else {
                  popup.classList.add('body__popup--active');
                  body.classList.add('lock');
                  document.body.style.paddingRight = paddingOffset;
                  header.style.paddingRight = paddingOffset;
               }
            }
         }


         // закрытие по ховеру таргета
         if (document.documentElement.clientWidth > 1024) {
            let oherOffCatalogs = popup.querySelectorAll('.catalog');
            oherOffCatalogs.forEach((oherOffCatalog) => {
               oherOffCatalog.addEventListener("mouseleave", (event) => {
                  closeModalPopup();
               });
            });
         }

         // закрытие по Кнопке
         let closePopups = document.querySelectorAll('.go-js-close-modal');
         closePopups.forEach((closePopup) => {
            closePopup.addEventListener("click", (event) => {
               closeModalPopup();
            });
         });

         // закрытие по ESC 
         document.body.addEventListener('keyup', function (e) {
            let key = e.keyCode;

            if (key == 27) {
               closeModalPopup();
            };
         }, false);


         //закрытие по подложке
         let popupBoxes = document.querySelectorAll('.popup__box')
         popupBoxes.forEach((popupBox) => {
            popupBox.addEventListener('click', (e) => {
               if (e.target === popupBox) {
                  closeModalPopup();
               }
            });
         });
      });
   }
}

window.app.PopupModal();
