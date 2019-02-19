function sum(a) {
    return function (b) {
        return a+b;
        
    }
    
}

console.log(sum(1)(2));

var second = sum(1);
console.log(second(2));



