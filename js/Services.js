export class Services {
    constructor() {
        this.event();
    }
    event() {
        const CARDS = document.querySelectorAll('.cards__item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show--item');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        });
        CARDS.forEach(card => {
            observer.observe(card);
            card.addEventListener('mouseenter',() => {
                const CARD_TITLE = card.querySelector('.cards__title');
                const CARD_TEXT = card.querySelector('.cards__text');
                const CARD_BUTTON = card.querySelector('.cards__button');
                card.classList.add('cards__item--active');
                CARD_TITLE.classList.add('cards__title--active');
                CARD_TEXT.classList.add('cards__text--active');
                CARD_BUTTON.classList.add('cards__button--active');
            });
            card.addEventListener('mouseleave',() => {
                const CARD_TITLE = card.querySelector('.cards__title');
                const CARD_TEXT = card.querySelector('.cards__text');
                const CARD_BUTTON = card.querySelector('.cards__button');
                card.classList.remove('cards__item--active');
                CARD_TITLE.classList.remove('cards__title--active');
                CARD_TEXT.classList.remove('cards__text--active');
                CARD_BUTTON.classList.remove('cards__button--active');
            });
            card.addEventListener('click',() => {
                const IS_ACTIVE = card.classList.contains('cards__item--active');
                const CARD_TITLE = card.querySelector('.cards__title');
                const CARD_TEXT = card.querySelector('.cards__text');
                const CARD_BUTTON = card.querySelector('.cards__button');
                card.classList.toggle('cards__item--active', !IS_ACTIVE);
                CARD_TITLE.classList.toggle('cards__title--active', !IS_ACTIVE);
                CARD_TEXT.classList.toggle('cards__text--active', !IS_ACTIVE);
                CARD_BUTTON.classList.toggle('cards__button--active', !IS_ACTIVE);
            });
        });
    }
}