const btnCart = document.querySelector(".container-cart-icon")
const containerCartProducts = document.querySelector(".container-cart-products")
btnCart.addEventListener("click",()=>{
    containerCartProducts.classList.toggle("hidden-cart")
})

/*=====================*/
const cartInfo = document.querySelector(".cart-product")
const rowProduct = document.querySelectorAll("row-product")

//Lista de todos los productos//
const productsList= document-querySelector(".container-itemns")