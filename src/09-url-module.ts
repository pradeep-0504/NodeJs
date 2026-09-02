// import { URL } from "node:url";

function runUrlDemo():void{
    //create url object from url string
    const apiUrl=new URL(
        "https://api.pradeep.com/users?page=2&limit=10&sort=latest",
    )

console.log(
    apiUrl.href,
    apiUrl.protocol,
    apiUrl.hostname,
    apiUrl.pathname,
    apiUrl.search
)
//get the search params
const page=apiUrl.searchParams.get("page")
const limit=apiUrl.searchParams.get("limit")
const sort=apiUrl.searchParams.get("sort")

console.log(page,limit,sort);

//can also set the params using set

apiUrl.searchParams.set("page","3")
apiUrl.searchParams.set("limit","40");

console.log(apiUrl.href);

//can able to create a searchParam using the URLSearchParams
const queryParams=new URLSearchParams({
    search:"node js",
    page:"1",
    limit:"20",
    sort:"latest"
})
console.log(queryParams.toString()); //search=node+js&page=1&limit=20&sort=latest

}
runUrlDemo()