// =========================================
// CUENTA REGRESIVA
// =========================================

const fechaEvento = new Date("2026-12-30T19:00:00").getTime();

function actualizarCuenta() {

    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
        document.getElementById("countdown").innerHTML =
        "<h2>¡Hoy es el gran día! 🎉</h2>";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

setInterval(actualizarCuenta,1000);
actualizarCuenta();


// =========================================
// ANIMACIÓN AL HACER SCROLL
// =========================================

const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{threshold:0.2});

elementos.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(80px)";
    sec.style.transition="1s";

    observer.observe(sec);

});


// =========================================
// FLORES CAYENDO
// =========================================

const petalos = document.getElementById("petalos");

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");

    petalo.innerHTML="🌸";

    petalo.style.left=Math.random()*100+"vw";

    petalo.style.animationDuration=(6+Math.random()*5)+"s";

    petalo.style.fontSize=(18+Math.random()*20)+"px";

    petalos.appendChild(petalo);

    setTimeout(()=>{

        petalo.remove();

    },11000);

}

setInterval(crearPetalo,500);


// =========================================
// GALERÍA LIGHTBOX
// =========================================

const fotos=document.querySelectorAll(".imagenes img");

const fondo=document.createElement("div");

fondo.style.position="fixed";
fondo.style.top="0";
fondo.style.left="0";
fondo.style.width="100%";
fondo.style.height="100%";
fondo.style.background="rgba(0,0,0,.9)";
fondo.style.display="none";
fondo.style.justifyContent="center";
fondo.style.alignItems="center";
fondo.style.zIndex="9999";

const imagenGrande=document.createElement("img");

imagenGrande.style.maxWidth="90%";
imagenGrande.style.maxHeight="90%";
imagenGrande.style.borderRadius="20px";

fondo.appendChild(imagenGrande);

document.body.appendChild(fondo);

fotos.forEach(img=>{

    img.addEventListener("click",()=>{

        imagenGrande.src=img.src;

        fondo.style.display="flex";

    });

});

fondo.addEventListener("click",()=>{

    fondo.style.display="none";

});


// =========================================
// BOTÓN VOLVER ARRIBA
// =========================================

const boton=document.createElement("button");

boton.innerHTML="↑";

boton.style.position="fixed";
boton.style.right="20px";
boton.style.bottom="20px";
boton.style.width="55px";
boton.style.height="55px";
boton.style.borderRadius="50%";
boton.style.border="none";
boton.style.background="#d81b78";
boton.style.color="white";
boton.style.fontSize="24px";
boton.style.cursor="pointer";
boton.style.display="none";
boton.style.zIndex="999";
boton.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

document.body.appendChild(boton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// =========================================
// EFECTO EN BOTONES
// =========================================

document.querySelectorAll(".boton,.whatsapp").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.08)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// =========================================
// MENSAJE DE BIENVENIDA
// =========================================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        console.log("✨ Bienvenido a los XV de Gaby ✨");

    },1000);

});
