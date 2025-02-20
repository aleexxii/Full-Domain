const removeRepeatElements = (array) => {
  const track = {};
  const result = [];
  for (let num of array) {
    track[num] = (track[num] || 0) + 1;
  }

  for (let num of array) {
    if (track[num] == 1) {
      result.push(num);
    }
  }
  console.log(result);
};

const array = [1, 2, 2, 3, 4, 4, 5];
removeRepeatElements(array);
