$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $(window).scroll(function(){
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    var typed = new Typed(".typing", {
        strings: ["Full Stack Web Developer", "Mern Stack Dev", "React/React Native",],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    })
});


function sendMail(params){
    var tempParams = {
        email:document.getElementById("email").value,
        name:document.getElementById("toName").value,
        message:document.getElementById("message").value,
    };
    emailjs.send('service_kp6f4mc', 'template_1icw2j1', tempParams)
    .then(function(res){
        console.log("success", res.status);
    });
}
