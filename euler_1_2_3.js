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

//var target= 13195;
var target = 600851475143;
var i = 1;
var recip = target
var possibleI = true;
var possibleRecip = true;
var largestPrimeFactor = 1;


for (var i=1; i < Math.floor(target/2+1);i += 2){
    
        if(i <= recip){

        //console.log("Testing: " + i);

    if(target % i === 0){
        recip = target / i;
        console.log("Is a factor (i): " + i);
        console.log("Is a factor (recip): " + recip);

       for(var j = 2; j < Math.floor(i/2+1); j++){
            if(i % j === 0){
                possibleI = false; //not prime
                break;
                }
            }
        
        for(var k = 2; k < Math.floor(recip/2+1); k++){
            if(recip % k === 0){
                possibleRecip = false; //not prime
                //console.log(k);
                break;
                }
            }

            if(possibleI){
                console.log("Is a prime factor (i): " + i + "***");
                if(largestPrimeFactor < i) {
                largestPrimeFactor = i;
                }
            }        
            if(possibleRecip){
                console.log("Is a prime factor (recip): " + recip + "***");
                if(largestPrimeFactor < recip) {
                largestPrimeFactor = recip;
                }
            }        

            
            
    }


    possibleI = true;
    possibleRecip = true;
}
console.log("The largest prime factor is: " + largestPrimeFactor + "*****");
}

