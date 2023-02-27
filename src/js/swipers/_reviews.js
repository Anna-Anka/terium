import '../_libs'

export const reviews = () => {
    if (document.querySelector('.reviews__swiper')) {
        return new Swiper('.reviews__swiper', {
            loop: true, 
            spaceBetween: 20,

            pagination: {
                el: '.reviews__pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                }
            },

            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },

                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
            },
        });
    }
};
