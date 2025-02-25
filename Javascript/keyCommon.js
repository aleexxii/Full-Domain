const obj1 = {
  name: "Jhon",
  age: 23,
  place: "somewhere",
};

const obj2 = {
  address: "In world",
  phone: 354542009,
  age: 33,
};

const ans = [];

for (let key in obj1) {
  if (key in obj2) {
    ans.push(key);
  }
}

console.log(ans);
