document.addEventListener("DOMContentLoaded", () => {

   window.app = {};

   // Plugins
   @@include('./plugins/swiper.js');

   //Blocks

   @@include('./blocks/burger.js');
   @@include('./blocks/sliders.js');
   @@include('./blocks/init.js');
   @@include('./blocks/catalog.js');
}); 