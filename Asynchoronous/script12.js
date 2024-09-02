console.log('program starts here');
setTimeout(function(){
    console.log('Set Timeout function gets executed');
},0);
Promise.resolve('Resolved promise data')
.then(function(response){
    console.log(response);
})
console.log('program ends here');