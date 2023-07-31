//Some extra methods of FS of node js

//to delete a file
const fs = require("fs");
const virat = "./virat.txt";

//if we wanna delete file.txt
fs.unlink("./file.txt", (err)=>{
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`file.txt has been removed successfully`);
    }
});

//to copy a file
fs.copyFile(virat, "virat_copy",/*To avoid duplicate from copy */ fs.constants.COPYFILE_EXCL,(err)=>{
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`virat is copied into virat_copy successfully`);
    }
})

//create directory
fs.mkdir("CSS", err=>{
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`CSS has been created successfully`);
    }
})

//to create branching directories
fs.mkdir("App/Styling", {recursive: true}, err=>{
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`App/Styling has been created successfully`);
    }
})

//to remove a directory
fs.rmdir("CSS", err=>{
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
        console.log(`CSS has been removed successfully`);
    }
})



