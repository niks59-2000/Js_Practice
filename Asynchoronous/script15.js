// let x=10;
// const y='Hello world';
// y=100;
// console.log('Have a nice day');

try{
    let x=10;
    const y='Hello world';
    y=100;
}
catch(err){
    console.log('Error:'+err.message);
}
console.log('Have a nice day');

// error handling with async and await

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

// let getCountry=async function(){
//     let response=await fetch('https://restcountries.com/v3.1/name/usa');
//     let data=await response.json();
//     console.log(data);
//     displayCountry(data[0]);
// }
// document.getElementById('btn').addEventListener('click',getCountry);

// let getCountry=async function(){
//     try{
//         let response=await fetch('https://restcountries.com/v3.1/name/abc');
//         let data=await response.json();
//         console.log(data);
//         displayCountry(data[0]);
//     }
//     catch(err){
//         console.log('Error occurred:'+err.message);
//         div.insertAdjacentText('beforeend',`Something went wrong.Error Occurred:"${err.message}.Please try again later.`);
//     }
// }
//     document.getElementById('btn').addEventListener('click',getCountry);

    // Instead of this, rewrite same code

    
let getCountry=async function(){
        let response=await fetch('https://restcountries.com/v3.1/name/abc');
        let data=await response.json();
        console.log(data);
        displayCountry(data[0]);
}
    document.getElementById('btn').addEventListener('click',function(){
        getCountry()
        .catch(error=>console.log('catch Error:'+error.message));
    });