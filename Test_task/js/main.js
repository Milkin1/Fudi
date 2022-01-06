// Burger menu =========================================

const burger = document.querySelector('.main__burger'),
    navigation = document.querySelector('.main-navigation');
burger.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
            navigation.classList.remove('active');
            document.body.classList.remove('lock');

        } else {
            e.currentTarget.classList.add('active');
            navigation.classList.add('active');
            document.body.classList.add('lock');
        }

    }

);

// Popup ================================================

const popupParent = document.querySelectorAll('.popup-btn');

const noscroll = () => {
    document.body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
    document.body.classList.add('lock');
}

const scrollAgain = () => {
    document.body.classList.remove('lock');
    document.body.style.paddingRight = 0;
}

popupParent.length && popupParent.forEach(parent => {
        parent.addEventListener('click', (e) => {
                const close = parent.querySelectorAll('.popup__close');
                const logIn = parent.querySelector('.popup-login__body');
                const signUp = parent.querySelector('.popup-signup__body');

                close.length && close.forEach(c => {
                        c.addEventListener('click', () => {
                                logIn.classList.remove('open');
                                signUp.classList.remove('open');
                                scrollAgain()
                            }

                        )
                    }

                );
                e.target.classList.contains('popup-login') && (logIn.classList.add('open'), noscroll());
                e.target.classList.contains('popup-signup') && (signUp.classList.add('open'), noscroll());
            }

        )
    }

) ///Swiper ===============================================

const swiper = new Swiper('.swiper', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        }

        ,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }

        ,

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        }

        ,
    }

);