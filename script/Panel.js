let toggle =document.querySelector('.Toggle');
let panel = document.querySelector('.menu');

let Sub =document .querySelector('.sub-menu');
let Product = document.querySelector('.sub-menu-item');

let user =document .querySelector('.user');
let User = document.querySelector('.User');
let support =document .querySelector('.support');
let Support = document.querySelector('.Support');
let exit =document .querySelector('.exit');
let Exit = document.querySelector('.Exit');



let click = document.querySelector('.fi-rr-redo');
let answer = document.querySelector('.answer-comment');


toggle.addEventListener('click',function(){
 panel.classList.toggle('panel');
});



Sub.addEventListener('click',function(){
Product.classList.toggle('active');
});

user.addEventListener('click',function(){
User.classList.toggle('active');
});

support.addEventListener('click',function(){
Support.classList.toggle('active');
});

exit.addEventListener('click',function(){
Exit.classList.toggle('active');
});



click.addEventListener('click',function(){


answer.classList.toggle('eject');
});
    
    
    
        

