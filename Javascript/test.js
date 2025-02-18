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
    console.log("returned promise 1");
    resolve();
  });
}
function testPromise2() {
  return new Promise((resolve) => {
    console.log("returned TEST 2");
    resolve();
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
    console.log("returned TEST 4");
    resolve();
  });
}

testPromise1()
  .then(() => testPromise2())
  .then(() => testPromise3())
  .then(() => testPromise4());
