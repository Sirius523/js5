'use strict';
//Задача1
function button(){
    var element = document.getElementById('element');
    element.innerHTML = 'Ку-ку! А я <b>жирный</b>!';
}

//Задача2
function button1(){
    let element1 = document.getElementById('element1');
    element1.innerHTML= '<h3>Абзац превратился в h3!</h3>'
}

//Задача3
function button2(){
    let element2 = document.getElementById('element2')
    element2.outerHTML = '<h3>' + element2.innerHTML + '</h3>';
}

//Задача4
function chislo(){
    var get1 = +document.getElementById('get1').value;
    var get2 = +document.getElementById('get2').value;
    var rezultat = document.getElementById('rezultat');
    rezultat.innerHTML = get1 + get2;
}

//Задача5
function chislo1(){
    var elem = document.getElementsByTagName('p');
    for (var i = 0; i < elem.length; i++){
        elem[i].innerHTML = i;
    }
}
