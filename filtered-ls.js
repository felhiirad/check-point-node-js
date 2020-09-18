var fs=require("fs");
   /* fs.fstat.readdir(process.argv[2],function(err,data){
        if (err){
            return console.error(err)
        }
        var regexTest=new RegExp('.+\.'+ process.argv[3]+'$');
        data.filter(function(elm){
            return regexTest.test(elm);

        }).
        forEach(function(elm){
            console.log(elm);
        });
    });*/
    var path=require('path')
    fs.readdir(process.argv[2],function(err,list){
        list.forEach(function(file){
            if(path.extname(file)==='.'+process.argv[3])
            console.log(file)
        })
    })