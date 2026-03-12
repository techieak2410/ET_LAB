// Write an arrow function that will check if a given number is palindrome or not. If palindrome 
// the function will return true and false otherwise. Call the function and display messages 
// accordingly. 

const isPalindrome = (num) => {
    let rev = 0;
    let num1=num;
    while(num > 0){
        let rem = num%10;
        rev = rev*10 + rem;
        num = parseInt(num/10);
    }
    return rev==num1;
}
let num=11231
let output=isPalindrome(num)
if(output){
    console.log(`${num} is a palindrome number`)
}
else{
    console.log(`${num} is a not palindrome number`)
}