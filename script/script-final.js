let Navigation = document.querySelector(".navigation");
let toggle = document.querySelector('.toggle');
let Menu = document.querySelector('.menu-profile');
let image = document.querySelector('.image-profile');
let button = document.querySelector('.photo-profile');
let menuProfile = document.querySelector('.menu-p');




let n = 0;
image.addEventListener('click',function(){
  
  if(n ==0){
    Menu.style.width = "60%";
    n++;
  }else if(n == 1){
    Menu.style.width = "24%";
    n=0;
  }
  Menu.classList.toggle('new');
  });




toggle.addEventListener('click',function(){
  menuProfile.classList.toggle('active');
});

// let m = 0;
// button.addEventListener('click',function(){

//  if(m == 0){

//   menuProfile.style.transform = 'translate(-12%, 8%)';
  

//   m++;

//  }else if( m == 1){

//   menuProfile.style.transform = 'translate(-19%,-104%)';


//   m =0;
//  }

// menuProfile.classList.toggle('result');
// });