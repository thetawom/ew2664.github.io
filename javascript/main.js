const nav = $("nav");

$(".profile__photo").click(function () {
    expandNavigation();
    $("section").addClass("hidden");
});

$(".menu__item").click(function () {
    minimizeNavigation();
    if ($(this).hasClass("education-link")) {
        $(".education").removeClass("hidden");
    } else if ($(this).hasClass("work-experience-link")) {
        $(".work-experience").removeClass("hidden");
    } else if ($(this).hasClass("projects-link")) {
        $(".projects").removeClass("hidden");
    } else if ($(this).hasClass("about-me-link")) {
        $(".about-me").removeClass("hidden");
    } else if ($(this).hasClass("contact-link")) {
        $(".contact").removeClass("hidden");
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