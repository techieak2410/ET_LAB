// Answer the following questions using setTimeout, setInterval and clearInterval. 
// a. Create a function delayedGreeting that accepts a name and a delay time (in 
// milliseconds). After the specified delay, it should log a greeting message (e.g., "Hello, 
// [name]!"). 
// b. Display a 10 second count down timer in a webpage.


function delayedGreeting(name, delay) {
    setTimeout(function() {
        console.log(`Hello, ${name} Namaste`);
    }, delay);
}

delayedGreeting("Ashish", 1000); 
let countdown = 10;
const intervalId = setInterval(function() {
    if (countdown >= 0) {
        document.getElementById("para").innerText = countdown;
        countdown--;
    } else {
        clearInterval(intervalId);
    }
}, 1000);


