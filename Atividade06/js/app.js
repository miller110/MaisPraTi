document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,

        pagination: {
            el: '.swiper-pagination'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    document.addEventListener('keydown', function (event) {
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    const gameInput = document.getElementById('gameInput');

    gameInput.addEventListener('keypress', function (event){
        if(event.key === 'Enter'){
            let searchGame = gameInput.value.trim().toUpperCase();

            switch(searchGame){
                case 'MARIO':
                    swiper.slideTo(0);
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    break;
                    case 'ZELDA':
                        swiper.slideTo(2);
                        break;
                default:
                    alert('Jogo não foi encontrado');
                    break;
            }
        }
    });
});




class MobileNavBar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavBar.init();


const btnLogin = document.getElementById("btnLogin");
const modal = document.querySelector(".modal-container");
const btnModalClose = document.querySelector(".btn-modal-close");
const itemListNavLogin = document.getElementById("itemListNavLogin");

itemListNavLogin.onclick = function () {
    modal.classList.add('show-modal')
}

btnLogin.onclick = function () {
    modal.classList.add('show-modal')
}

btnModalClose.onclick = function () {
    modal.classList.remove('show-modal')
}