const box1 = document.getElementById('1')
const box2 = document.getElementById('2')
const box3 = document.getElementById('3')
const box4 = document.getElementById('4')
const p = document.getElementById('score')


const boxes = [box1, box2, box3, box4]
// var sound1 = new sound('click.wav');
const pImg = document.createElement('div');
p.appendChild(pImg);
pImg.innerHTML = '<img src = "coin_img.jpeg" width = 30px/>';
const pScore = document.createElement('div');
p.appendChild(pScore);
pScore.innerText = 0;
pScore.style.fontSize = "1.5em"
p.style.display = "flex";

box1.style.width = '100px'
box1.style.color = 'white'
box1.style.margin = '10px'
box1.style.height = '100px'
box1.style.cursor= 'pointer'
box1.style.backgroundColor = 'lime'

box2.style.width = '100px'
box2.style.color = 'white'
box2.style.margin = '10px'
box2.style.height = '100px'
box2.style.cursor= 'pointer'
box2.style.backgroundColor = 'seagreen'

box3.style.width = '100px'
box3.style.color = 'white'
box3.style.margin = '10px'
box3.style.height = '100px'
box3.style.cursor= 'pointer'
box3.style.backgroundColor = 'lime'

box4.style.width = '100px'
box4.style.color = 'white'
box4.style.margin = '10px'
box4.style.height = '100px'
box4.style.cursor= 'pointer'
box4.style.backgroundColor = 'lime'


let newNum = 1;
setInterval(() => {
   let randomNum = Math.floor(Math.random() * 4); 
     boxes[newNum].style.backgroundColor = 'lime'
     boxes[randomNum].style.backgroundColor = 'seagreen' 
     newNum = randomNum;

}, 2000);

const clickHandler = event => {
    if(event.target.style.backgroundColor == 'seagreen'){
        pScore.innerText = (+pScore.innerText + 1);
        // sound1.pScorelay();
     }
    else{
        pScore.innerText = 0;
    }
}

box1.addEventListener('click', clickHandler)
box2.addEventListener('click', clickHandler)
box3.addEventListener('click', clickHandler)
box4.addEventListener('click', clickHandler)
