console.log(process.argv.slice(2).reduce(function(acc,curr){
    return +acc+ +curr
}));

let result=0
for (let i=2;i<process.argv.length;i++){
    result=result+Number(process.argv[i])

}
console.log(result)
