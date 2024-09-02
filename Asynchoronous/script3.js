document.getElementById('btn').addEventListener('click',getProducts);

function getProducts(){
    let div=document.querySelector('.display');
    let xhr=new XMLHttpRequest();
    xhr.open('GET','products.json',true);
    xhr.send();
    xhr.addEventListener('progress',function(){
        div.textContent='Loading...';
    })
    xhr.addEventListener('load',function(){
        let data=JSON.parse(xhr.responseText);
        console.log(data);
        div.textContent='';
        let {products}=data;
        products.forEach(function(elem){
            let html=`
            <div class='products'>
            <div class="title">${elem.title}</div>
            <div class="type">${elem.category}</div>
            <div class="description">${elem.description}</div>
            <div>Price: ${elem.price}</div>
            </div>
            `
            div.insertAdjacentHTML('beforeend',html);
        })
    })   
}