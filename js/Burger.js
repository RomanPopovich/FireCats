export class Burger {
    constructor(){
        this.burgerEvent();
    }
    burgerEvent(){
        const HEADER_MENU_CONTAINER = document.querySelector('.header__menu--container');
        const HEADER_MENU_ICON = document.querySelector('.header__menu--icon');
        const HEADER_MENU = document.querySelector('.header__menu');
        const BODY = document.body;
        HEADER_MENU_CONTAINER.addEventListener('click', ()=>{
            HEADER_MENU_CONTAINER.classList.toggle('active');
            HEADER_MENU_ICON.classList.toggle('active');
            HEADER_MENU.classList.toggle('active');
            BODY.classList.toggle('lock');
        });
    }
}