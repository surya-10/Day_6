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

log("7. Fix the code to rotate an array by k times and return rotated array using IIFE function");

let arrOfNum = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = k%arrOfNum.length;
(function(){
    let array1 = arrOfNum.slice(k, arrOfNum.length);
    let count = array1.length;
    for(var i=0; i<k; i++){
        array1[count]=arrOfNum[i];
        count++;
    }
    console.log(array1);
})();

log(" Fix the code to gen Title caps.");

var arr1 = ['guvi', 'geek', 'zen', 'fullstack'];
(function() {
 for (var i = 0; i <arr.length; i++) {
    if(arr1[i] == 'zen'){
        console.log(arr1[i][0].toUpperCase() + arr1[i].substr(1));
    }
 }
})();

log("print all odd numbers in an array using IIFE function");
let numArr = [1, 2, 3, 4, 5, 6];
(function(){
    for(var i=0; i<numArr.length; i++){
        if(numArr[i]%2!=0){
            console.log(numArr[i]);
        }
    }
})();

log("Fix the code to reverse.");
(function(val){
    let str = val.split("").reverse().join("");
    console.log(str);
})("abcd");

log("Fix the code to remove duplicates.");
var res = function(arr){
    var  newArr = [];
     for(var i=0; i < arr.length; i++){
     
     if(newArr.indexOf(arr[i]) == -1) {
     newArr.push(arr[i]);
     } }
     console.log(newArr)
    }
    res(['guvi','geek','guvi','duplicate','geeK'])

    log(" Fix the code to welcome the Employee");
let login = 'Employee';
let message = (login == 'Employee') ? "Welcome":
  (login == 'Director') ? 'Greeting':
  (login == '') ? 'No login': ' ';
console.log(message);

log("Expected Output[{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}]")
var array =[
    [
        ['firstname','vasanth'],
        ['lastname','Raje'],
        ['age',24],
        ['role','JSWizard']
    ],
    [
        ['firstname','Sri'],
        ['lastname','Devi'],
        ['age',28],
        ['role', 'Coder']
    ]
];
var final=[]
while(array.length!=0)
{
     var new_object={}
 var outer_remove = array.shift();
 console.log(outer_remove)
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
//  console.log(inner_remove)
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value;
 }
 final.push(new_object)
}
console.log(final)

log("summ all the odd numbers")

var as=[12,34,5,6,2,56,6,2,1,11];
let sum1 = 0
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
    sum1 = sum1+c;
 }
    
});
console.log(sum1);