const body = document.querySelector('body');

const popupButtons = document.querySelectorAll('.go-js-open-popup');
if (!popupButtons) return;
popupButtons.forEach((popupButton) => {
   popupButton.addEventListener("click", (event) => {
      openPopup(popupButton.dataset.popupName);
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

      if (popup.classList.contains('body__popup--active')) {
         popup.classList.remove('body__popup--active');
         body.classList.remove('lock');
      } else {
         if (popup.dataset.popupName == popupName) {
            if (popup.classList.contains('body__popup--active')) {
               popup.classList.remove('body__popup--active');
               body.classList.remove('lock');

            } else {
               popup.classList.add('body__popup--active');
               body.classList.add('lock');
            }
         }

         const modalOverlay = document.querySelector('.body__popup');
         modalOverlay.addEventListener("click", (event) => {
            if (popup.classList.contains('body__popup--active')) {
               popup.classList.remove('body__popup--active');
               body.classList.remove('lock');
            }
         });

         const closePopups = document.querySelectorAll('.go-js-close-modal');
         if (!closePopups) return;
         closePopups.forEach((closePopup) => {
            closePopup.addEventListener("click", (event) => {
               if (popup.classList.contains('body__popup--active')) {
                  popup.classList.remove('body__popup--active');
                  body.classList.remove('lock');
               }
            });
         });
      }
   });
}
