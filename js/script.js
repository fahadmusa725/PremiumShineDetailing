/*=====================================================
        PREMIUM SHINE DETAILING
        script.js Part-1
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
            NAVBAR SCROLL
    ==================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("shadow");

        } else {

            navbar.classList.remove("shadow");

        }

    });

    /*==================================
        SMOOTH SCROLL
    ==================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*==================================
        MOBILE MENU CLOSE
    ==================================*/

    document.querySelectorAll(".navbar .nav-link").forEach(link => {

        link.addEventListener("click", () => {

            const menu = document.querySelector(".navbar-collapse");

            if (menu.classList.contains("show")) {

                bootstrap.Collapse.getInstance(menu).hide();

            }

        });

    });

    /*==================================
        ACTIVE NAV LINK
    ==================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==================================
        LIVE PRICE CALCULATOR
    ==================================*/

    const service = document.getElementById("serviceSelect");

    const addons = document.querySelectorAll(".addon");

    const total = document.getElementById("estimatedTotal");

    const serviceName = document.getElementById("selectedService");

    function calculateTotal() {

        let price = Number(service.value) || 0;

        let selectedText =
            service.options[service.selectedIndex].text;

        serviceName.innerHTML = selectedText;

        addons.forEach(addon => {

            if (addon.checked) {

                price += Number(addon.value);

            }

        });

        if (price === 0) {

            total.innerHTML = "Quote Required";

        }

        else {

            total.innerHTML = "$" + price;

        }

    }

    service.addEventListener("change", calculateTotal);

    addons.forEach(addon => {

        addon.addEventListener("change", calculateTotal);

    });

    /*==================================
        BACK TO TOP
    ==================================*/

    const backTop = document.querySelector(".back-top");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backTop.classList.add("active");

        }

        else {

            backTop.classList.remove("active");

        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*==================================
        SCROLL PROGRESS
    ==================================*/

    const progressBar = document.querySelector(".progress-bar-scroll");

    window.addEventListener("scroll", () => {

        const totalHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            (window.pageYOffset / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    });

    /*==================================
        FADE-UP EFFECT
    ==================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    document.querySelectorAll(".fade-up").forEach(el => {

        observer.observe(el);

    });

});
/*=====================================================
        PREMIUM SHINE DETAILING
        script.js Part-2
======================================================*/


/*==========================================
            PRELOADER
==========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(()=>{

            preloader.style.display = "none";

        },600);

    }

});


/*==========================================
            CUSTOM CURSOR
==========================================*/

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

if(cursor && dot){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.btn,.gallery-card,.why-card,.addon-card").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1.8)";
cursor.style.borderColor="#FFD700";

});

item.addEventListener("mouseleave",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";

});

});

}


/*==========================================
        HERO PARALLAX
==========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let offset=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=offset*0.4+"px";

}

});


/*==========================================
        COUNTER
==========================================*/

const counters=document.querySelectorAll(".counter");

const speed=40;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,30);

}

else{

counter.innerText=target;

}

};

update();

});


/*==========================================
        BUTTON RIPPLE
==========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

let ripple=document.createElement("span");

ripple.classList.add("ripple");

this.appendChild(ripple);

let x=e.clientX-this.offsetLeft;

let y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*==========================================
        AUTO YEAR
==========================================*/

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}


/*==========================================
        FLOATING HERO LOGO
==========================================*/

const logo=document.querySelector(".logo-circle");

let angle=0;

function floatingLogo(){

angle+=0.02;

if(logo){

logo.style.transform=`translateY(${Math.sin(angle)*10}px)`;

}

requestAnimationFrame(floatingLogo);

}

floatingLogo();


/*==========================================
        AOS
==========================================*/

if(typeof AOS!=="undefined"){

AOS.init({

duration:1000,

once:true,

offset:80,

easing:"ease-in-out"

});

}


/*==========================================
        IMAGE HOVER TILT
==========================================*/

