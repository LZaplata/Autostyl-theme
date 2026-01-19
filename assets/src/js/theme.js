import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Swiper from "swiper";
import {Pagination, Autoplay, Navigation, Scrollbar} from "swiper/modules";

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
    selector: ".gallery__link",
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    galleryId: 1,
    exThumbImage: "data-external-thumb-image",
});

var sliderSwiper = new Swiper(".slider-swiper", {
    modules: [Navigation, Pagination, Autoplay],
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

// var eventsSwiper = new Swiper(".events-swiper", {
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
//     slidesPerView: "auto",
//     spaceBetween: 24,
//     breakpoints: {
//         768: {
//             slidesPerView: 3,
//         },
//     },
// });

// var partnersSwiper = new Swiper(".partners-swiper", {
//     slidesPerView: 2,
//     breakpoints: {
//         576: {
//             slidesPerView: 3,
//         },
//         768: {
//             slidesPerView: 4,
//         },
//         992: {
//             slidesPerView: 5,
//         },
//         1200: {
//             slidesPerView: 6,
//         },
//         1400: {
//             slidesPerView: 7,
//         },
//     },
//     spaceBetween: 24,
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
// });

const scrollableSwiperWrappers = document.querySelectorAll(".scrollable-swiper");

if (scrollableSwiperWrappers) {
    scrollableSwiperWrappers.forEach((scrollableSwiperWrapper) => {
        const slidesPerView = scrollableSwiperWrapper.dataset.slidesPerView;
        const scrollableSwiper = new Swiper(scrollableSwiperWrapper, {
            modules: [Scrollbar],
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            slidesPerView: 1,
            spaceBetween: 48,
            breakpoints: {
                576: {
                    slidesPerView: Math.min(2, slidesPerView),
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: Math.min(2, slidesPerView),
                    spaceBetween: 24,
                },
                992: {
                    slidesPerView: Math.min(3, slidesPerView),
                    spaceBetween: 48,
                },
                1200: {
                    slidesPerView: Math.min(4, slidesPerView),
                    spaceBetween: 48,
                },
                1400: {
                    slidesPerView: slidesPerView,
                    spaceBetween: 48,
                },
            },
        });
    });
}

$(document).ready(function () {
    $(".dropdown-menu").on("click", "li a", function() {
        $(this).closest(".dropdown-menu").siblings(".dropdown-toggle").find("span").text($(this).text());

        const href = $(this).attr("href");

        $(href).addClass("active show").siblings().removeClass("active show");
    });
});
