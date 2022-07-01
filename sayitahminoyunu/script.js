"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;

}

document.querySelector(".check").addEventListener("click" , function(){

const guess = Number(document.querySelector(".guess").value);
console.log(guess , typeof guess);
console.log(secretNumber , typeof secretNumber);


//input eğer boş girilirse.

if(!guess){
    displayMessage("Bir sayı giriniz");
}

// Sayılar birbiriyle eşleşirse.

else if(guess === secretNumber){

    displayMessage("Doğru Tahmin");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if(score > hightscore){

        hightscore = score;

        document.querySelector(".hightscore").textContent = hightscore;
    }

}

//sayılar birbiriyle eşleşmiyor ise.

else if(guess !== secretNumber){

    if(score>1){
        displayMessage(guess>secretNumber ? ":Çok Yüksek" : "Çok Düşük");
        document.querySelector('.score').textContent = score;
    }
    else{
        displayMessage("Oyunu Kaybettin");
        document.querySelector('.score').textContent = 0;
    }
    
}

});

document.querySelector('.again').addEventListener('click' , function(){

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Tahmin ediliyor...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    



});