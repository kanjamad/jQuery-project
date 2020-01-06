$(document).ready(function () {
    // preloader
    $('.preloader').fadeOut()
    // navBtn
    $('.navBtn').click(function(){
        $('.nav').toggleClass('nav--show')
    })
    // video Switch
    $('.video__switch-container').click(function(){
        const value = $('.video__switch-btn').hasClass('btnSlide')
        if(value){
            $('.video__switch-btn').removeClass('btnSlide')
            $('#video').get(0).play()
        }else{
            $('.video__switch-btn').addClass('btnSlide')
            $('#video').get(0).pause()
        }
    });
    // accordion
    // accordion
    $('.accordion__btn').click(function () {
        console.log(this);
        
        $('.accordion__btn').not(this).removeClass('rotate');
        $('.accordion__btn').not(this).parent().next().slideUp();

        
        $(this).toggleClass('rotate')
        $(this).parent().next().slideToggle();
        
    });








});
