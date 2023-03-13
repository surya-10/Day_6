function log(msg){
    console.log(msg)
}

log("1. Write a code to print the numbers in the array");
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';
 
for (var i = 0; i < numsArr.length; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

log("2. Write a code to print the numbers in the array");

// Output: 1,2,3,4,5,6,7,8,9,10,11


var str = [];
 
for (var i = 0; i <numsArr.length; i++) {
 str.push(numsArr[i]);
}
console.log(str.join(","));

log("3. Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)")

var str1 = [];
 
for (var i = numsArr.length; i >=0; i-- ) {
    str1.push(numsArr[i]);
}
console.log(str1.join(" "));


log(`4. Write a code to replace the array value — If the number is even, replace it with ‘even’`)
let outArr = []
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i] %2 == 0 )
 {
 outArr.push("even");
 }
 else{
    outArr.push(numsArr[i]);
 }
}
console.log(outArr);

log("5. Write a code to add all the numbers in the array");
sum = 0;
for(var i=0; i<numsArr.length; i++){
    sum = sum+numsArr[i];
}
console.log(sum);

log("6. Write a code to add the even numbers only");

var evenSum=0;
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i]%2==0){
 evenSum += numsArr[i]
}
}
console.log(evenSum);

log("7. Write a code to add the even numbers and subract odd number");

let evnSum = 0;
let oddSum = 0;
var evenSum=0;
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i]%2==0){
    evnSum+=numsArr[i];
 }
 else{
    oddSum-=numsArr[i];
 }
}
console.log(evnSum, oddSum);

log("8. Write a code to print inner arrays");

var numsArr1 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr1.length; i++) {
 console.log( numsArr1[i])
}

log("9. Write a code to print elements in the inner arrays");
let out=[];
for(var i=0; i<numsArr1.length; i++){
    for(var j=0; j<numsArr1[i].length; j++){
        out.push(numsArr1[i][j]);
    }
}
console.log(out.join(""));

log(`10. Write a code to replace the array value — If the index is even, replace it with ‘even’.`)
var numsArr1 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
let out1 = [];
let arr1 = [];
let arr2 = [];
for(var i=0; i<numsArr1.length; i++){
    for(j=0; j<numsArr1[i].length; j++){
        if(i==0){
            if(numsArr1[i][j]%2==0){
                arr1.push(numsArr1[i][j]);
            }
            else{
                arr1.push("even");
            }
        }
        else{
            if(numsArr1[i][j]%2==0){
                arr2.push(numsArr1[i][j]);
            }
            else{
                arr2.push("even");
            }
        }
    }
}
out1.push(arr1);
out1.push(arr2);
console.log(out1);

log("11. Write a code to print elements in the inner arrays in reverse");

let out2=[];
for(var i=0; i<numsArr1.length; i++){
    for(var j=0; j<numsArr1[i].length; j++){
        out2.push(numsArr1[i][j]);
    }
}
console.log(out2.reverse());

log(`12. Write a code to add elements in the inner arrays based on odd or even values`);

let sumOfOdd = 0;
let sumOfEven = 0;
for(var i=0; i<numsArr1.length; i++){
    for(var j=0; j<numsArr1[i].length; j++){
        if(numsArr1[i][j]%2==0){
            sumOfEven+=numsArr1[i][j];
        }
        else{
            sumOfOdd+=numsArr1[i][j];
        }
    }
}
console.log(sumOfEven);
console.log(sumOfOdd);
