let emailValido=root="debanhy.alanis.alp@cbtis258.edu.mx";
let passValido="admin123";

const chequeLoging =(event)=> {
    event.preventDefault();

    const email=document.getElementById("email").Value;
    const password =document.getElementById("password").Value;
    const mensaje=document.getElementById("LoginMensaje").Value;

    if(email===emailValido && password=== passValido){
        mensaje.textContent="inicio de secion correcto";
        mensaje.style.color="green";

        setTimeout(() =>{
            window.location.href="dashboard.html";
        
    },1000);
}
else{
    mensaje.textContent="Email o contraseña incorrecta";
    mensaje.style.color="red";
}
};