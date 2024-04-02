const fs=require("fs")


// fs.readdir("./dd", (err, data) => {
//     data.forEach((filename)=>{
//         fs.unlink(`./dd/${filename}`,(err)=>{
//             console.log("detlet sucessfully",filename)
//         })
//     })
// });
const nice="hi da mohan"
const[, ,noOfFiles]=process.argv
console.log(process.argv);
for(let i=1;i<=noOfFiles;i++){
    fs.unlinkSync(`./dd/text-${i}.html`,nice);
        console.log("completed",i)
    }
