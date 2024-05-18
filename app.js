

const fs=require("fs")

fs.writeFile("index.txt","hii",function(err){
    if(err) console.log(err);
    else console.log("done");
})
fs.readFile("index.txt",)
