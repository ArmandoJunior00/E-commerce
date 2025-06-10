function slider(change){
    document.querySelector('.one') .src= change;

};

let menu = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    navBar.toggle ('open');
}