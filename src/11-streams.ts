//whenu need to handle data piece by piece
//not loading data everything data once
//read files
//upload files
//download
// Data compression and decompression
// Database operations
// Real-time data processing

import { Readable, Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

//stream types
/**
 * readable stream - source of data
 * writable-destination where the data is writen
 * transform strream-read the data,change it and pass that forward
 */
 
const readableStream=Readable.from([
    "hello ",
    "from ",
    "node.js ",
    "streams"
])
   
const uppercaseTransform=new Transform({
    transform(chunk,encoding,callback){
        const text=chunk.toString().toUpperCase();
        callback(null,text);//this will send data(text) forward

    }
})

const writableStream=new Writable({
    write(chunk,encoding,callback){
         console.log("recieved chunk",chunk.toString());
         callback() //callback() to signal Node.js that you're ready for the next chunk
    }
})

async function main():Promise<void>{
    try{
        await pipeline(readableStream,uppercaseTransform,writableStream);
        console.log("stream completed");
    }
    catch(error){
        const msg=error instanceof Error ? error.message : "unknown error"
        console.log("stream failed",msg);
    }
}

main();