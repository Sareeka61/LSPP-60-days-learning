# Call and Apply Method in JS

call() and apply() methods are used to invoke functions and explicitly set the value of this within the function body. They allow us to call a function and specify the context (the object on which the function should be invoked) and provide arguments to the function.

```call()``` The call() method is used to invoke a function with a specified this value and individual arguments passed as separate parameters.

```
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: 'Sarika' };

greet.call(person, 'Siddanta');
```

```
Output: Hello, Siddanta! My name is Sarika.
```

```apply()``` The apply() method is similar to call(), but it accepts arguments as an array or an array-like object.
```
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: 'Sarika' };

greet.apply(person, ['Siddanta']);

```
```
Output:
Hello, Siddanta! My name is Sarika.
```
 The primary difference between them is how you pass arguments to the function: call() accepts individual arguments, while apply() accepts an array or array-like object of arguments.

 **In modern Javascript**,
 we can use call with spread operator to obtain similar result as that of apply. For example: 
 ```
 greet.apply(person, ['Sarika']);
// Equivalent to:
greet(...['Sarika']);
 ```
