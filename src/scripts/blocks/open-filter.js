window.app.openFilter = () => {

   // Open menu burger
   const openFilters = document.querySelectorAll('.go-js-filter-open');
   if (!openFilters) return;

   openFilters.forEach((openFilter) => {
      let filterWindow = document.querySelector('.filters');
      openFilter.addEventListener('click', () => {
         filterWindow.classList.add('filters--open');
      });
   });

};

window.app.openFilter();