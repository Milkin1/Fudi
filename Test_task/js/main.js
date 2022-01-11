document.addEventListener('DOMContentLoaded', () => {

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
    const popupLink = document.querySelector('.popup-link');



    popupLink.addEventListener('click', (e) => {
        e.preventDefault();
    });
    const noscroll = () => {
        document.body.style.paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px';
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
                    // console.log(logIn);

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

    ) // Swiper ==============================================
    const swiper = new Swiper('.swiper', {

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });


    // Dynamically creation of cuisines block ===========================================
    const cuisinesBlock = document.querySelector('.cuisines__dynamic');
    const cuisines = {
        italian: 327,
        indian: 856,
        french: 24,
        steakhouse: 174,
        sushi: 237,
        mexican: 529,
        chinese: 145,
        pizza: 327,
        seafood: 731,
        american: 1437,
    };

    function makeSection() {
        const entries = Object.entries(cuisines);
        entries.sort((a, b) => b[1] - a[1]);

        entries.forEach(entrie => {
                cuisinesBlock.insertAdjacentHTML('afterbegin',
                    `<div class="cuisines__grid-element">
                <picture>
                    <source srcset="img/cuisines/${entrie[0]}.webp" type="image/webp" media="(min-width: 767px)">
                    <source srcset="img/cuisines/${entrie[0]}-sm.webp" type="image/webp">
                    <img class="cuisines__img" src="img/cuisines/${entrie[0]}.jpg" alt="${entrie[0]} cuisine">
                </picture>
                <span class="cuisines__recipes">${entrie[1]} recipes</span>
                <h3 class="cuisines__name">${entrie[0]}</h3>
            </div>`
                );
            }

        );

    }

    ;

    makeSection();

    // Counter ========================================================

    const counters = document.querySelectorAll('.counter-block__item');
    const speed = 500; // The lower the slower
    const scrollTarget = document.querySelector('.counter-block');
    const targetCoord = scrollTarget.getBoundingClientRect().top + window.pageYOffset; // Get the counter coordinates




    window.addEventListener('scroll', () => {
            const detectScrollToTarget = window.innerHeight + window.pageYOffset
            if (detectScrollToTarget >= targetCoord) {
                counters.forEach(counter => {
                        const updateCount = () => {
                            const target = +counter.getAttribute('data-target');
                            const count = +counter.innerText;

                            // Lower inc to slow and speed higher to slow
                            const inc = target / speed;

                            // Check if target is reached
                            if (count < target) {
                                // Add inc to count and output in counter
                                counter.innerText = Math.ceil(count + inc);
                                // Call function every ms
                                setTimeout(updateCount, 1);
                            } else {
                                counter.innerText = target;
                            }

                        }

                        ;
                        updateCount();
                    }

                );
            }
        }

    );


    }

);