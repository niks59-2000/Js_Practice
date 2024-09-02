"use strict"

function displayCountry(countryName){
    let div=document.querySelector('.country');
    let  xhr =new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/'+countryName,true);
    xhr.send();
    xhr.addEventListener('progress',function(){
        div.textContent='Loading...';
    })
    xhr.addEventListener('load',function(){
        let [data]=JSON.parse(xhr.responseText);
        console.log(data);
        div.textContent='';
        let html=`
        <article class='display'>
        <img src="${data.flags.png}">
        <h3>${data.name.common}</h3>
        <h4>${data.region}</h4>
        <p>Population: ${(((data.population)/1000000)).toFixed(2)} M people</p>
        <p>${Object.values(data.languages)}</p>
        <p>${Object.values(data.currencies).map(currency=>currency.name).join(', ')}</p>
        </article>
        `
        div.insertAdjacentHTML('beforeend',html);
    })
}

displayCountry('usa');
// displayCountry('brazil');
// displayCountry('germany');