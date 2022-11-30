document.addEventListener("DOMContentLoaded", () => {

   window.app = {};

   // Plugins
   @@include('./plugins/swiper.js');
   @@include('./plugins/nouislider.min.js');

   //Blocks

   @@include('./blocks/burger.js');
   @@include('./blocks/sliders.js');
   @@include('./blocks/init.js');
   @@include('./blocks/popup.js');
   @@include('./blocks/counter.js');
   @@include('./blocks/catalog.js');
   @@include('./blocks/choice.js');
}); 