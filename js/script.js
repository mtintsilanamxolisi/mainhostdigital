/*================Sticky Navigation Bar===============*/



/*================Navigation Bar Open/Close Toggle===============*/

const showMenu = (toggleId, navId) => {
    const Toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)
    if(Toggle && nav) {
      Toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
      })
    }
  }
  
  showMenu('nav-toggle', 'nav-menu')
  
  
  
  /*================Close Navigation Bar on Link Click===============*/
  
  
  
  /*================Ourclients Swiper initialization and configuration===============*/
  var swiper = new Swiper(".mySwiper", {
      cssMode: true,
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
  
  /*================Scroll Reveal Animations===============*/
  
  const martScroll = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  // scroll Home
  
  martScroll.reveal('.home__data-title',{})
  martScroll.reveal('.home__data-desc',{})
  martScroll.reveal('.home__btn',{})
  martScroll.reveal('.home__image',{})
  
  
  //scroll About
  
  martScroll.reveal('.about__image',{})
  martScroll.reveal('.about__data',{})
  martScroll.reveal('.about__data-desc',{})
  
  
  //why choose us
  
  martScroll.reveal('.whychooseus__title',{})
  martScroll.reveal('.whychooseus__data',{})
  martScroll.reveal('.whychooseus__card',{})
  martScroll.reveal('.whychooseus__card-title',{})
  martScroll.reveal('.whychooseus__tag  ',{})
  martScroll.reveal('.whychooseus__card-desc',{})
  
  
  //services
  
  martScroll.reveal('.services__tag',{})
  martScroll.reveal('.services__title',{})
  martScroll.reveal('.services__data',{})
  martScroll.reveal('.services__single',{})
  martScroll.reveal('.services-desc',{})
  martScroll.reveal('.btn-primary',{})
  martScroll.reveal('.btn-secondary',{})
  
  
  //services cards
  
  martScroll.reveal('.sc__container',{})
  martScroll.reveal('.scard',{})
  martScroll.reveal('.imgbx',{})
  martScroll.reveal('.scard__content',{})
  
  
  //plans & pricing & our clients
  
  martScroll.reveal('.ourclients__tag',{})
  martScroll.reveal('.ourclients__container',{})
  martScroll.reveal('.pricingcontainer',{})
  martScroll.reveal('.webheading',{})
  martScroll.reveal('.btn_wrap',{})
  martScroll.reveal('.toogletag',{})
  martScroll.reveal('.switch',{})
  martScroll.reveal('.content',{})
  martScroll.reveal('.h3heading',{})
  martScroll.reveal('.scard__content',{})
  martScroll.reveal('.pl__desc',{})
  
  
  //contact
  martScroll.reveal('.contact__container',{})
  martScroll.reveal('.contact__tag',{})
  martScroll.reveal('.contact__title',{})
  martScroll.reveal('.contact__name',{})
  martScroll.reveal('.contact__number',{})
  martScroll.reveal('.contact__message',{})
  
  
  
  //footer
  
  martScroll.reveal('.footer__container',{})
  martScroll.reveal('.footer__details',{})
  martScroll.reveal('.footer__logo',{})
  martScroll.reveal('.footer__navigation',{})
  martScroll.reveal('.footer__links',{})
  martScroll.reveal('.footer__text',{})
  martScroll.reveal('.footer__contact',{})
  martScroll.reveal('.footer__social',{})
  
  
  /*================ Responsive Design ===============*/
  
  
  
  