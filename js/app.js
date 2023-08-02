$(document).ready(function(){
    $('.main__menu__responsive').hide();
    $('.fa-bars').click(function(){
       $('.main__menu__responsive').stop().slideToggle(500);
    });
    $(document).scroll(function(){
        $('.main__menu__responsive').slideUp(500);

    });
    $(document).resize(function(){
        $('.main__menu__responsive').slideUp(500);

    });

    $('.main__menu__responsive li .fa-chevron-up').click(function(){
        $(this).siblings('.sub__menu').stop().slideToggle();
        $(this).css('visibility', 'hidden');
        $(this).siblings('.fa-chevron-down').css('visibility', 'visible');
    });
    
    $('.main__menu__responsive li .fa-chevron-down').click(function(){
        $(this).siblings('.sub__menu').stop().slideToggle();
        $(this).css('visibility', 'hidden');
        $(this).siblings('.fa-chevron-up').css('visibility', 'visible');
    });
    
    
});