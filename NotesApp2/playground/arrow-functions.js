const square1 = (x) => {
    return x * x;
};

const square2 = (x) => x * x;

// parameter without paranthesis
const square3 = x => x * x;

console.log(square1(9));
console.log(square2(9));
console.log(square3(9));

const user = {
    name: 'Aaditya',
    sayHi: () => {
        // arrow function do not bind this key word. 
        // so 'this' here we be evaluated to undefined
        console.log(`Hi. I'm ${this.name}`);
        // arguments not accessible in normal functions
        console.log(arguments);
    },
    sayHiAlt() { 
        //this works as expected
        console.log(`Hi. I'm ${this.name}`);
        // arguments is accessible in normal functions
        console.log(arguments);
    }
};

user.sayHi(1, 2);
user.sayHiAlt(3, 4);
