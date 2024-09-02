// synchronous

// let helloworld= function(){
//     console.log('Hello World');
// }

// let greetings=function(){
//     console.log('Good Morning');
//     helloworld();
//      console.log('Have a good day');
// }

// greetings();

// let str='Good Morning';
// console.log(str);
//  alert('This is a alert window');
// console.log('Have a Nice day');

// Asynchoronous code

let str='Good Morning';
console.log(str);
setTimeout(function(){
    alert('This is an alert window');
},5000);
console.log('Welcome to the Programming world');