//build and read file paths
import path from "node:path"

const projectRoot=process.cwd();
console.log(projectRoot)

//path.join -> creates the path string it will not create the folder

// /uploads/user/42/profilephoto.png
//it does not check whether the file exists or not

const userId="42"
const originalName="profilephoto.png"

const uploadFilePath=path.join(
    projectRoot,"uploads","user",userId,originalName
)

console.log(uploadFilePath);

//Final part of a path
const fileName=path.basename(uploadFilePath); 
// C:\Users\PRADEEEP\Desktop\NodeJs\uploads\user\42\profilephoto.png
console.log(fileName) //profilephoto.png

//extension of the file name
const fileExt=path.extname(fileName);
console.log(fileExt) //.png

const parentFolder=path.dirname(uploadFilePath)
console.log(parentFolder); //Gets the directory portion of a path. "parent path"

