const time_display = document.querySelector('#time_display');
const start_button = document.querySelector('#start_button');
const pause_button = document.querySelector('#pause_button');
const reset_button = document.querySelector('#reset_button');
let start_time;
let elapsed_time = 0;
let paused = true;
let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;
start_button.addEventListener('click', () => {
    if(paused){
        paused = false;
        start_time = Date.now() - elapsed_time;
        interval = setInterval(timeUpdate, 1000);
    }
});
pause_button.addEventListener('click', () => {
    if(!paused){
        paused = true;
        elapsed_time = Date.now() - start_time;
        clearInterval(interval);
    }
});
reset_button.addEventListener('click', () => {
    clearInterval(interval);
    paused = true;
    start_time = 0;
    elapsed_time = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    time_display.textContent = '00:00:00'
});
function timeUpdate(){
    elapsed_time = Date.now() - start_time;
    seconds = Math.floor((elapsed_time / 1000) % 60);
    minutes = Math.floor((elapsed_time / (1000 * 60)) % 60);
    hours = Math.floor((elapsed_time / (1000 * 60 * 60)) % 60);
    seconds= timeSwitch(seconds);
    minutes = timeSwitch(minutes);
    hours = timeSwitch(hours);
    time_display.textContent = `${hours}:${minutes}:${seconds}`;
    function timeSwitch(time){
        if (('0' + time).length > 2){
            return time;
        }
        else{
            return '0' + time;
        }
    }
}