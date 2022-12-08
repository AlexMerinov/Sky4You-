window.app.functionLike = () => {

    // Open menu burger
    const likeBoxes = document.querySelectorAll('.go-js-like-box');
    if (!likeBoxes) return;
 
    likeBoxes.forEach((likeBox) => {
        let likeItems = likeBox.querySelectorAll('.go-js-like-item');
        likeItems.forEach((likeItem) => {
            let likeCount = likeItem.querySelector('.like-box__count');
            let likeActive = likeItem.control;
            if (likeActive.checked) {
                newLikeCount = Number(likeCount.textContent) + 1;
                console.log(newLikeCount);
                likeCount.textContent = newLikeCount;
            } else {
                newLikeCount = Number(likeCount.textContent) - 1;
                likeCount.textContent = newLikeCount;
                console.log(newLikeCount);
            }
        });
    });
 
 };
 
 window.app.functionLike();