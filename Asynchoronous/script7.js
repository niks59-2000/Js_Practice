function displayCountry(data){
    let div=document.querySelector('.country');
    let html=`
    <article class='display'>
    <img src="${data.flags.png}">
    <h3>${data.name.common}</h3>
    <h4>${data.region}</h4>
    <p>Population: ${(((data.population)/1000000)).toFixed(2)} M people</p>
    <p>${Object.values(data.languages)}</p>
    <p>${Object.values(data.currencies).map(currency=>currency.name)}</p>
    </article>
    `
    div.insertAdjacentHTML('beforeend',html);
}

// function getCountry(country){
//     // Make ajax request
//     let promise1=fetch('https://restcountries.com/v3.1/name/'+country);
//     let promise2=promise1.then(function(response){
//         console.log(response);
//         return response.json();
//     });
//     promise2.then(function(data){
//         console.log(data);
//         displayCountry(data[0]);
//     })
// }

// promise chaining

function getCountry(country){
    fetch('https://restcountries.com/v3.1/name/'+country)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        displayCountry(data[0]);
    })
    .catch(function(error){
        console.log(error);
    })
}
getCountry('usa');
getCountry('brazil');
getCountry('germany');