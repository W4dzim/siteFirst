document.addEventListener("DOMContentLoaded", () => {
  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const menuBtn = document.querySelector('.menu__burger');
  const menuList = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu__burger--active');
    menuList.classList.toggle('menu__list--active');
  })

});