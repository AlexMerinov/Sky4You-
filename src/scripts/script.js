document.addEventListener("DOMContentLoaded", () => {

   window.app = {}

   // Plugins
   @@include('./plugins/swiper.js');
   @@include('./plugins/nouislider.min.js');
   @@include('./plugins/cookie.min.js');
   @@include('./plugins/fancybox.umd.js');

   // Blocks

   @@include('./blocks/burger.js');
   @@include('./blocks/sliders.js');
   @@include('./blocks/init.js');
   @@include('./blocks/popup.js');
   @@include('./blocks/counter.js');
   @@include('./blocks/catalog.js');
   @@include('./blocks/choice.js');
   @@include('./blocks/range-slider.js');
   @@include('./blocks/cookie.js');
   @@include('./blocks/like.js');
   @@include('./blocks/tabs.js');

})