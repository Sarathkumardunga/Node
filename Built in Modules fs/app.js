//File system module of Node.js
//You can use the built in File System in Node.js to manage files and folders: read/write/delete etc..
const fs = require("fs");
//i will all the paths of other files in this app.js in variables
const virat = "./virat.txt";
const sachin = "./sachin.txt";
const abd = "./abd.txt";


// CASE 1: Synchronous way: The following code is blocking, JS does not move to the next line until the current line is executed

try{
    //check if virat exists:
    {fs.existsSync(virat) ? console.log(true) : console.log(false)};
    // or
    console.log(fs.existsSync("./abd.txt"));
}catch(err){
    console.log(`Error occured. Error: ${err}`);
}

//read virat data
try{
    let data = fs.readFileSync(virat, "utf-8");
    console.log(`The content in ${virat} is: ${data}`)
}catch(err){
    console.log(`Error occured. Error: ${err}`);
}


//create new cricketer or same can be used to override the content in the cricketer
//Use writeFile command
fs.writeFileSync(abd, 'Abdevillers is known as MR.360');


//read the new cricketer file
try{
    data = fs.readFileSync(abd, 'utf-8');
    console.log(`The content in ${abd} is: ${data}`);
}catch(err){
    console.log(`Error occured. Error: ${err}`);
}


//append content to the new cricketer
try{
    fs.appendFileSync(abd, "\nHe is an absolute modern-day legend.")

}catch(err){
    console.log(`Error occured. Error: ${err}`);
}

//read the content after appending content to the new cricketer
try{
    data = fs.readFileSync(abd, 'utf-8');
    console.log(`The content in ${abd} is: ${data}`);
}catch(err){
    console.log(`Error occured. Error: ${err}`);
}

//over ride the content of sachin file
try{
    fs.appendFileSync(sachin, "No matter what sachin is God of the Cricket.")
    let sachinData = fs.readFileSync(sachin, 'utf-8');
    console.log(`The content in ${sachin} is: ${sachinData}`);
}catch(err){
    console.log(`Error occured. Error: ${err}`);
}