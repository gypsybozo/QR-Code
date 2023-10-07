
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";
inquirer.prompt([
    {
        message: "type in url:",
        name:"url"
    },   
])
.then((answers) => {
  const url = answers.url;
  var qr_png=qr.image(url);
  qr_png.pipe(fs.createWriteStream('message.png'));
  fs.writeFile("message.txt",url,(err)=>{
    if(err)throw(err);
  });
})
.catch((error) => {
  if (error.isTtyError) {
    console.log("oh no");
  } else {
    console.log("oh no");
  }
});

