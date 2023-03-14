function log(msg){
    console.log(msg);
}
log("1. Fix the code to get the largest of three.");
aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(100,20,30);
log("2. Fix the code to Sum of the digits present in the number");
   function add(n){
    let sum = 0;
    while(n>0){
        let rem = n%10;
        sum = sum+rem;
        n=parseInt(n/10);
    }
    console.log(sum);
}
add(12345);
log("3. Fix the code to Sum of all numbers using IIFE function");
const arr = [9,8,5,6,4,3,2,1];
(function(arr) {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})(arr);

log("4. Fix the code to gen Title caps.");
var ano = function(arro) {
    out = [];
    for (var i = 0; i < arro.length; i++) {
        if(arro[i]=="zen"){
            out.push(arro[i][0].toUpperCase() + arro[i].substr(1));
        }
        else{
            out.push(arro[i]);
        }
    }
    console.log(out);
   }
var strArr = ['guvi', 'geek', 'zen', 'fullstack'];
ano(strArr);

log("5. Fix the code to return the Prime numbers");
function prime(arr){
    if(arr<=1){
        return false;
    }
    for(var i=2; i<arr; i++){
        if(arr%i==0){
            return false;
        }
        return true;
    }
}

const newArray=[1,3,2,5,10];
let outArr = newArray.filter(prime);
console.log(outArr);

log("6. Fix the code to sum the number in that array");
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>a + b;
const op = num.reduce(sum);
console.log(op);
