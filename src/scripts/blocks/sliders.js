window.app.Sliders = () => {

   const sliderBanner = new Swiper('.banner-slider', {
      slidesPerView: 1.1,
      spaceBetween: 10,

      breakpoints: {
         768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
         },

         1360: {
            slidesPerView: 1,
            pagination: {
               el: '.banner-slider__pagination',
               clickable: true,
             },
         },
      }
   });

   const initSliders = () => {

      const sliders = document.querySelectorAll('.go-js-slider');
      if (!sliders) return;

      sliders.forEach((slider) => {
         
         const sliderBest = slider.querySelector('.slider-best');
         const sliderView = slider.querySelector('.slider-view');
         const navArrows = {
            navigation: {
               nextEl: slider.closest('.section').querySelector('.go-js-slider__btn--next'),
               prevEl: slider.closest('.section').querySelector('.go-js-slider__btn--prev'),
            }
         }

         switch (true) {
            case slider.dataset.sliderName == 'best':
               new Swiper(sliderBest, {
                  slidesPerView: 2.2,
                  spaceBetween: 10,
                  watchSlidesProgress: true,
                  breakpoints: {
                     768: {
                        slidesPerView: 2.6,
                        spaceBetween: 20,
                     },
                     1360: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        navigation: {
                           nextEl: navArrows.navigation.nextEl,
                           prevEl: navArrows.navigation.prevEl,
                        },
                     },
                  }
               }); 
               break;
            case slider.dataset.sliderName == 'view':
               new Swiper(sliderView, {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                  allowTouchMove: true, 
                  watchSlidesProgress: true,
                  loop: true,
                  breakpoints: {
                     768: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                     },
                     1360: {
                        slidesPerView: 3,
                        navigation: {
                           nextEl: navArrows.navigation.nextEl,
                           prevEl: navArrows.navigation.prevEl,
                        },
                     }
                  }
               });
               break;
         }
      });

   };

   initSliders();
};

window.app.Sliders();