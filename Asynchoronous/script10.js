let div=document.querySelector('.country');
document.getElementById('btn').addEventListener('click',function(){
    getCountry();
})

function displayCountry(data){
    let html=`<article>
    <div class="country-img"><img src="${data.flags.png}"></div>
    <div class="country-data">
    <h3>${data.name.common}</h3>
    <h4>${data.region}</h4>
    <p>Population: ${((data.population)/1000000).toFixed(2)} M people</p>
    <p>Language: ${Object.values(data.languages)}</p>
    <p>Currency: ${Object.values(data.currencies).map(currency =>currency.name).join(', ')}</p>
    </div>
    
    </article>`
    div.insertAdjacentHTML('beforeend',html); 
}

function checkResponse(response){
    if(!response.ok){
        throw new Error(`country not found (${response.status})`)
    }
    // console.log(response);
    return response;
}
function getCountry(){
    fetch('https://restcountries.com/v3.1/name/usa')
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        return fetch('https://restcountries.com/v3.1/name/abc')
    })
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
        return fetch('https://restcountries.com/v3.1/name/germany')
    })
    .then(checkResponse)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        displayCountry(data[0]);
    })
    .catch(function(error){
        console.log(error);
        div.insertAdjacentText('beforeend',`Something went wrong.Error message:${error.message}. Please try again later.`);
    })
    .finally(function(){
        console.log('Hey! This is Pixel. How can i help you?');
    })
}
