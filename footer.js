/*Footer info*/
function kontaktFunction() {
    document.getElementById("kontaktInfo").classList.toggle("show");
}

function helpFunction() {
    document.getElementById("helpInfo").classList.toggle("show");
}

function linkFunction() {
    document.getElementById("linkInfo").classList.toggle("show");
}

/*Burger menu*/
var logo = document.querySelector('.container');
var menu = document.querySelector('.menu');

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu')
});