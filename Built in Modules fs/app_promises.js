//3) Using promises we can solve the problem of callback HELL

const fs = require("fs");

const virat = "./virat.txt";
const sachin = "./sachin.txt";


//using promises

//write file
//read file
//console.log
//append file
//read file
//console.log
//catch statement

fs.promises.writeFile(sachin, "I am resetting sachin file using promises")  
.then(()=>fs.promises.readFile(sachin, 'utf-8'))
.then(/*resolve*/(data) => {console.log(`${sachin} content: ${data}`);},
      /* reject*/ (err)=>{console.log(`Error1: ${err}`);})
.then(()=>fs.promises.appendFile(sachin, "\nSachin is Well known as Master Blaster!"))
.then(()=>fs.promises.readFile(sachin, 'utf-8'))
.then(/*resolve*/(data) => {console.log(`${sachin} content: ${data}`);},
      /* reject*/ (err)=>{console.log(`Error2: ${err}`);})
.catch((err)=>{
    console.log(`Error: ${err}`);
})

console.log("Hi");