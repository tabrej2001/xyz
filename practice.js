// function isPalindrome(str) {

//     if (str.length === 1) {
//         return true;
//     }

//     let arrayStrings = str.split("");

//     let reverseArray = arrayStrings.reverse();

//     let joinArray = reverseArray.join("");

//     if (str === joinArray) {
//         return true;
//     }
//     else {
//         return false;
//     }




// }



// let s = "aabbaa";
// let count = 0;
// for (let x = 0; x < s.length; x++) {
//     for (let y = x+1; y < s.length + 1; y++) {
//         let a = s.substring(x, y);
//         // console.log(a)
//         let p = isPalindrome(a);
//         if (p) {
//             console.log(a);
//             count++;
//         }
//     }
// }

// console.log(count);


// arr=[1,2,3,4,5]
//arr.forEach(print);

//  function print(value,index,arr)
// {   
//      arr.shift()
//      arr.unshift(value*10)
//  }
// console.log(arr)
// arr=arr.map(curValue=>{
//     let x=curValue*10;
//     return x;
// })
// console.log(arr)


// arr=[1,2,3,4,5];
// arr3=[...arr]
// arr2=[];

// arr2=[...arr];

// for(let  i of arr3){
//   arr2.push(i+1);
// }

// console.log(arr2);


// let student = [{fname:'Ankit', lname:'kumar'},{fname:'Gourav', lname:'Gupta'},{fname:'kamlesh', lname:'whitner'}]

// let arr=student.map((obj)=>{
// return `${obj.fname} ${obj.lname}`
// })

// console.log(arr)


let obj=[{name:'a',age:21},{name:'b',age:44},{name:'a',age:88}]

let x=obj.find((value)=>{
return value.age===88;
})
console.log(x);
