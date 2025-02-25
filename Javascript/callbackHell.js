function Task1 (callback) {
    console.log('Task one is running');
    callback()
}
function Task2 (callback) {
    console.log('Task two is running');
    callback()
}
function Task3 (callback) {
    console.log('Task three is running');
    callback()
}
function Task4 (callback) {
    console.log('Task four is running');
    callback()
}

Task1(()=>{
    Task2(()=> {
        Task3(()=>{
            Task4(()=>{
                console.log('all task is completed');
            })
        })
    })
})

// setTimeout

setTimeout(()=>{
    console.log('step one');
    setTimeout(()=>{
        console.log('step two ');
        setTimeout(()=>{
            console.log('step three');
        },1000)
    },1000)
},1000)

const abc = (msg, deley) => {
    return new Promise((resolve)=>setTimeout(()=> resolve(msg),deley))
}

abc('task is running', 1000)
    .then(result => {
        console.log(result);
        return abc('scond task is running', 1000)
    })
    .then(result => {
        console.log(result);
    })
