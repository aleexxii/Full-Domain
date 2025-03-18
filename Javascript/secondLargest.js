const array = [50, 40, 30, 20, 10]

const secondLargest = (array) => {
    let largest = 0;
    let secondLargest = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            secondLargest = largest
            largest = array[i]
        }else if(array[i] > secondLargest && array[i] !== largest){
            secondLargest = array[i]
        }
    }
    return secondLargest
}

console.log(secondLargest(array));