 let a ='{"name": "arun", "dept": "cse", "Age": "20"}'
 let b =JSON.parse(a);

//  for in loop
for( i in b){
     console.log(i,b[i]);
}

// for of loop
let title =Object.keys(b);

for(j of title){
    console.log(j,b[j]);
}
    
// for Each loop
title.forEach((key,value)=>
{
console.log(key, b[key]);
});

      
         
