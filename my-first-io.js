var fs=require("fs");
var newLineFile=fs.readFileSync(process.argv[2],'utf8');
console.log(newLineFile.toString().match(/\n/g).length);



//2eme methode 
var fe =require("fs")
var content=fs.readFileSync(process.argv[2])
var line=content.toString().splite('\n').length-1
console.log(line)