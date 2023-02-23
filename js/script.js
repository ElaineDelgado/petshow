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
})