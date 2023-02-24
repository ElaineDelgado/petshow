const btnMenu = document.querySelector(".fa-bars")
const mobileMenu = document.querySelector(".nav-bar")


function handleClick(event) {
  event.preventDefault()
  mobileMenu.classList.toggle('active')
}
btnMenu.addEventListener('click', handleClick)


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    568: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    920: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  },
  freeMode: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
})