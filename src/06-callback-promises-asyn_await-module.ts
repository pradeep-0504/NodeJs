type User={
    id:number,
    name:string,
    role:"admin" | "user"
}

const users:User[]=[
    {
        id:1,
        name:"pradeep",
        role:"user"
    },
    {
        id:2,
        name:"pradeep Kolisetty",
        role:"user"
    },
    {
        id:3,
        name:"Kolisetty venkata sai pradeep kumar",
        role:"admin"
    }
]
// function findUserWithCallback(
//     userId:number,
//     callback:(error: Error | null, user?:User)=>void
// ):void{
//     setTimeout(()=>{
//         const user=users.find(currentUser=>currentUser.id===userId)

//         if(!user){
//             callback(new Error(`userId with ${userId} was not found`));
//             return;
//         }
//         callback(null,user);
//     },1000);
// }

// findUserWithCallback(9,(error,useru)=>{
//     if(error){
//         console.error("error at callback :",error.message);
//         return;
//     }
//     console.log(`user Info:id:${useru?.id},name:${useru?.name},role:${useru?.role}`);
// })

function findUserwithPromise(userId:number):Promise<User>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user=users.find(currUser=>currUser.id === userId);
        if(!user){
            reject(new Error(`user with ${userId} id was not found in data`));
            return;
        }
        resolve(user);

        },1000)

    })
}
// findUserwithPromise(6)
// .then((user)=>{
//     console.log("Promise Result:",user.id,user.name,user.role);
// }).catch((error:Error)=>{
//     console.log("Promise Error",error.message)
// })
async function findUserWithAsynAwait(userId:number):Promise<void>{
    try{
        const user=await findUserwithPromise(userId);
        console.log("Async/Await",user.name);
    }catch(err){
        const msg=err instanceof Error ? err.message :"unknown Error";
        console.log("Async /Await",msg);
    }
}
findUserWithAsynAwait(1);