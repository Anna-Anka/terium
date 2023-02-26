export const resultCard = () => {
    if (document.querySelector('.result-card')) {
        const cards = document.querySelectorAll('.result-card');
        cards.forEach(card => {
            const text = card.querySelector('.result-card__text');
            const buttonOpen = card.querySelector('.result-card__controll--open');
            const buttonClose = card.querySelector('.result-card__controll--close');

            buttonOpen.addEventListener('click', () => {
                text.classList.remove('result-card__text--hidden');
                buttonOpen.classList.add('result-card__controll--hidden');
                buttonClose.classList.remove('result-card__controll--hidden')
            });

            buttonClose.addEventListener('click', () => {
                text.classList.add('result-card__text--hidden');
                buttonOpen.classList.remove('result-card__controll--hidden');
                buttonClose.classList.add('result-card__controll--hidden')
            });
        });
    }
}