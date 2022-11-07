window.onload=function(){
    const menuWrap = document.querySelector(".hamMenuWrap");
    const ham = document.querySelector(".ham");

    function toggleMenu(){
        
        if(ham.classList.contains("on")){
            ham.classList.remove("on");
            menuWrap.classList.remove("activeMenu");
        }
        else{
            ham.classList.add("on");
            menuWrap.classList.add("activeMenu");
        }
    }
    ham.addEventListener("click",toggleMenu)
}

$(function(){
    let showBanner = 0; 
    let moveX=0;
    let cloneObj = $(".banner>li").eq(0).clone();
    $(".banner").append(cloneObj);
    let liWidth = $(".banner>li").eq(0).width();
    let count = $(".banner>li").length;

    function moveSlide(){
        console.log(showBanner);
        console.log(count);
        moveX = -liWidth*showBanner;
        $(".banner").stop().animate({
            "margin-left":moveX+"px"
        },500)
        if(showBanner === 3){
            $(".pager>li").eq(0).addClass("active")
            .siblings("li").removeClass("active");
        }
        else{
            $(".pager>li").eq(showBanner).addClass("active")
            .siblings("li").removeClass("active");
        }
    }

    $(".rightArrow").on("click",function(){
        if(showBanner === 3){
            showBanner=0;
            $(".banner").css("margin-left",0)
        }
        showBanner++;
        moveSlide();
    })
    $(".leftArrow").on("click",function(){
        if(showBanner===0){
            showBanner=3;
            $(".banner").css("margin-left",-(count-1)*liWidth)
        }
        showBanner--;
        moveSlide();
    })
    $(".pager>li").on("click",function(){
        console.log($(this).index())//현재 선택한 요소가 몇번째 요소인지 찍어보자 -> index값을 showBanner에 넘겨주면됨
        showBanner = $(this).index();
        moveSlide();
    })
    let timer;
    timer = setInterval(() => {
        $(".rightArrow").trigger("click");
    }, 5000);

    $("#mainBanner").on({
        "mouseover":function(){
            clearInterval(timer)
        },
        "mouseout":function(){
            timer = setInterval(() => {
                $(".rightBtn").trigger("click");
            }, 3000)
        }
    })
});

// 회원가입혜택배너 상하처리
$(function(){
    let current = 0; 
    let banner = $('.signup>li'); 
    setInterval(function(){
        let prev = banner.eq(current);
        move(prev,0,'-100%');
        current = current+1;
        if(current==banner.length){
            current = 0;
        };
    let next = banner.eq(current);
    move(next,'100%',0);
    },3000)
    
    function move(tg,start,end){
        tg.css('top',start).stop().animate({top:end},500)
    }
});
//Resize 이벤트
$(window).on("resize",function(){
    resizeInit();
} )

function resizeInit(){
    winWidth =  $(window).width();
    console.log(winWidth);
    
    liWidth = winWidth;//배너 1개의 
    showBanner = 0;
    $(".banner").css("margin-left", 0);
    moveSlide();    
}
resizeInit();

//회원가입혜택배너 모바일
$(function(){
    let currentM = 0; 
    let bannerM = $('.signupMobile>li'); 
    setInterval(function(){

        let prev = bannerM.eq(currentM);
        move(prev,0,'-100%');
        currentM = currentM+1;
        if(currentM==bannerM.length){
            currentM = 0;
        };
    let next = bannerM.eq(currentM);
    move(next,'100%',0);
    },3000)
    
    function move(tg,start,end){
        tg.css('top',start).stop().animate({top:end},500)
    }
});


