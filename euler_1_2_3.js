//Project Euler 
// 1 Multiples of 3 and 5

var sum = 0;

for (var i = 1; i < 1000; i++){

if ((i % 3 === 0) || (i % 5 === 0)){
    sum += i;
}

}
console.log(sum);

//Project Euler 
// 2 Even Fibonacci numbers

var fib1 = 1;
var fib2 = 2;
var fib3 = 0;
var sum = 2;
 
 console.log(fib1);
 console.log(fib2);
    
while (fib3 <4000000){
    fib3 = fib1 + fib2;
    console.log(fib3);
    
    if(fib3 < 4000000){
        if(fib3 % 2 === 0){
            sum += fib3;
        }
    }
    fib1 = fib2;
    fib2 = fib3;

    console.log("Sum = " + sum)
}



//Project Euler 
// 3 Largest prime factor

var target= 13195;
var recip = 0
var possible = true;

for (var i=2; i < Math.floor(target/2+1);i++){
    if(target % i ===0){
        recip = target / i;
        //console.log("Is factor: " + recip);
        for(var j = 2; j < Math.floor(recip/2+1); j++){
            if(recip % j === 0){
                possible = false;
                }
            }
            if(possible){
                console.log("is prime: " + recip);
                break;
            }
    }
    possible = true;
}