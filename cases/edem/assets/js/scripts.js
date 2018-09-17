$('.center').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});