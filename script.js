const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

btnNo.onmouseover= ()=>{
    
    const widthran = window.innerWidth;
    const heightran = window.innerHeight;



    const random = Math.floor(Math.random() * (widthran-100));
    const randomh = Math.floor(Math.random() * (heightran-50));

    btnNo.style.top = `${randomh}px`;
  
    btnNo.style.left = `${random}px`;
    
}
