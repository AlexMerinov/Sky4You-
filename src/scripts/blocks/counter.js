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
   const counterCarts = document.querySelectorAll('.product-card__btns');

   counterCarts.forEach((counterCart) => {
      let addCartBtn = counterCart.querySelector('.product-card__btn');
      addCartBtn.addEventListener('click', () =>  {
         counterCart.classList.add('product-card__btns--active');

         counters.forEach((counter) => {
            let quantityValue = counter.querySelector('.count__input');
            let valueBtnsMunus = counter.querySelector('.count__btn--down');
            quantityValue.value = 1;
      
            valueBtnsMunus.addEventListener('click', function () {
               if (+quantityValue.value < 1) {
                  counterCart.classList.remove('product-card__btns--active');
               }
            });
         });
      })  
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