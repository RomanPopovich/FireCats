export class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slider__item');
        this.indicators = document.querySelectorAll('.slider__check');
        this.prevBtn = document.querySelector('.slider__control--prev');
        this.nextBtn = document.querySelector('.slider__control--next');
        
        // Находим начальный активный индекс
        this.currentIndex = Array.from(this.slides).findIndex(
            slide => slide.classList.contains('slider__item--active')
        );
        
        // Если активный слайд не найден - устанавливаем первый
        if (this.currentIndex === -1) this.currentIndex = 0;
        
        this.event();
        this.updateSlider(); // Инициализация начального состояния
    }
    
    event() {
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        
        // Обработчики для индикаторов
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlider();
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlider();
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        this.updateSlider();
    }
    
    updateSlider() {
        // Рассчитываем индексы для соседних слайдов
        const prevIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        const nextIndex = (this.currentIndex + 1) % this.slides.length;
        
        // Сбрасываем классы у всех слайдов
        this.slides.forEach(slide => {
            slide.classList.remove(
                'slider__item--active',
                'slider__item--prev',
                'slider__item--next'
            );
        });
        
        // Устанавливаем новые классы
        this.slides[prevIndex].classList.add('slider__item--prev');
        this.slides[this.currentIndex].classList.add('slider__item--active');
        this.slides[nextIndex].classList.add('slider__item--next');
        
        // Обновляем индикаторы
        this.indicators.forEach(indicator => {
            indicator.classList.remove('slider__check--active');
        });
        this.indicators[this.currentIndex].classList.add('slider__check--active');
    }
}