// split an object into two object containing equal amount of keys

const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

const splitObject = (obj) => {
  const toArray = Object.entries(obj);
  const mid = toArray.length / 2;
  
  const obj1 = Object.fromEntries(toArray.slice(0, mid));
  const obj2 = Object.fromEntries(toArray.slice(mid));
  
  return { obj1, obj2 };
};

splitObject(obj);
