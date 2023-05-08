
// fetch data from cards and applied it

let productImage=document.querySelector('.product_details_container > .product_image ');
let productStatus=document.querySelector('.product_details_content > .product_status');
let productTitle=document.querySelector('.product_details_content > .product_title');
let productPrice=document.querySelector('.product_details_content > .product_price');
let productBrand=document.querySelector('.product_details_content > .product_brand');
let productAvailability=document.querySelector('.product_numbers');

               

// <============all product cards==============>

let allProdcutCard=document.querySelectorAll('.card');
let allCardImage=document.querySelectorAll('.card > img');
let allCardTitle=document.querySelectorAll('.card .product_type')
let allCardPrice=document.querySelectorAll('.card .product_price')
let allCardDescription=document.querySelectorAll('.card .product_description');
let allCardContent=document.querySelectorAll('.card .card_content');

async function get(){

     const response=await fetch('https://dummyjson.com/products');
     const data = await response.json();
         allProdcutCard.forEach((product,index)=>{
         allCardImage[index].src=data.products[index].images[0];
         allCardTitle[index].textContent=data.products[index].title;
         allCardPrice[index].textContent=+ "$" + data.products[index].price ;
         allCardDescription[index].textContent=data.products[index].description;

     })
     localStorage.setItem('productData', JSON.stringify(data.products));
}
get();
const productData = JSON.parse(localStorage.getItem('productData'));

let queryString=window.location.search;
let urlParams=new URLSearchParams(queryString);
let product_index=urlParams.get('id');

productImage.src=productData[product_index].images[0];
productTitle.textContent=productData[product_index].title;
productPrice.textContent= "$" + productData[product_index].price ;
productAvailability.textContent=productData[product_index].stock;
productBrand.textContent=productData[product_index].brand;


     // <==========aside cart implementation============>


let cart=document.querySelector('.aside_cart');
let cart_exit_icon= document.querySelector('.aside_cart > i');
let user_icon=document.querySelector('.user_icon');
let userIconCounter=document.querySelector('.user_icon span');
let addToCartBtn=document.querySelector('.add_to_cart_btn');

user_icon.addEventListener('click',function(){
cart.style.cssText='right:0';
})

cart_exit_icon.addEventListener('click',function(){
cart.style.cssText="right:-400px";
})

let cartContentBox=document.querySelector('.cart_content');
let cartBoxImage=document.querySelector('.cart_box img');
let cartBoxTitle=document.querySelector('.cart_product_details .cart_product_title');
let TotalPrice=document.querySelector('.cart_content .total .total_price')
let trashIcon=document.querySelector('.trash');
let AddedTOCartBtn=document.querySelector('.cart_addition .add_to_cart_btn')
let AddedToCartMessage=document.querySelector('.cart_addition .added_to_cart');

     AddedTOCartBtn.addEventListener('click',function(){
          ++userIconCounter.textContent;
          cartContentBox.insertAdjacentHTML('afterbegin',
          `
                  <section class="cart_box">
                    <img src='${productData[product_index].images[0]}' alt="" class="cart_product_image">

                    <section class="cart_product_details">
                         <h4 class="cart_product_title">${productData[product_index].title}</h4>

                         <p class="cart_product_price">${productData[product_index].price}$</p>

                         <input type="number" class="cart_products_number" value="1">

                         </section>

                         <i class="fa-solid fa-trash trash"></i>

                              </section>

        `)
          AddedToCartMessage.style.cssText='opacity:1';

          let cartBoxInput=document.querySelector('.cart_product_details').children[2];
          let cartBoxPrice=document.querySelector('.cart_product_details').children[1];

          
          //  cartBoxPrice.textContent= '$' + productData[product_index].price * parseInt(cartBoxInput.value);

           TotalPrice.textContent='$' + productData[product_index].price * cartBoxInput.value ;

          
               cartBoxInput.onchange=function(){
                    if(cartBoxInput.value < 1){
                         cartBoxInput.value=1;
                    }
                    cartBoxPrice.textContent= '$' + (parseInt(productData[product_index].price) * parseInt(cartBoxInput.value));
                    TotalPrice.textContent= '$' + ( parseInt(cartBoxPrice.textContent.slice(1)) );
               }
               
               let trashIcon=document.querySelector('.trash');
               trashIcon.onclick=function(){
                    trashIcon.parentElement.style.cssText='display:none';
                         --userIconCounter.textContent;
                         TotalPrice.textContent= '$' + (parseInt(TotalPrice.textContent.slice(1)) - (parseInt(this.parentElement.children[1].textContent.slice(1))));
               }
})



