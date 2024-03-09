let searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    shopping.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let shopping = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    shopping.classList.toggle('active');
    searchform.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}
let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('active');
    searchform.classList.remove('active');
    shopping.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shopping.classList.remove('active');
    login.classList.remove('active');

}

window.onscroll=()=>{
    searchform.classList.remove('active');
    shopping.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}
// Set the date for the deal expira
  
    
  var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:1500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
    
      },
    },
  });
  var swiper = new Swiper(".product-slider1", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
    
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
    
      },
    },
  });
  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addtocart .btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const product = button.closest('.box');
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('.price').textContent.replace(/[^\d.]/g, '')); // Extracting the price

            // Create a new cart item element
            const cartItem = document.createElement('div');
            cartItem.classList.add('box');
            cartItem.innerHTML = `
                <i class="fa fa-trash"></i>
                <img src="${product.querySelector('img').src}" alt="">
                <div class="content">
                    <h3>${productName}</h3>
                    <span class="price">Rs.${productPrice.toFixed(2)}</span>
                    <span class="quantity">Qty : 1</span>
                </div>
            `;

            const cartItemsContainer = document.querySelector('.shopping-cart .box-container');
            cartItemsContainer.insertBefore(cartItem, cartItemsContainer.firstChild);

            // Update total price
            const totalPriceElement = document.querySelector('.shopping-cart .total');
            const totalPrice = parseFloat(totalPriceElement.textContent.replace(/[^\d.]/g, ''));
            const newTotalPrice = totalPrice + productPrice;
            totalPriceElement.textContent = `Total: Rs. ${newTotalPrice.toFixed(2)}`;

            // Update cart count
            const cartCountElement = document.querySelector('#cart-count');
            cartCountElement.textContent = parseInt(cartCountElement.textContent) + 1;
        });
    });
});
