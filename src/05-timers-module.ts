
function runSetTimeOutExample():void{
    console.log("1.First");
    setTimeout(()=>{
        console.log("2.In set TimeOut, runs after 2 seconds");
    },2000);
    console.log("3.I will not wait for 2 ponint")

}

function runClearTimeout():void{
    const timerId=setTimeout(()=>{
        console.log("4.this message will run after 2 seconds")
    },2000)

    clearTimeout(timerId);
    console.log("4.clear timeout cancelled the 2nd timer");
}
function runSetInterval():void{
    let count=0;
    let intervalId=setInterval(()=>{
        count++
        console.log(`5.set interval count ${count}`);
        if(count==3){
            clearInterval(intervalId);
            console.log("6.setInterval stopped")
        }
    },1000)
}
function runsetImmediate():void{
    setImmediate(()=>{ //setImmediate will run once after the synchronous code is finished
        console.log("7.setImmediate callback");
    })
    console.log("8.synchronous code after set immediate")
}

function runExamples(){
    runSetTimeOutExample();
    runClearTimeout();
    runSetInterval();
    runsetImmediate()
}
runExamples();