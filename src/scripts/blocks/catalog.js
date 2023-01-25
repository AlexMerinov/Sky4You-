window.app.Catalog = () => {
   const catalogItems = document.querySelectorAll('.catalog-item');
   if (!catalogItems) return;

   catalogItems.forEach((catalogItem) => {
      if (catalogItem.classList.contains('go-js-hover-catalog') && document.documentElement.clientWidth > 1024) {
         let subList = catalogItem.querySelector('.sub-catalog');

         catalogItem.addEventListener('mouseenter', e => {
            subList.classList.add('active');
         });

         catalogItem.addEventListener('mouseleave', e => {
            subList.classList.remove('active');
         });
      } else {
         const listOpen = () => {
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

         //открытие у элементов фильтра
         if (catalogItem.classList.contains('filters__catalog-item')) {
            const headerClick = catalogItem.querySelector('.cat-header');

            headerClick.addEventListener("click", (event) => {
               listOpen();
            });

            const btnOpenCatalog = catalogItem.querySelector('.go-js-drop-catalog');
            btnOpenCatalog.addEventListener("click", (event) => {
               listOpen();
            });
         }

         //открытие элементов списка
         const btnOpenCatalog = catalogItem.querySelector('.go-js-drop-catalog');
         btnOpenCatalog.addEventListener("click", (event) => {
            listOpen();
         });
      }
   });

};

window.app.Catalog();