// let a=5;

// let testVar="Hello";

// testVar=a<5?"Hi":"Hola"

// console.log(testVar)

// //In JS we have a concept of truthy and falsy values.
// //0,null,undefined,NAN,false,""

// testVar=a<=5 && "Hi";

// console.log(testVar);

// let a=-1;

// console.log(a?true:false)


let obj={
    name:"john",
    age:30,
    isMarried:false,
    streetAddress:{
        city:"New York",
        country:"USA",
        zip:"12345",

        oldcityInfo:{
colonyof:"The great British Empire",
namedAfter:"York Hampshire",
favoriteSports:{
    onBeach:["status of Liberty","Long isLand"],
    incity:["Times Square ","Empire state Building","Central Park"],

},
        },
    },
};

// if(obj && obj.streetAddress){
//     console.log(obj.streetAddress);
// }

console.log(obj?.streetAddress?.oldcityInfo?.favoriteSports?.onBeach);