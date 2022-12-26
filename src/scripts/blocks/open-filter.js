window.app.openFilter = () => {

   // Open menu burger
   const openFilters = document.querySelectorAll('.go-js-filter-open');
   const closeFilters = document.querySelectorAll('.filter-close-js');
   if (!openFilters) return;

   openFilters.forEach((openFilter) => {
      let filterWindow = document.querySelector('.filter-column');
      let body = document.querySelector('.body');
      openFilter.addEventListener('click', () => {
         filterWindow.classList.add('filters--open');
         body.classList.add('lock');
      });

      closeFilters.forEach((closeFilter) => {
         closeFilter.addEventListener('click', () => {
            filterWindow.classList.remove('filters--open');
            body.classList.remove('lock');
         });
      });
   });

};

window.app.openFilter();