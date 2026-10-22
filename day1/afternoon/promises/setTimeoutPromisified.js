

function setTimeoutPromisified(time){
    return new Promise((resolve,reject)=>{

        setTimeout(resolve,time);
    })
}

const cb=()=>{
    console.log("hellow woreld");
}

setTimeoutPromisified(3000).then(cb);




// setTimeout(()=>{
//     console.log("Hii tehre")
// },1000);





// node setTimeoutPromisified.js