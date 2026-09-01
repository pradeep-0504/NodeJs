// fs- file system

/**
 * create folders
 * write files
 * read files
 * check file info
 * delete files
 */
import path from "node:path";
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

const Demo_folder_Path=path.join(process.cwd(),'file-system','fs-demo');
const sync_file_path=path.join(Demo_folder_Path,'sync-note.txt');
const promise_file_path=path.join(Demo_folder_Path,'sync-note.txt');


type FileResult={
    style:string;
    fileName:string;
    content:string;
    sizeInBytes:number
}

function ensureDemoFolderExists():void{
    if(!fs.existsSync(Demo_folder_Path)){
        fs.mkdirSync(Demo_folder_Path,{recursive:true})
    }
}

function runSyncExample():FileResult{

    //write content to a file and if files donot exist it will create one
    fs.writeFileSync(sync_file_path,"created using sync fs",'utf-8');
    //it will append
    fs.appendFileSync(sync_file_path,"Appended using sync fs",'utf-8');

    const content=fs.readFileSync(sync_file_path,'utf-8');

    const stats=fs.statSync(sync_file_path);
    return{
        style:'sync',
        fileName:path.basename(sync_file_path),
        content,
        sizeInBytes:stats.size
    }
}
async function runPromiseExample():Promise<FileResult>{

    await fsPromises.writeFile(
        promise_file_path,
        "created using promise apis",
        "utf-8"
    )
    await fsPromises.appendFile(
        promise_file_path,
        ",appended using promise apis",
        "utf-8"
    )
    const content=await fsPromises.readFile(promise_file_path,"utf-8");
    const stats=await fsPromises.stat(promise_file_path);
    return{
        style:"promises",
        fileName:path.basename(promise_file_path),
        content,
        sizeInBytes:stats.size
    }

}
async function main():Promise<void>{
    try{
        ensureDemoFolderExists();
        const syncResult=runSyncExample();
        const promiseResult=await runPromiseExample();
        console.log(syncResult);
        console.log(promiseResult);
    }catch(error){
        const message=error instanceof Error ? error.message : "unknown error";
        console.error("File System error",message);
    }
}
main();