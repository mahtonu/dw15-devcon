// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

//welcome message animate
(function () {
    //animate welcome message 
    $('.features').addClass('animated fadeInLeft');
    $('.actions').addClass('animated fadeInLeft');
    $('.action-call').addClass('animated flipInX');

    $('.features1').addClass('animated pulse');
    $('.features2').addClass('animated zoomIn');
    $('.feature3').addClass('animated fadeInLeftBig');
    $('.feature4').addClass('animated zoomIn');
    $('.feature5').addClass('animated fadeInRightBig');

})();

//google maps
function initialize() {
    var myCenter = new google.maps.LatLng(23.76948, 90.38133);
    var mapProp = {
        center: myCenter,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
   