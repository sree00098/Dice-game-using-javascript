const firstRn = Math.floor(Math.random()*6) + 1;
const firstDimg='abc/dice' + firstRn + '.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDimg);

const secondRn = Math.floor(Math.random()*6) + 1;
const secondDimg='abc/dice' + secondRn + '.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDimg);

if(firstRn>secondRn){
    document.querySelector('h1').innerHTML = 'the winner is player 1';
}
else if(firstRn<secondRn){
    document.querySelector('h1').innerHTML = 'the winner is player 2';

}
else{
    document.querySelector('h1').innerHTML = 'Draw';

}