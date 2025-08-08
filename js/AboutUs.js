export class AboutUs {
    constructor() {
        this.animationTriggered = false;
        this.showAnimate();
    }

    showAnimate() {
        const SECTION = document.querySelector('.aboutUs');
        const LEFT = document.querySelector('.aboutUs__content--left');
        const RIGHT = document.querySelector('.aboutUs__content--right');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animationTriggered) {
                    LEFT.classList.add('active');
                    RIGHT.classList.add('active');
                    this.animationTriggered = true;
                    observer.disconnect();
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        });

        observer.observe(SECTION);
    }
}