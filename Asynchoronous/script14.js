"use strict"

// let getCountryInfo=async function(){
//     let response=await fetch('https://restcountries.com/v3.1/name/usa');
//     let data=await response.json();
//     console.log(response);
//     console.log(data);
// }
// getCountryInfo();
// console.log(getCountryInfo());

let div=document.querySelector('.country');
function displayCountry(countryData){
    let html=`
    <div class='display'>
    <div><img src="${countryData.flags.png}"></div>
    <div>${countryData.name.common}</div>
    <div>${countryData.region}</div>
    <p>Population: ${(((countryData.population)/1000000).toFixed(2))} M population</p>
    <p>${Object.values(countryData.languages)}</p>
    <p>${Object.values(countryData.currencies).map(currency=>currency.name).join(', ')}</p>
    </div>
    `
    div.insertAdjacentHTML('beforeend',html);
}

let getPosition=function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
};

let displayUserCountry=async function(){
    let position=await getPosition();
    let {latitude:lat,longitude:lng}=position.coords;

    let geoResponse=await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`)
    let geoData=await geoResponse.json();

    let countryResponse=await fetch('https://restcountries.com/v3.1/name/'+geoData.address.country);
    let countryData=await countryResponse.json();
    
    displayCountry(countryData[0]);
    console.log(countryData[0]);
}
displayUserCountry();
