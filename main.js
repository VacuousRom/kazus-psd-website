// shopping cart handler
const shoppingCart = document.querySelector('.cart');
const shoppingBtn = document.querySelector('.shop-btn')
const cartBtn = document.querySelector('.cart__container--close');
let shopOpen = false;

shoppingBtn.addEventListener('click', () => {
    
    if (shopOpen) {
        shoppingCart.classList.remove('shop-open');
        
    } else {
        shoppingCart.classList.add('shop-open');

    }
    shopOpen = !shopOpen;
    
})
cartBtn.addEventListener('click', ()=> {
    shoppingCart.classList.remove('shop-open');
    shopOpen = false;
})