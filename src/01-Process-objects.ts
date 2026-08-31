import process from 'node:process'

/**
 * process object is a global object in Nodejs that provides the control over the current NodeJs process
 * process .env is used to access environmental variables
 * const PORT = process.env.PORT || 3000; These or db passwords or URL's hsould'nt be hard coded
 * process.argv contains the command-line arguments passed to the Node.js application.
 * process .cwd returns teh current working directory from which Nodejs was started
 * process .exit terminates the NodeJs process
 */
// console.log(process.cwd());//returns the current directory
// console.log(process.pid)//returns the processId of current Node.Js process

// const nodeEnv=process.env.NODE_ENV || "development"

const command=process.argv[2] ?? "start";
//fail flag
//crasg flag

const shouldFail=process.argv.includes("fail")
const shouldCrash=process.argv.includes("--crash")

process.on("exit",(code)=>{
    console.log(`process finished with exit code ${code}`);
})

function runApp():void{
    console.log({command,});

    if(shouldCrash){
        console.error("Manual crash occured");
        process.exit(1);
    }
    if(shouldFail){
        console.error("Manual failure occured");
        process.exit(1);

    }
}
runApp();

// The process object is an important part of Node.js because it provides a connection between the Node.js application and the operating system. In production applications, the most important features are process.env for configuration, process.on() for handling signals, graceful shutdown for safely stopping the application, and process information such as memory usage, PID, and uptime.