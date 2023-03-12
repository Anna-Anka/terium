export const reviewsButtonMore = () => {
    if (document.querySelector('.review-card__more')) {
        const buttonsShow = document.querySelectorAll('.review-card__more');

        buttonsShow.forEach(button => {
            button.addEventListener('click', () => {
                button.previousElementSibling.classList.add('review-card__text--visible');
                button.classList.add('review-card__more--hidden')
            })
        })
    }
}