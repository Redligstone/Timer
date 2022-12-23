const timerElement = document.querySelector('.main__timer');
const startElement = document.querySelector('.main__start');
const stopElement = document.querySelector('.main__stop');
const resetElement = document.querySelector('.main__reset');

let seconds = 0;
let interval = 0;

startElement.addEventListener('click', start);
stopElement.addEventListener('click', stop);
resetElement.addEventListener('click', reset); 

function timer(){
    seconds++

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - ( hours * 3600)) / 60);
    let secs = Math.floor(seconds % 60);

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (secs < 10){
        secs = "0" + secs;
    }

    timerElement.innerText = `${hours}:${minutes}:${secs}`
}

function start(){
    if (interval){
        return
    }
    interval = setInterval(timer, 1000)
}

function stop(){
    clearInterval(interval)
    interval = 0;
}

function reset(){
    stop();
    seconds = 0;
    timerElement.innerText = '00:00:00'
}

