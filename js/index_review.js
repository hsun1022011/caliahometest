function reviewList(){
    let reviewWrap = document.querySelector('.reviewWrap');
    let reviewList = document.querySelector('.reviewList');
    let review = document.querySelector('.reviewList>li');
    let next = document.querySelector(".reviewRightArrow");
    let prev = document.querySelector(".reviewLeftArrow");

    let reviewLength = reviewList.length;//요소개수
    let showReview = 5 //보여줄요소
    console.log("reviewLength")
    let showBanner = 0; //카운트
    let liwidth = review.clientWidth;

    let moveX = 0;

    next.addEventListener('click',function(){
        if (showBanner < (reviewLength - showReview)){
            showBanner++;
            moveSlide();
            console.log("next")
        }
    })
    prev.addEventListener('click',function(){
        if (showBanner ===0){
            showBanner--;
            moveSlide();
        }
    })

    let moveSlide = () => {
        moveX = -liWidth * 2;
        banner.style.transform = `translateX(${moveX}px)`
    }
}