// Construct an array of 10 numbers and perform the following operations using higher-order  
// array methods – 
// a. Display the array elements using forEach 
// b. Produce a new array by squaring each number of the given array using map 
// c. Produce an array with all the even numbers present on the original array using filter 
// d. Remove any number from the array using filter 
// e. Sort the array in both ascending and descending order using sort and display 
// f. 
// Find the average of the array elements 
// g. Find the smallest number amongst the array elements. 

let arraynums=[1,2,3,4,5,6,7,8,9,10]

arraynums.forEach((i)=>{
    console.log(i);
})

let newarr=arraynums.map((i)=> i*i);
console.log(newarr)

let evenarr=arraynums.filter((i)=>(i%2==0))

console.log(evenarr)


let excludearr=arraynums.filter((i,num)=>(i!=num))





let total=arraynums.reduce((Sumn,n)=>sum+n,0);

let average=total/arraynums.length;

console.log(average);



