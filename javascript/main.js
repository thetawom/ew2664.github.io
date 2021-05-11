const nav = $("nav");
var default_section = ".education";

$(".profile__photo").click(function () {
    expandNavigation();
    $("section").addClass("hidden");
});

$(".menu__item").click(function () {
    minimizeNavigation();
    if ($(this).hasClass("education-link")) {
        default_section = ".education";
    } else if ($(this).hasClass("work-experience-link")) {
        default_section = ".work-experience";
    } else if ($(this).hasClass("activities-link")) {
        default_section = ".activities";
    } else if ($(this).hasClass("about-me-link")) {
        default_section = ".about-me";
    } else if ($(this).hasClass("contact-link")) {
        default_section = ".contact";
    }
    $(default_section).removeClass("hidden");
});


$(document).on("keypress", function (e) {
    if (e.which == 8 && nav.hasClass("minimized")) {
        expandNavigation();
        $("section").addClass("hidden");
    } else if (e.which == 13 && !nav.hasClass("minimizing")) {
        minimizeNavigation();
        $(default_section).removeClass("hidden");
    }
});

function expandNavigation() {
    if (nav.hasClass("minimized")) {
        nav.animate({
            bottom: "10vh",
            top: 0
        }, 400);
        setTimeout(() => {
            nav.removeClass("minimized").removeClass("minimizing");
        }, 200);
    }
}

function minimizeNavigation() {
    if (!nav.hasClass("minimizing")) {
        nav.addClass("minimizing");
        let newBottom = window.innerHeight - $(".profile").outerHeight() + 2 * parseInt($(".profile__photo").css("marginTop"));
        let shift = $(".profile__photo").innerHeight() / 2;
        if (window.innerWidth < 768) {
            newBottom = newBottom - $(".menu--left").innerHeight() - $(".menu--right").innerHeight();
        }
        setTimeout(() => {
            nav.animate({
                bottom: newBottom + shift,
                top: -shift
            }, 400, () => {
                nav.addClass("minimized");
            });
        }, 50);
    }
}

$(".drop-col").click(function () {
    $(this).parent().siblings(".entry__more").slideToggle(250, "swing");
    if ($(this).toggleClass("active").hasClass("active")) {
        $(this).parent().parent().removeClass("inactive");
        $(this).parent().parent().siblings(".entry").addClass("inactive");
    } else if ($(this).parents(".content").find(".drop-col.active").length == 0) {
        $(this).parents(".content").children(".entry").removeClass("inactive");
    }
});
