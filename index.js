window.addEventListener('DOMContentLoaded', () => {
    //nav var
    const navMenu = document.getElementById('nav-menu')
    const navToggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')
    const navLinks = Array.from(document.querySelectorAll('.nav-link'))

    //slider var
    const sliderTrack = document.querySelector('.slider-track')
    const slideItem = document.querySelectorAll('.slide')
    const slideWidth = slideItem[0].offsetWidth
    const totalItems = slideItem.length
    let index = 0;

    //cloning 1&2 slide-item
    const cloneItem = slideItem[0].cloneNode(true)
    const cloneItem2 = slideItem[1].cloneNode(true)
    sliderTrack.appendChild(cloneItem)
    sliderTrack.appendChild(cloneItem2)

    

    //nav
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    const linkHide = () => {
        navMenu.classList.remove('show-menu')
    }
    navLinks.forEach((link) => {
        link.addEventListener('click', () => linkHide())
    })

    //slider

    function moveSlide() {
        index++;
        sliderTrack.style.transition = 'transform 0.5s ease-in-out'
        sliderTrack.style.transform = `translateX(${-index * slideWidth}px)`

        if (index === totalItems) {
            setTimeout(() => {
                index = 0
                sliderTrack.style.transition = 'none';
                sliderTrack.style.transform = `translateX(0px)`

            }, 500)
        }
    }
    setInterval(moveSlide, 5000); //moves the slide every 3secs

})