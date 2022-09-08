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
    adddisplayeProducts(product,quantity);
    //set to local storage
    //simple way
    saveItmeToLocalStroge(product, quantity);
   
}
const getShoppingCartFromLocalStorage = () =>{
    let saveedCart = localStorage.getItem('cart');
    let cart = {};
    if(saveedCart){
        cart = JSON.parse(saveedCart);
    }
    return cart;
}
const saveItmeToLocalStroge = (product, quantity)=>{
    const cart = getShoppingCartFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const adddisplayeProducts = (product, quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li)
}

const displayeStorageProduct =()=>{
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product]
        adddisplayeProducts(product, quantity)
    }
}
displayeStorageProduct();