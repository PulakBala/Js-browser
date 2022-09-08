const getInputValu = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = ' ';
    return inputValue;   
}
const addProduct=()=>{
    const product = getInputValu('product-name-field');
    const quantity = getInputValu('product-quantity-field');
    console.log( product,quantity);
    //displaye product on UI 
    displayeProducts(product,quantity);
    //set to local storage
    //simple way
    localStorage.setItem(product, quantity);
   
}

const displayeProducts = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li)
}