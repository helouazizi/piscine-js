function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i],i,arr); // Call the function on each element
    }
}

const arr = [5, 6, 9, 8, 7, 5]

console.log(forEach(arr, console.log))