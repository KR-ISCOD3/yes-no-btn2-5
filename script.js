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

btnYes.onclick = () => {
    // First show alert on YOUR page
    alert("Please add friend to me");

    // Then go to Facebook
    window.location.href = 'https://web.facebook.com/rak.smey.155354';
}