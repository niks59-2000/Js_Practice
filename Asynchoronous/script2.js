document.getElementById('btn').addEventListener('click',getProducts);

function getProducts(){
    let div=document.querySelector('.display');
    let xhr=new XMLHttpRequest();
    xhr.open('GET','dairy.json',true);
    xhr.send();
    // if data is not completely loaded yet.
    xhr.addEventListener('progress',function(){     
        div.textContent='Loading...';
    });
    xhr.addEventListener('load',function(){
        // console.log(xhr.responseText);
        div.textContent='';
        // convert json to JS object
        let product=JSON.parse(xhr.responseText);
        console.log(product);
        product.forEach(function(element){
            let html=`
            <div class='products'>
            <div><img src="${element.filename}" style="${element.height};${element.width}"</div>
            <div class="title">${element.title}</div>
            <div class="type">${element.type}</div>
            <div>${element.description}</div>
            <div>Price: ${element.price}</div>
            </div>
            `
            div.insertAdjacentHTML('beforeend',html);
        })
    })   
}