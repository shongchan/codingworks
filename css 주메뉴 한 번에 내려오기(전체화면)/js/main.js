$(function(){
    var depth1 = $('.gnb>li');
    var header = $('header');
    
    depth1.mouseenter(function(){
        header.stop().animate({height:'300px'});
    })
    depth1.mouseleave(function(){
        header.stop().animate({height:'50px'});
    })
})