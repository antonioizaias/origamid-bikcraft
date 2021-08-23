var footer = document.querySelector(".footer");
console.log(footer);

if (window.SimpleSlide) {
    new SimpleSlide({
        slide: 'quote',
        time: 5000,
    });
    
    new SimpleSlide({
        slide: 'portfolio',
        time: 5000,
        nav: true,
    });
}