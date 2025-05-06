$(".gallery").slick({

    // normal options
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
  
    // the magic
    // responsive: [{
  
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       infinite: true,
    //       autoplay: true,
    //       autoplaySpeed: 3000
    //     }
  
    //   }, {
  
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       dots: true,
    //       autoplay: true
    //     }
  
    //   }, {
  
    //     breakpoint: 300,
    //     settings: "unslick" // destroys slick
  
    //   }]
  });