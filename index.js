
const logo = document.querySelector('.logo');
const sideNav = document.querySelector('.nav');

logo.onclick = () =>{
    
    console.log('it works');
    sideNav.classList.toggle('open');
}