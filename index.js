const toque = document.querySelector('.slider');
const body = document.body;

toque.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});




function view() {
    const view = document.querySelector('.viewer');
     const input = document.querySelector('#password');
 
     if(input.getAttribute('type') === 'text') {
         input.setAttribute('type', 'password');
         view.setAttribute('src', 'hide.png')
     }else {
         input.setAttribute('type', 'text');
         view.setAttribute('src', 'view.png')
     }
 }
