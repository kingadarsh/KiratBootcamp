// Q1:
// Read contents of a.txt.
// Write contents of a.txt converted to uppercase to b.txt.
// Let the calling function know when it's done using a callback.
// Use error-first arguments.

const fs=require("fs");

function readFromAWriteToB() {
    fs.readFile('a.txt','utf-8',(err,data)=>{
        if(err){
            // const error=new Error("there was")
            console.error("There was an error", err.message);
            return;
        }

        data=data.toUpperCase();

        fs.writeFile('b.txt',data,(err)=>{
            if(err){
                console.error(`There was a problem while write to b.txt`,err.message)
                return;
            }
            console.log("done!");
        })
    })
}

readFromAWriteToB();


// node  readFromAWriteToB.js