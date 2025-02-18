// callback

// Example for callback hell

function test1(callback) {
  console.log("returned TEST 1");
  callback();
}
function test2(callback) {
  console.log("returned TEST 2");
  callback();
}
function test3(callback) {
  console.log("returned TEST 3");
  callback();
}
function test4(callback) {
  console.log("returned TEST 4");
  callback();
}

// test1(() => {
//   test2(() => {
//     test3(() => {
//       test4(() => {
//         console.log("All task completed");
//       });
//     });
//   });
// });

// Resolving using Promise
function testPromise1() {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("returned promise 1");
        resolve();
    },5000)
  });
}
function testPromise2() {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("returned TEST 2");
        resolve();
    },2000)
  });
}
function testPromise3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("returned TEST 3");
      resolve();
    }, 3000);
  });
}
function testPromise4() {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log("returned TEST 4");
        resolve();
    },1000)
  });
}

// testPromise1()
//   .then(() => testPromise2())
//   .then(() => testPromise3())
//   .then(() => testPromise4());

// using async and await

async function runSteps() {
    try{
        await testPromise1()
        await testPromise2()
        await testPromise3()
        await testPromise4()
        console.log('completed in async function');
    }catch(err){
        console.log(err);
    }
}

runSteps()