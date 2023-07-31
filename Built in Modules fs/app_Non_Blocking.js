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


//But the problem in this way of writing asynchronous functions is that,
//we  could see that the callback HELL is building towards right like a PYRAMID 
//And the debugging gets difficult if this continues