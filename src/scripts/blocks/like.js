window.app.functionLike = () => {

   // Open menu burger
   const likeBoxes = document.querySelectorAll('.go-js-like-box');
   if (!likeBoxes) return;

   // likeBoxes.forEach((likeBox) => {
   //    let likeItems = likeBox.querySelectorAll('.go-js-like-item');
   //    likeItems.forEach((likeItem) => {
   //       let likeCount = likeItem.querySelector('.like-box__count').innerHTML;
   //       let likeActive = likeItem.control;
   //       let newLikeCount;

   //       likeItem.addEventListener('click', () => {
   //          if (likeActive.checked) {
   //             newLikeCount = +likeCount + 1;
   //             likeCount = newLikeCount;
   //             console.log(likeCount);

   //          } else {
   //             newLikeCount = likeCount - 1;
   //             likeCount = newLikeCount;
   //             console.log(likeCount);
   //          }
   //       })
   //    });

   // });

};

window.app.functionLike();