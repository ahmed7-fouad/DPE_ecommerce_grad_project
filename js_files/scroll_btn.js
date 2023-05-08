 let upBtn= document.querySelector('.scroll_up');

  window.onscroll=function(){
    if(this.scrollY > 200){
     upBtn.style.cssText='bottom:10px;opacity:1; ';
    }
    else{
          upBtn.style.cssText='bottom:-100px;opacity:0; ';
    }
}
upBtn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
