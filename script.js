
function updateTime(){
    let currentTime = document.getElementById('time');
    let newDate = new Date();
    let hours = String(newDate.getHours()).padStart(2, '0');
    let minutes = String(newDate.getMinutes()).padStart(2, '0');
    let seconds = String(newDate.getSeconds()).padStart(2, '0');
    let day_night = "AM";
    if (hours > 12){
        day_night = "PM"
        hours = hours - 12;
    } 

    if (hours > 10){
        hours =  + hours;
    }
    if (minutes > 10){
        minutes =  + minutes;
    }
    if (seconds > 10){
        seconds =  + seconds;
    }
   currentTime.textContent = ` ${hours}:${minutes}:${seconds}:${day_night}`; 
   currentTime.sethour
   let time = updateTime().length
}
setInterval(updateTime, 1000);
    updateTime();

console.log(time);