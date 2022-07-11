$(function(){
  $('.close-banner').click(function(){
      $('.banner-outer').slideUp()
  })
  $('.trigger').click(function(){
      $(this).toggleClass('active')
      $('.gnb li:last-child').toggleClass('active')
      // $('.sitemap-outer').toggle()
      // $('.sitemap-outer').slideToggle()
      $('.sitemap-outer').fadeToggle()
      
  })
})