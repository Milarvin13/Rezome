
const singUpButton =document.getElementById('singUp');
const singInButton =document.getElementById('singIn');
const container =document.getElementById('container');

singUpButton.addEventListener('click',function(){
  container.classList.add('right-panel-active');
});

singInButton.addEventListener('click',function(){
  container.classList.remove('right-panel-active');
});