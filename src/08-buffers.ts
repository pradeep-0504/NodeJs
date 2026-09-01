import { Buffer } from "node:buffer";
//to handle raw binary data
// when working with network files

const buf=Buffer.from("hello");
console.log(buf); //<Buffer 68 65 6c 6c 6f>
console.log(buf.toString("utf-8")); //hello

//length

console.log("length",buf.length);//5

//It will allocates empty buffer with length 5
const fixedBuffer=Buffer.alloc(5);
console.log("empty fixed buffer: ",fixedBuffer); //empty fixed buffer:  <Buffer 00 00 00 00 00>

fixedBuffer.write("API");

console.log("Fixed buffer after write",fixedBuffer); //<Buffer 41 50 49 00 00>

//if data is coming in chunks

const chunks=[
    Buffer.from("Hello "),Buffer.from("Node "),Buffer.from("Js")
]
const combinedBuffer=Buffer.concat(chunks);

console.log(combinedBuffer,combinedBuffer.toString())