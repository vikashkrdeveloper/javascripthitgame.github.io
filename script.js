let hit;
let time = 60;

const bubble = () => {
    let bubblevar = 1
    let rander;
    hit = Math.floor(Math.random() * 10);
    let context = '';
    for (bubblevar; bubblevar <= 180; bubblevar++) {
        rander = Math.floor(Math.random() * 10);
        context += `<div class="bubble">${rander}</div>`
    }
    document.querySelector('#bubbleparent').innerHTML = context;
    document.querySelector('#hit').innerHTML = hit

}

 
const Timer = () => {

    const setintervaltime = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#time").innerHTML = time;

        }
        else {
            clearInterval(setintervaltime)
            document.querySelector('#bubbleparent').innerHTML = "<div class='gameovermessage'><h1 class='gameover'>Game Over</h1></div>";

        }
    }, 1000)

    if (time == 0) {

    }


}
let score = 0;
const scorefun = () => {
    score += 10;
    document.querySelector('#score').innerHTML = score

}

const buttonselect = () => {
    let valuebutton;
    document.querySelector('#bubbleparent').addEventListener('click', (event) => {
        valuebutton = Number(event.target.textContent)
        if (hit === valuebutton) {
            buttonselect();
            bubble();
            scorefun();
        }
        else {
        }

    })

}


Timer();
bubble();
buttonselect();

