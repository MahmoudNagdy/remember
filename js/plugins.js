$(function () {

    $('.carousel').carousel({
        interval: 2000
      })

    $("html").niceScroll();

    $(".portfolio ul li a").on("click", function (e) {
        
        e.preventDefault();
       
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        
        $($(this).data("show")).fadeIn(300).siblings().not(".port-head, ul").fadeOut(300);
    });
    
    
    $(window).scroll(function () {
       
        if($(this).scrollTop() >= 400) {
            
            $(".scrollTop a").fadeIn(600).css({
                display:"inline-block"
            });
            
        } else{
            
            $(".scrollTop a").fadeOut(600);
            
        }
        
        $(".block").each(function () {
            
            if($(window).scrollTop() >= $(this).offset().top) {
                
                $($(this).data("check")).addClass("active").parent().siblings().find("a").removeClass("active");
                
            }
            
        })
        
    });
    
    $(".scrollTop a").on("click", function (e) {
        
        e.preventDefault();
       
        $("body, html").animate({
            scrollTop: 0
        }, 600)
        
    });
    
    $(".navbar-default .navbar-nav li a").on("click", function (e) {
       
        e.preventDefault();
        
        $("body, html").animate({
            
            scrollTop: $($(this).data("scroll")).offset().top +1
            
        }, 600);
        
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
        
    });
    
    $(".hero .overlay .hero-content .start").on("click", function (e) {
        
        e.preventDefault();
       
        $("body, html").animate({
            scrollTop: $(".about").offset().top + 1
        })
        
    });

});

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".count");
let started = false;

window.onscroll = function () {
    if(window.scrollY >= section.offsetTop - 500) {
        if (!started) {
            nums.forEach((num)=> startCount(num))
        }
        started = true;
    }
}

function startCount (el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}