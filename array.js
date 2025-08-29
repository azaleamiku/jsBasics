let toys = ["car", "doll", "lego"];

console.log(toys);

console.log(toys[0]);  
console.log(toys[1]); 
console.log(toys[2]);  

console.log(toys.length); 

toys.push("robot");        
console.log(toys);

toys[1] = "teddy bear";    
console.log(toys);

for (let i = 1; i < toys.length; i++) {
    console.log(toys[i]);
}