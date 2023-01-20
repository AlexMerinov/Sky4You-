window.app.otherFunction = () => {

   const reviewItems = document.querySelectorAll('.reviews-item');
   if (!reviewItems) return;

   reviewItems.forEach((reviewItem) => {
      let answerBtn = reviewItem.querySelector('.go-js-answer');
      let closeAnswerBtn = reviewItem.querySelector('.reviews-item__answer-close');
      let rewAnswer = reviewItem.querySelector('.reviews-answer');

      answerBtn.addEventListener('click', openAnswer);
      function openAnswer(e) {
         answerBtn.classList.add('hidden');
         closeAnswerBtn.classList.add('visible');
         rewAnswer.classList.add('reviews-answer--active');
         if (rewAnswer.classList.contains('reviews-answer--active')) {
            rewAnswer.style.maxHeight = rewAnswer.scrollHeight + "px";
         } else {
            rewAnswer.style.maxHeight = 0 + "px";
         }
      }

      closeAnswerBtn.addEventListener('click', closeAnswer);
      function closeAnswer(e) {
         answerBtn.classList.remove('hidden');
         closeAnswerBtn.classList.remove('visible');
         rewAnswer.classList.remove('reviews-answer--active');
         rewAnswer.style.maxHeight = 0 + "px";
      }
   })

   //показ всех категорий в карточке товара
   const moreChars = document.querySelectorAll('.js-more-char');
   if (!moreChars) return;

   moreChars.forEach((moreChar) => {
      let btnMoreCar = moreChar.querySelector('.go-js-show-more-btn');
      let charList = moreChar.querySelector('.char-list');

      btnMoreCar.addEventListener('click', () => {
         charList.classList.toggle('show');
         btnMoreCar.classList.toggle('active');
         if (btnMoreCar.classList.contains('active')) {
            btnMoreCar.innerHTML = "Cкрыть";
         } else {
            btnMoreCar.innerHTML = "Все характеристики";
         }
      });
   })


   //показ всех категорий в карточке товара
   const catalogCards = document.querySelectorAll('.catalog-card');
   if (!catalogCards) return;

   catalogCards.forEach((catalogCard) => {
      let btnMoreCateg = catalogCard.querySelector('.catalog-card__more');
      let listTag = catalogCard.querySelector('.list-links');
      let listtagItem = listTag.querySelectorAll('.list-links__item')
      let size = listtagItem.length;
      let differenceSizeMob = size - 3;
      let differenceSizeDesc = size - 5

      if (document.documentElement.clientWidth <= 1024) {
         if (size <= 3) {
            btnMoreCateg.style.display = "none";
         }
         btnMoreCateg.innerHTML = "Ещё " + differenceSizeMob;
      } else {
         if (size <= 5) {
            btnMoreCateg.style.display = "none";
         }
         btnMoreCateg.innerHTML = "Ещё " + differenceSizeDesc;
      }

      btnMoreCateg.addEventListener('click', () => {
         listTag.classList.toggle('show');
         btnMoreCateg.classList.toggle('active');
         if (btnMoreCateg.classList.contains('active')) {
            btnMoreCateg.innerHTML = "Cкрыть";
         } else {
            if (document.documentElement.clientWidth <= 1024) {
               btnMoreCateg.innerHTML = "Ещё " + differenceSizeMob;
            } else {
               btnMoreCateg.innerHTML = "Ещё " + differenceSizeDesc;
            }
         }
      });
   })


   //рейтинг товара
   const reviewsBloks = document.querySelectorAll('.reviews');
   if (!reviewsBloks) return;

   reviewsBloks.forEach((reviewsBlok) => {
      let ratingGradBoxes = reviewsBlok.querySelectorAll('.rating-grade-js');
      let sumQun = 0;
      let starSummary = 0;
      let ratingTotalCount = reviewsBlok.querySelector('.rating-sum__quantity')
      let ratingImage = reviewsBlok.querySelector('.rating-on')

      ratingGradBoxes.forEach((ratingGradBox) => {
         let quantity = ratingGradBox.querySelector('.rating-grade__quantity');
         let unoQun = + quantity.dataset.count;
         if (unoQun === 0) {
            ratingGradBox.style.display = "none";
         }

         starSummary += ratingGradBox.dataset.stars * unoQun
         sumQun += unoQun;
      })

      let totalRating = starSummary / sumQun;
      ratingTotalCount.innerHTML = totalRating.toFixed(1);

      let totalRatingPercent = totalRating.toFixed(1) / 5 * 100;
      ratingImage.style.width = totalRatingPercent + "%";
   })

   //закрытие окна активности
   
   const artboards = document.querySelectorAll('.artboard');
      
   artboards.forEach((artboard) => {
      let artClose = artboard.querySelector('.js-art-close');

      artClose.addEventListener('click', () => {
         artboard.classList.remove('artboard--active');
      });
   });




   //Скрытие поиска при скроле
   const headerScroll = document.querySelector('.header-bot');
   let lastScroll = 0;
   const defaultOffset = 200;

   const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop;
   const containHide = () => headerScroll.classList.contains('header-bot--hide');

   window.addEventListener('scroll', () => {

      if (document.documentElement.clientWidth <= 1024) {
         if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            headerScroll.classList.add('header-bot--hide')
         }
         else if (scrollPosition() < lastScroll && containHide()) {
            headerScroll.classList.remove('header-bot--hide')
         }

         lastScroll = scrollPosition();
      }
   });


   //открытие каталога по ховеру 
   const openCatalogs = document.querySelectorAll('.go-js-hover');
   if (!openCatalogs) return;

   openCatalogs.forEach((openCatalog) => {

      const catalogWrapper = openCatalog.querySelector('.catalog-box-hidden');

      if (document.documentElement.clientWidth > 1024) {

         catalogWrapper.addEventListener("mouseenter", (event) => {
            openCatalog.classList.add('sidebar-main__catalog--active');

            if (openCatalog.classList.contains('sidebar-main__catalog--active')) {
               catalogWrapper.style.maxHeight = catalogWrapper.scrollHeight + "px";
            } else if (document.documentElement.clientWidth > 1360) {
               catalogWrapper.style.maxHeight = 370 + "px";
            } else if (document.documentElement.clientWidth > 1024) {
               catalogWrapper.style.maxHeight = 223 + "px";
            }
         });

         catalogWrapper.addEventListener("mouseleave", (event) => {
            openCatalog.classList.remove('sidebar-main__catalog--active');
            if (document.documentElement.clientWidth > 1360) {
               catalogWrapper.style.maxHeight = 370 + "px";
            } else if (document.documentElement.clientWidth > 1024) {
               catalogWrapper.style.maxHeight = 223 + "px";
            }
         });
      }

   });


   //выбрать способ оплаты
   const checkedCards = document.querySelectorAll('.go-js-checked');
   if (!checkedCards) return;

   checkedCards.forEach((checkedCard) => {
      checkedCard.addEventListener('click', () => {
         checkedCard.querySelector('.label-choice__input').checked = "true";
      });
   });

};

window.app.otherFunction();