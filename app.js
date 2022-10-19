// Total animation settings

const slides = document.querySelectorAll('.slide')

// Random choose active slide
slides[Math.floor(Math.random() * 5)].classList.add('active')

// With click enable active mode
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })
}

// disable active mode 
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}