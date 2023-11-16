$(function(){
    $('.MainSlide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


    $('.MainBusinEss .Visual_slide').slick({
      dots: false,
      centerMode: true,
      variableWidth: true,
      arrows: false,
    });

      $('.MainBusinEss .Visual_slide').on('afterChange', function(e,s,c){
        $('.MainBusinEss .bar span').css({
          left: c* 125 + 'px',
        })
      })
      
      $('.MainBusinEss .Visual_slide').on('afterChange', function(e,s,c){
        console.log(e,s,c);
      $('.MainBusinEss .num span').text( '0' + (c + 1));
    })



});
