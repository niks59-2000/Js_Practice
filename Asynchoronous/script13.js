// navigator.geolocation.getCurrentPosition(
//     position=>console.log(position),
//     err=>console.log(err)
// );

// promisfying geolocation API

/* 
let getPosition=function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
            position=>console.log(position),
            err=>console.log(err)
        );
    });
}
getPosition();
*/

// instead of this

/*
let getPosition = function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
            resolve,reject
        );
    })
}
getPosition()
.then(pos=>console.log(pos))
.catch(err=>console.log(err.message));
*/

// requirement
// 1.get current coordinates of user
// 2.get the country in which user is currently stayinh
// 3.display information related to that country

let div=document.querySelector('.country');
function displayCountry(data){
    let html=`
    <div class='display'>
    <div><img src="${data.flags.png}"></div>
    <div>${data.name.common}</div>
    <div>${data.region}</div>
    <p>Population: ${(((data.population)/1000000).toFixed(2))} M population</p>
    <p>${Object.values(data.languages)}</p>
    <p>${Object.values(data.currencies).map(currency=>currency.name).join(', ')}</p>
    </div>
    `
    div.insertAdjacentHTML('beforeend',html);
}

let getPosition=function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
            resolve,
            reject
        )
    })
}
getPosition()
.then(pos=>{
    let {latitude:lat,longitude:lng}=pos.coords;
    console.log(lat,lng);
    return fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`)
})
.then(function(response){
    console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data);
    return fetch('https://restcountries.com/v3.1/name/'+data.address.country);
})
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data[0]);
    displayCountry(data[0]);
})
.catch(err=>console.log(err.message)
)

