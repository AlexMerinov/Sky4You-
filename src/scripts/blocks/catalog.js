window.app.Catalog = () => {
   const catalogItems = document.querySelectorAll('.catalog-item');
   if (!catalogItems) return;

   catalogItems.forEach((catalogItem) => {
      if (catalogItem.classList.contains('go-js-hover-catalog')) {
         catalogItem.addEventListener('mouseenter', e => {
            let subList = catalogItem.querySelector('.sub-catalog');
            subList.classList.add('active');
         });

         catalogItem.addEventListener('mouseleave', e => {
            let subList = catalogItem.querySelector('.sub-catalog');
            subList.classList.remove('active');
         });
      } else {
         const btnOpenCatalog = catalogItem.firstElementChild.querySelector('.go-js-drop-catalog');
         if (!btnOpenCatalog) return;
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
      }
   });

};

window.app.Catalog();