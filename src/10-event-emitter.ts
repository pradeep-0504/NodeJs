/**
 * if user registered u want to do something:
 *  send a welcome mail
 * write a log
 * notify some other service
 */

import EventEmitter from "node:events"

/**
 * .on   - register one listener
 * .once - register one listener that runs only one time
 * .emit - triggers an event and sends to the listeners
 */

const appEvents=new EventEmitter();

type userRegisterPayload={
    id:number,
    email:string
}

appEvents.on("user:registered",(user:userRegisterPayload)=>{
    console.log(`A user with ${user.email} registered successfully`)
})

appEvents.on("user:registered",(user:userRegisterPayload)=>{
    console.log(`A welcome email was sent to ${user.email}`)
})
//can register multiple listeners using on

appEvents.once("app-started",()=>{
    console.log("App started succesfully")
})


function registerUser():void{
    const user={
        id:1,
        email:'pkolisetty10@gmail.com'
    }
    console.log("user saved");

    appEvents.emit("user:registered",user);//here we pass the data from here like user--payload...this will be accesed when using like on,once..
    appEvents.emit("app-started");
    appEvents.emit("app-started");
    appEvents.emit("app-started");
    appEvents.emit("app-started");//even we emit them multiple times...it will run only once

}
registerUser();