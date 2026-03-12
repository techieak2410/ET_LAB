async function generateRandomNumer(){
    let newPromise=new Promise((resolve, reject) => {
        setTimeout(()=>{
            try{
                let rand_num=Math.floor(Math.random()*100)+1;
                isPrime();

                
             }
             catch{

                
             }

        },3000)
    })
}

function isPrime(num){
    let promise = new Promise((callback1, callback2)=>{
        setTimeout(()=>{
            if(num>18){
                // resolve kro for ("Even Number")
                callback1("it is prime");
            } else {
                // reject kro for ("Odd Number")
                callback2("not a prime");
            }
        }, 2000)
    })
    return promise
}


async function checkIsPrime(n){
    try{
        let result = await isPrime(n)
        console.log(result) // can vote
    } catch(err){
        console.log(err) // Cannot vote
    }
}



let rand_number=generateRandomNumer();
checkIsPrime(rand_number);