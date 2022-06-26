//Default Functional Parameters

// function testFunction(firstNumber,secondNumber,name="Shantanu")
// {
//     console.log(`This function is called by ${name}`);
//     return firstNumber+secondNumber;
// }

// console.log(testFunction(1,2,"Tabrej Alam"));
// console.log(testFunction(1,2));
// console.log(testFunction(1));

//2. Array Methods

//2.1 .map()
//map() is a function which can be used with arrays
//It always  returns a new array
//It takes a callback function as an argument and the mapping 
//is created on the basis of the callback function.

// let arr=[1,2,3,4,5]
// let brr=[]; //[1,4,9,16,25] i want to acheive this as a brr

// for(let i of arr){
//     brr.push(i*i);
// }
// console.log(brr)

//    arr=arr.map( function(currentElement){
//     return currentElement*currentElement;
// }




// );
// console.log(arr)


//Given an array of strings: ["Hello World","Machine Learning","Data Science"]
//use .map() to produce 2D array of words:


// str=["Hello world","My name","Tabrej Alam"];

// console.log(str.map(function(currentString){
//     return currentString.split(" ");
// }))

// let str="Tabrej Alam"
// let b=str.split(" ")
// console.log(b)

//2.2 forEach()

//forEach() is a function which can be used with arrays.
//It takes a callback function as an argument and the argument of this 
//callback function represents the currentElement of the array.
//It does not return anything.

// let arr=[1,2,3,4,5];
// arr.forEach((currentElement,index)=>{
//     currentElement+=1;
//     console.log(`The index is ${index} and the value is ${currentElement}`)
// })

// console.log(arr)

// function increase(currentElement)
// {
//     currentElement=currentElement+1;
//     console.log(currentElement)
// }

//  arr.forEach(increase)


//  console.log(arr);

//2.3 filter()

//filter () is a function which can be used with arrays.
//It always takes a callback function as an argument and the
//filtering is created on the basis of the returned boolean value of the callback function

// let arr=[1,2,3,4,5,6,7,8]

//  arr=arr.filter((currentElement,index)=>{
// return currentElement%2!=0;
// });

// console.log(arr)



let team = [
	{
  		name: "aaron",
    	position: "developer"
 	 },
  	{
  		name: "beth",
    	position: "ui designer"
  	},
  	{
  		name: "cara",
    	position: "developer"
  	},
 	{
  		name: "daniel",
    	position: "content manager"
 	 },
  	{
  		name: "ella",
    	position: "cto"
  	},
  	{
  		name: "fin",
    	position: "backend engineer"
  	},
  	{
  		name: "george",
    	position: "developer"
  },

]

let arr=team.filter((obj)=>{
   return obj.position=="developer"
});