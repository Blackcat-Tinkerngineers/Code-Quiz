//single event i.e. alarm, time in milliseconds
var timeout = setTimeout(function(){yourFunction()},10000);
//repeated events, gap in milliseconds
var interval = setInterval(function(){yourFunction()},1000);



document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 15;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    " "+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});