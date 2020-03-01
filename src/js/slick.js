$('.your-class').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 3,
      autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
            autoplay: true,
          autoplaySpeed: 5000,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
            autoplay: true,
          autoplaySpeed: 5000,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
            autoplay: true,
        autoplaySpeed: 5000,
          slidesToScroll: 1
        }
      }
    ]
  })
  .on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px')
  })