document.querySelectorAll(".gallery-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=((y/rect.height)-0.5)*12;

const rotateY=((x/rect.width)-0.5)*-12;

card.style.transform=`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

});


/*==========================================
        TEXT REVEAL
==========================================*/

const reveals=document.querySelectorAll(".section-heading");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

section.classList.add("show");

}

});

});


/*==========================================
        CONSOLE MESSAGE 😎
==========================================*/

console.log("%cPremium Shine Detailing",
"font-size:28px;font-weight:bold;color:#D4AF37;");

console.log("%cDesigned with ❤️",
"font-size:16px;color:white;");
/*=====================================================
        PREMIUM SHINE DETAILING
        SCRIPT PART-3
======================================================*/


/*==========================
      EMAIL JS INIT
==========================*/

emailjs.init("gLyJbafFFXuiaTlMG");


/*==========================
      BOOKING FORM
==========================*/

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();


const button=this.querySelector("button");

const originalText=button.innerHTML;

button.disabled=true;

button.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Sending...';


/*==========================
      GET VALUES
==========================*/

const fullName=this.querySelector('input[placeholder="Full Name"]').value;

const phone=this.querySelector('input[placeholder="Cell Phone"]').value;

const email=this.querySelector('input[type="email"]').value;

const car=this.querySelector('input[placeholder="Car Model"]').value;

const address=this.querySelector('input[placeholder="Address"]').value;

const service=document.getElementById("serviceSelect");

const serviceName=service.options[service.selectedIndex].text;

const message=this.querySelector("textarea").value;

const total=document.getElementById("estimatedTotal").innerText;


/*==========================
      ADDONS
==========================*/

let addons=[];

document.querySelectorAll(".addon").forEach(item=>{

if(item.checked){

addons.push(item.parentElement.innerText.trim());

}

});

if(addons.length===0){

addons.push("None");

}


/*==========================
      VALIDATION
==========================*/

if(fullName==="" || phone===""){

Swal.fire({

icon:"warning",

title:"Required Fields Missing",

text:"Please enter your Name and Phone Number."

});

button.disabled=false;

button.innerHTML=originalText;

return;

}


/*==========================
      EMAIL PARAMS
==========================*/

const templateParams = {
    customer_name: fullName,
    phone: phone,
    email: email,
    car_model: car,
    address: address,
    service: serviceName,
    addons: addons.join(", "),
    total: total,
    message: message
};

console.log(templateParams);

/*==========================
      SEND EMAIL
==========================*/

emailjs.send(

"premium@123",

"template_cofhf7s",

templateParams

)

.then(function(){


Swal.fire({

icon:"success",

title:"Appointment Sent!",

text:"Thank you! We will contact you shortly.",

confirmButtonColor:"#D4AF37"

});


bookingForm.reset();

document.getElementById("estimatedTotal").innerHTML="$0";

document.getElementById("selectedService").innerHTML="None";


button.disabled=false;

button.innerHTML=originalText;


})

.catch(function(error){

console.log(error);

Swal.fire({

icon:"error",

title:"Oops!",

text:"Something went wrong. Please try again."

});


button.disabled=false;

button.innerHTML=originalText;

});


});

}


/*==========================
      WHATSAPP BUTTON
==========================*/

const whatsapp=document.querySelector(".whatsapp-btn");

if(whatsapp){

whatsapp.addEventListener("click",()=>{

window.open(

"https://wa.me/YOURNUMBER",

"_blank"

);

});

}


/*==========================
      COPY PHONE
==========================*/

const phoneCopy=document.querySelector(".copy-phone");

if(phoneCopy){

phoneCopy.addEventListener("click",()=>{

navigator.clipboard.writeText(phoneCopy.innerText);

Swal.fire({

icon:"success",

title:"Copied!",

timer:1200,

showConfirmButton:false

});

});

}


/*==========================
      SUCCESS
==========================*/

console.log("Premium Shine Detailing Loaded Successfully");