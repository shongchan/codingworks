$(function(){
    $('.accordion .content').eq(0).show()
    $('.accordion .title').click(function(){
        $(this).siblings('.accordion .content').stop().slideUp()
        $(this).next().stop().slideToggle(300)
        $(this).toggleClass('active')
        $(this).siblings('.accordion .title').removeClass('active')
    })
})