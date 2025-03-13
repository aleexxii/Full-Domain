var x = 5;

console.log(`From top : `, a());
console.log(`From top : `, b());
console.log(`From top : `, x);

function a (){
    var x = 20
    return x
}
function b (){
    var x = 100
    return x
}

/*
when running a peace of code it will create a context inside the context there is two thing memory and code 
memory will keep the variable name and value as key value pair 
when we are invoking a function it will create a context inside the code/ thred of execution the context also two phases
variable enivorment/code phase and thred of execution/code same as repeat here
*/

for(let i = 0; i < 10; i++){
    setTimeout(()=>{
        console.log(i)
    },i * 3000)
}
for(var i = 0; i < 10; i++){
    setTimeout(()=>{
        console.log(i)
    },i * 3000)
}
for(var i = 0; i < 10; i++){
    setTimeout(()=>{
        console.log(i)
    }, 3000)
}