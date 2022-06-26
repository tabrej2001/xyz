// //Variable Declaration in js

// //1. var keyword

// var a=5;
// console.log(a);

// a++;

// console.log(a);

// var a=10;
// console.log(a)

// //2 .Let keyword

// let a=10;
// console.log(a)
// a++;
// console.log(a)
//let a=10;

// {
//     let a=5;
//     console.log(a);
// }

// console.log(a);

//3. const keyword

// const a=5;
// console.log(a);

//const arr=[1,2,3,4,5];
// console.log(arr);
// arr.push(6);
// console.log(arr)
// arr.pop()
// console.log(arr[0])

// arr.unshift()
// console.log(arr)

// let firstName="John"
// let lastName="Wick"
// let fullName=firstName+" "+lastName;


// let fullName=`${firstName} ${lastName}`;
// console.log(fullName)



//Rest and spread operator 

//1. Rest(...)


// function add(a,b,c){
    
//     let sum=a+b+c;
//     return sum;
// }

// let x=add(1,2,3);
// console.log(x);

// function add(a,b){
    
//     let sum=a+b;
//     return sum;
// }

// let x=add(1,2);
// console.log(x);

//Suppose we are not sure how many number we have to add
//So in that case how we will create the add function

//Answer is rest operator




// function add(...values){
//     let sum=0;
//   console.log( values[0]);
//     for(let i=0;i<values.length;i++)
//     {
//         sum=sum+values[i];
//     }
//     return sum;
// }



// console.log(add(1,5,4,7,8,9,11));

//2. spread 

// let arr=[1,2,3,4,5]
// let arr2=[...arr];

// arr2.push(6)

// console.log(arr)

// console.log(arr2)

// let name="Tabrej"

// let name1=[...name]
// console.log(name1)

// let obj1={
// name:"Shantanu Shubham",
// city:"Mumbai",
// address:"punjab"


// }

// let obj2={
//     ...obj1
// }
// obj1.address="Delhi";
// console.log(obj1);
// console.log(obj2);

//Since obj1 will update obj2 will remain same.


let obj1={
    name:"Shantanu Shubham",
    city:"Mumbai",
    address:{
        area:"Bandra West"
    }
    
    
    }
    
    let obj2={
        ...obj1
    }
    obj1.address.area="Dharavi";
    console.log(obj1);
    console.log(obj2);

    //Like above sirf obj1 me hi change hona chahiye but nhi obj2 me bhi hoga change
    //The reason is in case of nested object it creates shallow
    // copy . It means address of obj1 and obj2 is referencing
    // to the same reference.

    //Shallow cloning:- This is the concept in js which means 
    //imideat key values pair ka copy create hoga and nested ka reference
    // hi copy hoga