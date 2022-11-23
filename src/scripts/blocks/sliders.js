window.app.Sliders = () => {

   new Swiper('.banner-slider', {
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

};

window.app.Sliders();