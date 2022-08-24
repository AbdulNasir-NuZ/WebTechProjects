const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secoundElement = document.querySelector(".secound");

function updateClock() {
     const currentDate = new Date();
   //setTimeout(updateClock, 1000);
     const hour = currentDate.getHours();
     const minute = currentDate.getMinutes();
     const secound = currentDate.getSeconds();
     const hourDeg = (hour / 12) * 360;
     hourElement.style.transform =`rotate(${hourDeg}deg)`;
     const minuteDeg = (minute / 60) * 360;
     minuteElement.style.transform =`rotate(${minuteDeg}deg)`;
     const secoundDeg = (secound / 60) * 360;
     secoundElement.style.transform =`rotate(${secoundDeg}deg)`;

     //console.log(hour,minute,secound);
}
updateClock();

setInterval(updateClock, 1000)