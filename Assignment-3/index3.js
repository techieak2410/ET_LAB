// Create a calculateFactorial function that takes a number and a callback function. The 
// calculateFactorial calculates the factorial and the callback function should display the factorial 
// value. 




function calculateFactorial(num, callback) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    
    }
    callback(factorial);
}   
function displayFactorial(factorial) {
    console.log("Factorial is: " + factorial);
}
calculateFactorial(5, displayFactorial);