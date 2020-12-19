const slideShows = document.querySelectorAll('.slide');
console.log(slideShows.length);

let index = 0;
slideShows[0].classList.add('active');

setInterval(()=>{
    index++;
    slideShows.forEach(slide=>{
        if (index === slideShows.length) index = 0;
        slide.classList.remove('active');

    })
slideShows[index].classList.add('active');

},7000);