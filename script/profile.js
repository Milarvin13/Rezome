let toggleProfile = document.querySelector('.toggle-profile');
let SectionProfile = document.querySelector('.section-pro');

let cart =document.querySelector('.toggle-cart');
let sectionCart = document.querySelector('.section-cart');


toggleProfile.addEventListener('click',function(){
    SectionProfile.classList.toggle('openpro');
});
cart.addEventListener('click',function(){
    sectionCart.classList.toggle('opencart');
});