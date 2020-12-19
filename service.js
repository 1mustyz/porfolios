const prev = document.querySelector('.prev');
const next =document.querySelector('.next');

prev.onclick = ()=>{
    plusDivs(-1);
}
next.onclick = ()=>{
    plusDivs(1);
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.querySelectorAll(".mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}