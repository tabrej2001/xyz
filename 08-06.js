//promises

// function testFunction(name)
// {

//     console.log(`My name is ${name}`)

// }
//Normal Function Calling
//testFunction("Tabrej Alam")

/*Now call through the setTimeout function. It takes two argument one is function and another is time in mili second.
setTimeout(() => {
    
}, timeout);

*/


// function testFunction(name)
// {
//     return ()=>{
//         console.log(name);
//     }
// }

// setTimeout(testFunction("Tabrej Alam"),5000);

//Here we are returning a function because bcz setTimeout function takes function reference as an argument.



// let testFunction=(name)=> ()=> console.log(name);



// setTimeout(testFunction("Tabrej Alam"),5000);


// setTimeout((name="Tabrej")=>{
// console.log(name)
// },3000);


// setTimeout(()=>console.log("Tabrej"),3000)

//Java script is a programming language which hate to wait .
//Lets discuss this through a function.

// let testFunction=(a,b)=>{
//     let sum=0;
    
//     setTimeout(()=>{
//       sum=a+b;
//       console.log(`The sum is ${sum}`);
//     },3000);
//   return sum;
// }
// console.log( testFunction(2,3));
//If u will see the flow then u will find that at line 51 sum was 0 then there was setTimeout 
//for 3 sec . so javascript will not wait. It will put the waiting code some here else in the memory
// and will execute the next part of the code after that it will agai comeback to the waiting code and
// will execute that.


//promise is ussed for async programming
//promise takes a function int its constructor
//The function takes 2 parameter: resolve and reject
//resolve is used to resolve the promise
//reject is used to reject the promise

//if a promise is resolve then we use .then()
//if promise is rejected, then we use .catch()
//.then()  and .catch() are used to handle the promise
//.finally() is used to execute code after the promis is resolved or rejected

let testFunction=(a,b)=>
  new Promise((resolve,reject)=>{


    let sum=a+b;
    if(sum>=15)
    {
      setTimeout(()=>{
        return resolve(sum);
      },2000)
    }else{
      setTimeout(()=>{
               return reject(`The dum ${sum} is less than`)
      },2000)
    }


  });


  testFunction(6,6).then((sum)=>{
  console.log(`The sum is ${sum}`);
  return 10;
  }).then((testValue)=>{
    console.log(  `The value is ${testValue}`)
  }).catch((errorMessage)=>{
console.error(errorMessage);
  })




