const start=document.querySelector(".start");
const stop=document.querySelector(".stop");

start.addEventListener('click',start_timer);
stop.addEventListener('click',stop_timer);

var myinterval=setInterval(startfun,1000);
function stop_timer(){
    clearInterval(myinterval);
}
function start_timer(){
    setInterval(startfun,1000);

}




var city = 'delhi';
const API_KEY = "MqQRVTSc8Pnlf55d39L+BA==wQBiRKhjNqGKc1t2";

fetch('https://api.api-ninjas.com/v1/worldtime?city=' + city, {
    method: 'GET',
    headers: { 'X-Api-Key': API_KEY },
    contentType: 'application/json'
})
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error: ', error);
    });









function startfun(){
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}
d = new Date();
console.log(d.getHours()+" "+" "+d.getMinutes()+" "+d.getSeconds());

console.log(typeof(d.getHours()))