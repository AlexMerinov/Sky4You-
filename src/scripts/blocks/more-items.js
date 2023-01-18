window.app.moreItems = () => {

   // Open menu burger
   const overflowBoxes = document.querySelectorAll('.box-overflow');
   if (!overflowBoxes) return;

   overflowBoxes.forEach((overflowBox) => {
      let btnMore = overflowBox.querySelector('.go-js-more');
      btnMore.addEventListener('click', () => {
         overflowBox.classList.toggle('box-overflow--active');
         btnMore.classList.toggle('more-items--active');
         if (overflowBox.classList.contains('box-overflow--active')) {
            btnMore.innerText = "Показать основное";
            overflowBox.style.maxHeight = overflowBox.scrollHeight + "px";

         } else {
            btnMore.innerText = "Показать ещё";
            overflowBox.style.maxHeight = overflowBox.scrollHeight + "px";
         }
      });
   });

};

window.app.moreItems();