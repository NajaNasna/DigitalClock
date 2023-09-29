// let hrs= document.getElementById("hrs")
// let min= document.getElementById("min")
// const sec= document.getElementById("sec")

function displayTime(){
let time= new Date()
let hrs= time.getHours()
let min= time.getMinutes()
let sec= time.getSeconds()
let format= document.getElementById("format")

if(hrs >= 12){
    format.innerHTML = 'PM'
    }
    else{
        format.innerHTML = 'AM'
    }

    //to display not in 24 hr format:::

    if( hrs >= 12){
hrs= hrs-12
    }

    hour = hrs < 10? `0${hrs}` : hrs;
    minutes = min < 10? `0${min}` : min;
    seconds = sec < 10? `0${sec}` : sec;



document.getElementById("hrs").innerHTML=hour
document.getElementById("min").innerHTML=minutes
document.getElementById("sec").innerHTML=seconds


// console.log("hrs:"+hrs+ " min: "+min + "sec:"+sec);

}
setInterval(displayTime,1000)

