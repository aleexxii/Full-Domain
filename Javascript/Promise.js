/*
Promise states
    1. Resolve
    2. Reject
    3. Pending 
this are the promise states

Promise Combinators
    1. Race
    2. All
    3. Any
    4. Allsettled
this are the promis combinators

*/


const promise1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('From promise1')
    },1000)
})
const promise2 = new Promise((_, reject)=>{
    setTimeout(()=>{
        reject('From promise2')
    },2000)
})
const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('From promise3')
    },3000)
})
const promise4 = new Promise((_, reject)=>{
    setTimeout(()=>{
        reject('From promise4')
    },4000)
})


Promise.all([promise1,promise2,promise3,promise4])
.then(res => console.log('Result :',res))
.catch(err => console.log('Error : ', err))

/* 
So the promise all will return an array of resolved data if the all the promises are resolved either if any of the promise is
rejected it will return the error
*/

/*
Promise.race
It returned first settled promise(resolve, reject)

Promise.any
It will return fullfilled promise. if all the promise is rejected it will return rejec

Promise.allsettled
it will return an array of promise it include the status like fullfilled 
*/