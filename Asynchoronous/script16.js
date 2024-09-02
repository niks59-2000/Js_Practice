// use same code used in async and await

let div=document.querySelector('.country');

function displayCountry(data){
    let html=
    `
    <article class="display">
    <div><img src="${data.flags.png}"</div>
    <div>${data.name.common}</div>
    <div>${data.region}</div>
    <p>Population: ${(((data.population)/1000000).toFixed(2))} M People
    </p>
    <p>${Object.values(data.languages)}</p>
    <p>${Object.values(data.currencies).map(currency=>currency.name)}</p>
    </article>
    `
    div.insertAdjacentHTML('beforeend',html);
}

let getPosition=async function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject)
    })
}

let getCountry=async function(){
    let pos=await getPosition();
    let{latitude:lat,longitude:lng}=pos.coords;
    let geoResponse=await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.c3428a7010abbdb3b9cc5cd13970342a&lat=${lat}&lon= ${lng}&format=json&`);
    let geoData=await geoResponse.json();

    let countryResponse=await fetch('https://restcountries.com/v3.1/name/'+geoData.address.country);
    let countryData=await countryResponse.json();

    return `You are staying in ${geoData.city},${geoData.country}`;
}
