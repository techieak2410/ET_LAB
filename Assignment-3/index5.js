// ider an array of car brands: 
// carBrands = [ "Toyota", "Ford", "BMW", "Mercedes-Benz", "Honda", "Audi", "Tata", "Tesla", 
// "Mahindra", "Volkswagen" ]; 
// a. Create a function which will take an array and display the array elements. Use this to 
// display the array after each following operation. 
// b. Add one more car brand to the array 
// c. Remove the last car brand from the array. 
// d. Check if the array contains “Tata”. 
// e. Sort the cars in alphabetical order. 
// f. 
// Make shallow copy of the array.

let carBrands = [ "Toyota", "Ford", "BMW", "Mercedes-Benz", "Honda", "Audi", "Tata", "Tesla", 
"Mahindra", "Volkswagen" ];
function displayArray(arr) {
    console.log(arr);
}

function addbrand(brandname){
    carBrands.push(brandname)
    displayArray(carBrands)
}

function removelastbrand(){
    carBrands.pop();
    displayArray(carBrands);
}
function conatinsbrand(brandname){
    if(carBrands.includes(brandname)) console.log(`${brandname} is there in list`);
    else console.log(`${brandname} is not there in list`);
}

function copy(){
    newcarBrands=[...carBrands]
    displayArray(newcarBrands);
}


addbrand("Fiat");
removelastbrand();
conatinsbrand("Fiat")
copy();


