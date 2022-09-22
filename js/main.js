/* 스크롤이 되면 헤더 색이 바뀜 */
$(window).scroll(function(){
    if($(window).scrollTop() == 0){
        $("#header_wrap").removeClass("scroll");
    }
    else if($(window).scrollTop() >= 100){
        $("#header_wrap").addClass("scroll");
    }
});
/* 
모바일 상태에서 햄버거 버튼을 누르면, 
메뉴가 보임
*/
$(".m_menuBtn").click(function(){
    $(".m_menuBtn").toggleClass("on");
    $(".menu_container").fadeToggle();
    
    if($(this).hasClass("on")){
        $(".menu_container").fadeIn();
        $("body").css({overflow : "hidden"})
    }else{
        $(".menu_container").fadeOut();
        $("body").css({overflow : "auto"})
    }
});

$(window).resize(function(){
    let winW = $(window).width(); // 브라우저의 가로 길이를 변수에
    console.log('winW',winW);
    if(winW >= 1023 && $(".menu_container").is(":hidden")){
        console.log("nav가 안보임");
        $(".menu_container").removeAttr("style");
    }
});
/* 
scrillTop() : 스크롤바 위치를 알아오거나 정함 
*/