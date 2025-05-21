$(window).on("resize scroll",function(e){
    navbarFixed();
});
function navbarFixed() {
    if ($(window).width() > 150) {
        if($(window).scrollTop() > 150 ) { // height header-top-row
            $(".primary-navigation").addClass("fixed-navbar");
        }
        else{
            $(".primary-navigation").removeClass("fixed-navbar");
        }
    }
    else {
        $(".primary-navigation").removeClass("fixed-navbar");
    }
}