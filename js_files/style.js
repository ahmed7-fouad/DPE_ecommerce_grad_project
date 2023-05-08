let love_icon_frame=document.querySelectorAll('.love_icon');
let changer=0;

love_icon_frame.forEach((icon)=>{
    
icon.onclick=function(){
    
    if(changer===0){
            icon.firstElementChild.style.cssText='color:red';
            changer=1;
   }
   else{
             icon.firstElementChild.style.cssText='color:black';
        changer=0;
   }
}
})

// product details sizes

let productDetailsSizesBtns=document.querySelectorAll('.size_buttons_group button');


productDetailsSizesBtns.forEach((btn)=>{
     btn.addEventListener('click',function(){
          productDetailsSizesBtns.forEach((remvBtn)=>{
               remvBtn.classList.remove('active');
          })
          btn.classList.add('active');
     })
})





//     <section class="aside_cart">
//          <i class="fa-solid fa-xmark exit_icon"></i>
//         <h2 class="aside_cart_title">Your Cart</h2>
//         <section class="cart_content">
       
//         <section class="total">
//             <section class="total_title">Total</section>
//             <section class="total_price">0</section>
//         </section>
        
//         </section>
//         <button type="button" class="buy_btn">Buy Now</button>
//     </section>



