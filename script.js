// ===============================
// CUENTA REGRESIVA
// ===============================

const fechaEvento = new Date("December 30, 2026 19:00:00").getTime();

const contador = setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {

        clearInterval(contador);

        document.getElementById("dias").innerHTML = "0";
        document.getElementById("horas").innerHTML = "0";
        document.getElementById("minutos").innerHTML = "0";
        document.getElementById("segundos").innerHTML = "0";

        return;

    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}, 1000);

// ===============================
// EFECTO AL HACER SCROLL
// ===============================

const secciones = document.querySelectorAll("section");

function mostrarSecciones() {

    const altoPantalla = window.innerHeight;

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < altoPantalla - 120) {

            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0px)";

        }

    });

}

secciones.forEach(seccion => {

    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(60px)";
    seccion.style.transition = "all 1s ease";

});

window.addEventListener("scroll", mostrarSecciones);

mostrarSecciones();

// ===============================
// BOTÓN "VER INVITACIÓN"
// ===============================

const boton = document.querySelector(".boton");

if (boton) {

    boton.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector("#historia").scrollIntoView({

            behavior:"smooth"

        });

    });

}

// ===============================
// EFECTO EN LAS TARJETAS
// ===============================

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 20px 40px rgba(214,51,132,.3)";
        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 10px 25px rgba(0,0,0,.1)";
        card.style.transform = "translateY(0px)";

    });

});

// ===============================
// MENSAJE AL ENVIAR EL FORMULARIO
// ===============================

const formulario = document.querySelector("form");

if(formulario){

formulario.addEventListener("submit", function(e){

e.preventDefault();

alert("💖 ¡Gracias por confirmar tu asistencia!");

formulario.reset();

});

}

// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.display = "none";

        },1800);

    }

});

// ===============================
// EFECTO EN LA FOTO
// ===============================

const foto = document.querySelector(".imagenes img");

if(foto){

foto.addEventListener("mouseenter", ()=>{

foto.style.transform="scale(1.05) rotate(2deg)";

});

foto.addEventListener("mouseleave", ()=>{

foto.style.transform="scale(1) rotate(0deg)";

});

}

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const subir = document.createElement("button");

subir.innerHTML = "↑";

subir.style.position = "fixed";
subir.style.right = "20px";
subir.style.bottom = "20px";
subir.style.width = "50px";
subir.style.height = "50px";
subir.style.border = "none";
subir.style.borderRadius = "50%";
subir.style.background = "#d63384";
subir.style.color = "#fff";
subir.style.fontSize = "24px";
subir.style.cursor = "pointer";
subir.style.display = "none";
subir.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
subir.style.zIndex = "999";

document.body.appendChild(subir);

window.addEventListener("scroll", ()=>{

if(window.scrollY > 400){

subir.style.display="block";

}else{

subir.style.display="none";

}

});

subir.addEventListener("click", ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
