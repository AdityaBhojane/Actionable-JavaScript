// array is a collect of values having different data types 

let arr = [1,2,3,false, "abcd"];
// some methods are mutate the original array 
// mutable and immutable methods are there
// const arrTwo = arr.slice(0,3);


// array length vs index 
// [1,2,3,false, "abcd"];
//  0 1 2   3       4    index
//  1 2 3   4       5    length

let arrThree = [1,2,3,4,'abc', "xyz"];
// console.log(arrThree[4])
// console.log(arrThree[1])
// console.log(arrThree.length);


let obj = {
    "name":"superman",
    age:200
};

// console.log(obj["name"]);
// console.log(obj.age);
console.log(Object.freeze(obj));
