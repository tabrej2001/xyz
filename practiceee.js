//Variable Declaration in js

//1. var keyword
// var a=5;
// console.log(a);
// a++;
// console.log(a);

// var a=10;

// console.log(a);
// a=5;
// console.log(a);
// let arr=[1,2,3,4];
// console.log(i);
// let arr=[1,2,3,4];
// for (let i of arr)
// {
//     var p=2;
//     console.log(arr);
// }

// console.log(p);

// let a=10;
// {
//     let a=5;
//     console.log(a)
// }

// console.log(a)

// let arr=[1,2,3,4,5];

// for(let i of arr){
// console.log(i);
// }

// str=arr.join(',');
// console.log(str);


// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

//3.
//  const arr=[1,2,3,4,5];

//  console.log(arr);

//  arr.push();
//  console.log(arr);
// a=[8,9,10]
//  arr.push('a');
//  console.log(arr);

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// console.log(typeof(arr[4]));

// //Push() returns the length of new array;

// arr=arr.push(1);




// let add=function()
// {
//     args=[...arr]
//     sum=0;
//     for(i of args)
//     {
//         sum+=i;
//     }
//     console.log(sum);
// }

// let arr=[1,2,3,4,5,6];
// add(arr);

// let arr=[1,2,3,4,5,20]


// arr.unshift(34);
// for(let i of arr)
// {
//     console.log(i);
// }

// let fname="Tabrej";
// let lname="Alam";
// console.log(`My name is ${fname} ${lname}`);


// let add=function()
// {

//     a=[...arr]
//     let sum=0;


//     for(i of a)
//     {

//         sum+=i;
//     }
//     return sum;
// }
// arr=[1,2,3];
// console.log(add(arr));

// let arr=[1,2,3,4,5]
// let arr2=[...arr];

// arr.push(6)

// console.log(arr2)

// let name="Tabrej"

// console.log(name);

// a=[..."Tabrej"]
// console.log(a);




// let obj1={

//     name:"Tabrej alam",
//     city:"Bihar",
//     address:{
//   area:"West Champaran"
//     }


// }

// let obj2={
//     ...obj1,
// }

// obj1.name="Tauhid Alam"
// obj1.address.area="Bettiah";

// console.log(obj1);
// console.log(obj2);





// //Default Functional parameter
// function testFunction(firstNumber,secondNumber,name="Shantanu")
// {
//     console.log(`This Function is called by ${name}`)
//     return firstNumber+secondNumber;
// }

// console.log(testFunction(1));

//2.1 map()
//map() is a function which can be used with array
//It always returns a new array 
//It takes a callback functiion as an argument
//and the mappping is created based on the based  of 
//callback function

// let arr=[1,2,3,4,5];
// let brr=[];

// for(let  i=0;i<arr.length;i++)
// {
//     brr.push(arr[i]*arr[i]);
// }

// console.log(brr);

// arr=arr.map(squiare);

// function squiare(currentElement){
//   return currentElement*currentElement;
// }

// console.log(arr)

// const person=[

//     {fname:"tabrej",
//     lname:"Alam"},

//     {fname:"Tauhid",
//     lname:"Alam"},

//     {fname:"Tauhid",
//     lname:"Alam"},

//     {fname:"Tauhid",
//     lname:"Alam"}
// ]

// persoN=person.map(JOIN);

// function JOIN(obj)
// {


// return [obj.fname,obj.lname].join(" ");

// }

// console.log(persoN)

// let arr=["Hello World","Machine Learning","Data Science"]

// arr=arr.map((currentElement)=>{


//         return currentElement.split("");
// })

// console.log(arr);


//forEach() function is a function which return 


//The Map interface

let map=new Map();

map.set("key1","value1");
map.set("key2","value2");
map.set("key3","value3");

// console.log(map);

// map.delete("key3");
// console.log(map);

// x=map.has("key2");
// console.log(x);

// map.clear();

// console.log(map);

// let value=map.values();

// value=[...value]
// console.log(value)

// let entries=map.entries();
// console.log(...entries)

// map.set(1,4);
// console.log(map)


// let str1="abc";
// let str2="dcba";

// let areAnagrams=(str1,str2)=>{

//     if(str1.length!=str2.length)
//     {
//         return false;
//     }

//     let map1=new Map();

//     for(let char of str1)
//     {
//         if(map1.has(char)==false)
//         {
//             map1.set(char,1);
//         }else{
//             map1.set(char,map1.get(char)+1);
//         }
//     }


//     let map2=new Map();

//     for(let char of str1)
//     {
//         if(map2.has(char)==false)
//         {
//             map2.set(char,1);
//         }else{
//             map2.set(char,map2.get(char)+1);
//         }
//     }

//     for(let [key,value] of map1)
//     {
//          if(map2.has(key) && map2.get(key)==value)
//          {
//             continue;
//          }else{
//             return false;
//          }
//     }

//     return true;






// }

// console.log(areAnagrams("ab","abc"))

// let map1=new Map();

// let arr=[1,2,3,4,5,5,5,6,7,5,7,5,7,8];
// let set=new Set();
// for(let x of arr)
// {
//     let a=set.size;

//     set.add(x);

//     let b=set.size;

//     if(a==b)
//     {
//     if(map1.has(x))
//      map1.set(x,map1.get(x)+1);
//     }else{
//         map1.set(x,1);
//     }


// }




// for(let x of map1)
// {
//     console.log(x);
// }


//promisses

// function testFunction(name)
// {
//     return ()=>{
//     console.log(`My name is ${name}`);
//    }

// }

// //Normal functiion Calling

// testFunction("Tabrej");

// setTimeout(testFunction("Tabrej Alam"),2000);






setTimeout((a=5,b=6)=>{

    console.log(a+b)
},5000)