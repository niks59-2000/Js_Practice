document.getElementById('btn').addEventListener('click',getCountry);
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

function getCountry(){
    // Make ajax request
    fetch('https://restcountries.com/v3.1/name/usa')
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        displayCountry(data[0]);
        return fetch('https://restcountries.com/v3.1/name/brazil')
    })
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        return  fetch('https://restcountries.com/v3.1/name/germany')
    })
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        displayCountry(data[0]);
    })
    .catch(function(err){
       console.log(err);
        div.insertAdjacentText('beforeend',`Something went wrong ${err.message}.Please try again later`);

    })
    .finally(function(){
        console.log('Hey, this is pixel, How can i help you?');
    })
}
