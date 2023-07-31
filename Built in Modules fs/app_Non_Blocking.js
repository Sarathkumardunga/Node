const fs = require("fs");
const virat = "./virat.txt";
const sachin = "./sachin.txt";
const abd = "./abd.txt";

//Check if file exists
//Method 1:  if u later going to modify the file
fs.stat(virat,(err)=>{
    if(err){
        console.log(`Error occured. Error: ${err}`);
    }else{
        console.log(`${virat} exists!`);
    }
})

//Change the permissions for now of virat file
fs.chmod(virat, 0o777, (err)=>{
    if(err){
        console.log(`Error: ${err}`);
    }
})


//Method 2:
fs.access(virat,fs.constants.W_OK, (err)=>{
    if(err){
        console.log(`Error: ${err}`);
    }else{
        console.log(`${virat} exists!`);
    }
})

//read/write/append

fs.writeFile(abd, "I have reset the Abd profile", (err)=>{
    if(err){
        console.log(`Error: ${err}`);
    }else{

        //Read the file
        fs.readFile(abd, 'utf-8', (err, data)=>{
            if(err){
                console.log(`Error: ${err}`);
            }
            else{
                console.log(`The content of ${abd} is: ${data}`);
                //Now append something to the file
                fs.appendFile(abd, "\nBut Abd is seriously from some different planet.", (err)=>{
                    if(err){
                        console.log(`Error: ${err}`);
                    }
                    else{
                        //=>append is successful then now Read the file again
                        fs.readFile(abd, 'utf-8', (err,data)=>{
                            if(err){
                                console.log(`Error: ${err}`);
                            }
                            else{
                                console.log(`The content of ${abd} is: ${data}`);
                            }
                        })
                    }
                })
            }
        })
    }
})

//As these are asynchronous, 'hi' is is printed first into the console
console.log('hAhA, i am executed first'); 


// But the problem in this way of writing asynchronous functions is that,
// we  could see that the callback HELL is building towards right like a PYRAMID 
// And the debugging gets difficult if this continues


/*  ***************************************************************** */

// So promises come to the RESCQUE

let p = new Promise((resolve, reject)=>{
    let a = 1+1;
    if(a===2){
        resolve("Success");
    }
    else{
        reject("Failed");
    }
});

p.then((message) => {
    console.log("This is from the then: " + message);
}).catch((message)=>{
    console.log(`This is from the catch: ${message}`);
})

//Promises are really useful when we need to something timettaking in the background
//like downloading image from different server and we just wanna do something meanwhile
//and instead of we wait for it to complete, we can do smth meanwhile using promises
//and also we can catch it using the catch statement to give user error if failed

 
