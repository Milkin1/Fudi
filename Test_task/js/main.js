//burger menu
const burger = document.querySelector('.main__burger'),
    navigation = document.querySelector('.main-navigation')

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

});