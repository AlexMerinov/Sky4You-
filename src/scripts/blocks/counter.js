window.app.Counter = () => {
   const counters = document.querySelectorAll('.count');
   if (!counters) return;

   counters.forEach((counter) => {
      let quantityValue = counter.querySelector('.count__input');
      let valueBtnsMunus = counter.querySelector('.count__btn--down');
      let valueBtnsPlus = counter.querySelector('.count__btn--up');

      valueBtnsMunus.addEventListener('click', function () {
         if (quantityValue.value >= 1) {
            quantityValue.value = quantityValue.value - 1;
         }
      });
      valueBtnsPlus.addEventListener('click', function () {
         quantityValue.value = +quantityValue.value + 1;
      });
   });

   //смена кнопки на счетчик 
   document.addEventListener('click', function(event) {
      if (event.target.classList.contains('add-btn')) {
         event.target.closest('.go-js-add-cart').classList.add('go-js-add-cart--active');
         event.target.closest('.go-js-add-cart').querySelector('.count__input').value = 1;
      } else if (event.target.classList.contains('count__btn--down')) {
         let value = event.target.closest('.count').querySelector('.count__input').value;
         if (+value < 1) {
            event.target.closest('.go-js-add-cart').classList.remove('go-js-add-cart--active');
         }
      } else {
         return;
      }
   });

   const saveDrafts = document.querySelectorAll('.save-draft');
   if (!saveDrafts) return;

   saveDrafts.forEach((saveDraft) => {
      let draftText = saveDraft.querySelector('.save-draft__text');
      saveDraft.addEventListener('click', function () {
         saveDraft.classList.toggle('add');
         if (saveDraft.classList.contains('add')) {
            draftText.textContent = 'отложено'
         } else {
            draftText.textContent = 'отложить заказ'
         }
      });
   })

};

window.app.Counter();