//The Map interface

// let map=new Map();
// map.set("key1","value1")
// map.set("key2","value2")
// map.set("key3","value3")


//console.log(map);



// map.delete("key3")


// console.log(map);
// let  x=map.has("key2")
// console.log(x)

// map.clear()
// console.log(map)


// let values=map.values();

// console.log(values)

// values=[...values]

// console.log(values)

// let entries=map.entries();
// console.log([...entries])


//let str1="abcd"
// let str2="dcba"


// let areAnagrams=  (str1,str2)=>{
//     if(str1.length!=str2.length)
//     {
//         return false;
//     }

//     let map1=new Map();
//     for(let char of str1)
//     {
//         if(map1.has(char)){
//             map1.set(char,map1.get(char)+1);

//         }else{
//             map1.set(char,1);
//         }
//     }

//     let map2=new Map();

//     for(let char of str2)
//     {
//         if(map2.has(char))
//         {
//             map2.set(char,map2.get(char)+1);
//         }else{
//                   map2.set(char,1);
//         }
//     }


//     for(let [key,value] of map1)
//     {
//         if(map2.has(key) && map2.get(key)===value)
//         {
//             continue;
//         }else{
//             return false;
//         }
//     }
//     return true;

// }

// console.log(areAnagrams(str1,str2))


//2. Sets in JS

// let set=new Set();

// set.add("value1");
// set.add("value2");
// set.add("value3");
// set.add("value4");
// console.log(set);
// set.delete("value1");
// console.log(set);
// set.clear();
// console.log(set);


//Exercise:
//Given an array, there areb 2 elements which  
//are repeating. Find the two repeated element 
//in the array.

// let arr=[1,2,3,4,5,5,6,7,7];

// let set=new Set();

// for(let i=0;i<arr.length;i++)
// {
//     let size=set.size;
//     set.add(arr[i]);
//     let size1=set.size;

//     if(size==size1)
//     {
//         console.log(arr[i]);
//     }

// }



