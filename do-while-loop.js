let i=0;
do {
    console.log(i);
    i=i+1
} while (i<20);
console.log(i);


let num=[12,23,45,19,21,65,24,33];
let sum=0;
let x=0;
do {
    sum=sum+num[x]
    x++
} while (x<num.length);
console.log(sum);


let num2=[12,13,14,15,16,17,19,21,22,24,27,29,30,31,33];
let y=0;
do {
    if (num2[y]%2==0) {
        console.log(num2[y]);
        
    }
    y++
} while (y<num2.length);
