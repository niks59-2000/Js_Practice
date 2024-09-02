function displayCountry(data){
    let div=document.querySelector('.country');
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
}

function makeAjaxRequest(countryName){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','https://restcountries.com/v3.1/name/'+countryName,true);
    xhr.send();
    return xhr;
}

function getCountry(){
    let req1=makeAjaxRequest('usa');
    req1.addEventListener('load',function(){
        let[data]=JSON.parse(req1.responseText);
        console.log(data);
        displayCountry(data);
    })
        let req2=makeAjaxRequest('brazil');
        req2.addEventListener('load',function(){
            let[data]=JSON.parse(req2.responseText);
            console.log(data);
            displayCountry(data);
        })
            let req3=makeAjaxRequest('germany');
            req3.addEventListener('load',function(){
                let[data]=JSON.parse(req3.responseText);
                console.log(data);
                displayCountry(data);
            })
}
getCountry();