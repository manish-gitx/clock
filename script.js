const start=document.querySelector(".start");
const stop=document.querySelector(".stop");
const inputElement = document.querySelector('.input');
const textBtn = document.querySelector('.text-btn');
const timezone=document.querySelector('.timezone')
const am=document.querySelector('.AM')




start.addEventListener('click',start_timer);
stop.addEventListener('click',stop_timer);


const API_KEY = "MqQRVTSc8Pnlf55d39L+BA==wQBiRKhjNqGKc1t2";
var htime,mtime,stime;
var myinterval;

async function fetchWorldTime(city) {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/worldtime?city=' + city, {
            method: 'GET',
            headers: { 'X-Api-Key': API_KEY },
            contentType: 'application/json'
        });
        if(!response.ok){
            country.innerHTML = `<p>${"City Not Found"}</p>`;
            fetchWorldTime("delhi");
            return;
        }
        const result = await response.json();
        console.log(result);
        htime=result.hour;
        mtime=result.minute;
        stime=result.second;
        timezone.innerHTML = `<p>${"TimeZone: "+result.timezone}</p>`;
        if(htime>=12){
            am.innerHTML=`<p>${"PM"}</p>`;

        }
        else{
            am.innerHTML=`<p>${"AM"}</p>`;

        }
        myinterval=setInterval(startfun,1000);
        // return result;
    } catch (error) {
        console.error('Error: ', error);
    }
}
fetchWorldTime("delhi")
textBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    var city=inputElement.value;
    console.log(city)
    country.innerHTML = `<p>${""}</p>`;
    stop_timer();
    fetchWorldTime(city)
    

    
})







function stop_timer(){
    clearInterval(myinterval);
}
function start_timer(){
    clearInterval(myinterval);
    myinterval=setInterval(startfun,1000);

}
function startfun(){
    stime++;
    if (stime >= 60) {
        stime = 0;
        mtime++;
        if (mtime >= 60) {
            mtime = 0;
            htime++;
            if (htime >= 24) {
                htime = 0;
            }
        }
    }

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}
