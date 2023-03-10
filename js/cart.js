const addProduct =()=>{
    const productField =  document.getElementById('product');
    const quantityField = document.getElementById('quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity)


}

const displayProduct =(product, quantity)=>{
    const ul =  document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCart =()=>{
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage =(product,quantity) =>{
    const cart = getStoredShoppingCart()
    cart[product]  = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
    // console.log(cart);
}

const displayProductFromLocalStorage =()=>{
    const savedCart = getStoredShoppingCart();
    for(product in savedCart){
        const quantity = savedCart[product]
        displayProduct(product,quantity)
        
    }
}
displayProductFromLocalStorage();