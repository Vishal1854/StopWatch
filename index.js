let currentTimer=document.querySelector(".para")
let buttonContainer=document.querySelector(".btn-container")

let secs=0;
let mins=0;
let hrs=0;
let timerId=0;

function timer(event){
    const button=event.target.name;
    console.log(button)
    if(button==="Start"){
        timerId=setInterval(()=>{
            secs++;
            if(secs>58){
               secs=0;
               mins++;
            }
            if(mins>58){
                mins=0;
                hrs++;
            }
            currentTimer.innerText=`${hrs<10?`0${hrs}`:hrs}`+`:`+`${mins<10?`0${mins}`:mins}`+`:`+`${secs<10?`0${secs}`:secs}`
        },1000)
    }
    if(button==="Stop"){
        clearInterval(timerId)
    }
    if(button==="Reset"){
        clearInterval(timerId)
        currentTimer.innerText=`00:00:00`
    }
}

buttonContainer.addEventListener("click",timer)