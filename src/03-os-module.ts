//os
/**
 * cpu information
 * memory

 */
import * as os from "node:os";

function runOsDemo():void{
    console.log("platform",os.platform());
    console.log("platform",os.arch());
    console.log(os.release())
    console.log(os.freemem())
    console.log(os.cpus().length)

}

runOsDemo()