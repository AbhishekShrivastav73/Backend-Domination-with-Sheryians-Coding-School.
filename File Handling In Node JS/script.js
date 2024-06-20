const fs = require('fs');



// Creating a File 

fs.writeFile('file1.txt','This is data of the file 1',function(err){
    if(err) console.log(err);
    else console.log('File Created');
})


// Read File 

fs.readFile('file1.txt','utf-8',function(err,data){
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
})

// Append or add more content to it 

fs.appendFile('file1.txt',' (this is added by using append method)',function(err){
    if (err) {
        console.log(err);       
    } else {
        console.log('File Appended');
    }
})

// Reaname file

fs.rename('file1.txt','data.txt',function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('Renamed');
    }
})


// Delete File 

fs.unlink('data.txt',function(err){
    if(err) console.log(err);
    else console.log('deleted file');
})


// Creating Folder or directories 

fs.mkdir('lolo',function(err){
    err ? console.log(err) : console.log('Folder Created');;
})


// Rename folder 

fs.rename('lolo','lala',function(err){
    err ? console.log(err) : console.log('renamed');;
})

fs.writeFile('lala/newFie.txt','this is new file',function(err){
    err ? console.log(err) : console.log('File created');;
})


// Delete folder 

fs.rm('lala',{recursive : true},function(err){
    if(err) console.log(err);
    else console.log('dlted');
})
