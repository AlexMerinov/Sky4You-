window.app.Catalog = () => {
   const catalogItems = document.querySelectorAll('.catalog-item');
   if (!catalogItems) return;

   catalogItems.forEach((catalogItem) => { 
      const btnOpenCatalog = catalogItem.firstElementChild.querySelector('.go-js-drop-catalog')
      btnOpenCatalog.addEventListener('click', listOpen);

      function listOpen(e) {
         let listHeader = btnOpenCatalog.parentNode;
         listHeader.classList.toggle('cat-header--active');
         btnOpenCatalog.classList.toggle('cat-header__btn--active');

         let subList = listHeader.closest('.catalog-item').querySelector('.sub-catalog');
         subList.classList.toggle('active');


         if (subList.classList.contains('active')) {
            subList.style.maxHeight = subList.scrollHeight + "px";
         } else {
            subList.style.maxHeight = 0;
         }
      }
   });

};

window.app.Catalog();