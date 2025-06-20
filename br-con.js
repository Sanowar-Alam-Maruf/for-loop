let num=[12,23,45,19,21,65,24,33];
let sum=0;
for (let i = 0; i < num.length; i++) {
    if (i==2) {
        break
    }
    sum=sum+num[i]
    
}
console.log(sum);


let num2=[12,13,23,45,19,21,65,24,33];
let sum2=0;
for (let i = 0; i < num2.length; i++) {
    if (i==2 || i==5 || i==6) {
        continue
    }
    sum2=sum2+num2[i]
    
}
console.log(sum2);
