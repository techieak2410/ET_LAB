function isEligible(num){
    let promise = new Promise((callback1, callback2)=>{
        setTimeout(()=>{
            if(num>18){
                // resolve("Even Number")
                callback1("You Can Vote");
            } else {
                // reject("Odd Number")
                callback2("YOu Cant vote ");
            }
        }, 2000)
    })
    return promise
}


async function checkIsEligible(n){
    try{
        let result = await isEligible(n)
        console.log(result) // can vote
    } catch(err){
        console.log(err) // Cannot vote
    }
}

checkIsEligible(11)