$(document).ready(function () {
    // 상단 이동
    var topEle = $('#topBtn');
    var delay = 250;
    topEle.on('click', function () {
        $('html').stop().animate({scrollTop: 0}, delay);
    });

    // sidebar toggle Event
    function slideMenu() {
        $('#nav').toggleClass('left');
    }

    $(".menu-toggle-btn").click(function (event) {
        event.stopPropagation();
        $(".menu-toggle-btn").toggleClass("open");
        if ($('.menu-toggle-btn.open')) {
            $('#main').toggleClass('leftTest');
        }
        $("#nav").toggleClass("active");
        slideMenu();
    });

    $(".menu-list").find(".accordion-toggle").click(function () {
        $(this).next().toggleClass("open").slideToggle("fast");
        $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

        $(".menu-list .accordion-content")
            .not($(this).next())
            .slideUp(600)
            .removeClass("open");
        $(".menu-list .accordion-toggle")
            .not(jQuery(this))
            .removeClass("active-tab")
            .find(".menu-link")
            .removeClass("active")

        $('.sub-menu li > a').removeClass("active");
    });

    $('.accordion-toggle').click(function () {
        if ($('.active-tab')) {
            $(this).removeClass('active');
        } else if (!$('.active-tab')) {
            $('.menu-link').addClass('active');
        }
    });

    // var $selectMenu = null;

    $('.sub-menu li a').click(function () {
        $('.sub-menu li > a:focus').toggleClass('active');
    });

    $('.site-map-btn').click(function () {
        $('.site-map-wrapper').toggleClass('active');
        $('.btn.close').click(function () {
            $('.site-map-wrapper').removeClass('active');
        })
    });
    $('html').keydown(function (event) {
        if (event.keyCode == '27') {
            $('.site-map-wrapper').removeClass('active');
        }
    });

    // 지정한 위치로 scroll 이동
    $('.links a').click(function (e) {
        e.preventDefault();
        var targetId = $(this).attr("href");
        var top = $(targetId).offset().top - 245;
        $('html, body').stop().animate({scrollTop: top}, 1500);
    });

    // tab
    $(".tab-nav li a").click(function () {
        $(".tab-nav li a").removeClass("active");
        $(this).addClass("active");
        $(".tab-content > div").css("display", "none");
        var tabname = $(this).text();
        tabname = tabname.replace(' ', '');
        $("#" + tabname).css("display", "block");
    });

    // accordian
    $(function () {
        $("#accordian dt").click(function () {
            $("#accordian dl > .content").slideUp();
            if (!$(this).next().is(":visible")) {
                $(this).next().slideDown();
                $('.icon').css('display', 'none');
            }
        })
    })

    $(".contents").click(function () {
        $(this).next().toggleClass("active");
        $(".contents-list")
            .not($(this).next())
            .slideUp(600)
            .removeClass("active");

        $('.btn.close').click(function () {
            $('.contents-list').removeClass('active');
        })

        $(".contents")
            .not(jQuery(this))
            .removeClass("dp-none")
            .removeClass("active")
        $('.contents .contents-list').removeClass("active");
    })

    $('.newtab').click(function () {
        window.open(this.href);
        return false;
    });

})