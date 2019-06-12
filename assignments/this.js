/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
THIS is equal to all of the JavaScript object in the browser. 

* 2. Implicit Binding
THIS is equal to the object just before the dot whenever a function is called by that dot.

* 3. New binding
*Used within a Constructor function* THIS is equal to the object you are creating.

* 4. Explicit binding
*Used with .call() or .apply()* THIS is equal to what you tell it to be equal to.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function windowBinding(item) {
    console.log(this);
    return item;
}

windowBinding('Should be the window object');

// Principle 2
// code example for Implicit Binding

const bryanObj = {
    greeting: 'Hi there',
    sayHello: function(name) {
        console.log(`${this.greeting}, my name is ${name}`);
    }
}

bryanObj.sayHello('Bryan');

// Principle 3
// code example for New Binding

function NewProfile(greeter) {
    this.greeting = "Welcome to JavaScript! You're in for it, ";
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        // console.log(this);
    };
}

const bryan = new NewProfile('Bryan');
const leslie = new NewProfile('Leslie');

bryan.speak();
leslie.speak();

// Principle 4
// code example for Explicit Binding

bryan.speak.call(leslie);
leslie.speak.apply(bryan);