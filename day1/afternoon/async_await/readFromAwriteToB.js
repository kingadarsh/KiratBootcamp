
const fs=require("fs/promises");


async  function readFromAWriteToB(){
    let data=await fs.readFile("a.txt","utf-8")
    data=data.toUpperCase();
    await fs.writeFile("b.txt",data);
    console.log("Completed")
}



readFromAWriteToB();







// node readFromAwriteToB.js