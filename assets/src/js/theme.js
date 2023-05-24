import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

window.lightGallery = lightGallery;
window.lgThumbnail = lgThumbnail;
window.lgZoom = lgZoom;

window.$ = window.jQuery = require("jquery");

/********* CORE FUNCTION - DON'T DELETE *********/

const offcanvasCollapse= document.getElementById("offcanvas");

offcanvasCollapse.addEventListener("show.bs.collapse", event => {
    // add class collapsed on caret icon

    event.target.parentElement.firstElementChild.lastElementChild.firstElementChild.classList.add("collapsed");
})

offcanvasCollapse.addEventListener("hide.bs.collapse", event => {
    // remove class collapsed on caret icon

    event.target.parentElement.firstElementChild.lastElementChild.firstElementChild.classList.remove("collapsed");
})

/*************** END CORE FUNCTION **************/

lightGallery(document.getElementById("gallery"), {
    selector: ".swiper-image",
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    galleryId: 1,
});

var sliderSwiper = new Swiper(".slider-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    // autoplay: {
    //     delay: 5000,
    // },
});

var eventsSwiper = new Swiper(".events-swiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    slidesPerView: "auto",
    spaceBetween: 24,
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});

var partnersSwiper = new Swiper(".partners-swiper", {
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
        1400: {
            slidesPerView: 7,
        },
    },
    spaceBetween: 24,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

$(document).ready(function () {
    $(".dropdown-menu").on("click", "li a", function() {
        $(this).closest(".dropdown-menu").siblings(".dropdown-toggle").find("span").text($(this).text());

        const href = $(this).attr("href");

        $(href).addClass("active show").siblings().removeClass("active show");
    });
});
