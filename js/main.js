

// Cashing the scroll top element
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function (){
    if($(this).scrollTop()>=600)
    {
     scrollButton.show();
    }
    else
   {
       scrollButton.hide(); 
   }

});

// Click On Button Top     
        
    scrollButton.click(function (){
            $("html,body").animate({scrollTop: 0},600);    
    });


////////////////////////////////




//$(window).scroll(function(){
//var navbar = $('.navbar');
//if($(window).scrollTop() >= navbar.height()){
//if(!navbar.hasClass('scrolled')){
//navbar.removeClass('navbar-light').addClass('scrolled');
//} 
//}else{
//navbar.removeClass('scrolled');
//}
//});





// Add scrollspy to <body>
$('body').scrollspy({target: "#main-nav", offset: 50});


// Slider

    $('.slider-carousel').owlCarousel({
        rtl:false,
        loop:true,
        center:true,
        nav:false,
        dots:true,
        autoplay:false,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Partners-carousel
    $('.partners-carousel').owlCarousel({
    rtl:false,
    loop:true,
    autoplay:true,
    nav:true,
    dots:false,
    margin:10,
    responsiveClass:true,
        navText: ["<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>","<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>"],
					paginationSpeed: 300,
					rewindSpeed: 400, 
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
            loop:false
        }
    }
});


//$('#datepicker').datepicker({
//            uiLibrary: 'bootstrap4'
//        });