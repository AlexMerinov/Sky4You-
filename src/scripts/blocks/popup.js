window.app.PopupModal = () => {
   const body = document.querySelector('body');
   const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

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
   popupHoverButtons.forEach((popupHoverButton) => {
      popupHoverButton.addEventListener("mouseenter", (event) => {
         openPopup(popupHoverButton.dataset.popupName);
      });
   });

   const openPopup = (popupName) => {
      const popups = document.querySelectorAll('.go-js-popup');
      if (!popups) return;
      popups.forEach((popup) => {
         // const popupCatalog = popup.querySelector('.catalog');

         const closeModalPopup = () => {
            popup.classList.remove('body__popup--active');
            body.classList.remove('lock');
            document.body.style.paddingRight = 0;
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
               }
            }
         }

         // let modalOverlays = popup.querySelectorAll('.popup__box');
         // modalOverlays.forEach((modalOverlay) => {
         //    modalOverlay.addEventListener("click", (event) => {
         //       if (event.target !== popup.querySelector('.popup__window') || event.target !== popup.querySelector('.popup-window-h')) {
         //          closeModalPopup();
         //          console.log(event.target);
         //       }
         //    });
         // });

         let oherOffCatalogs = popup.querySelectorAll('.catalog');
         oherOffCatalogs.forEach((oherOffCatalog) => {
            oherOffCatalog.addEventListener("mouseleave", (event) => {
               closeModalPopup();
            });
         });


         let closePopups = document.querySelectorAll('.go-js-close-modal');
         closePopups.forEach((closePopup) => {
            closePopup.addEventListener("click", (event) => {
               closeModalPopup();
            });
         });
      });
   }
}

window.app.PopupModal();
