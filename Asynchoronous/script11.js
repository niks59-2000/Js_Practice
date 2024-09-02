console.log('Good Morning user!');
setTimeout(function(){
    console.log('Hello world');
},3000);
console.log('Have a Nice day');
fetch('products.json')
.then(function(response){
    console.log(response);
    return response.json();
})