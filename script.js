let moreInfoBtn = document.getElementById('more-info-btn');
let contactBtn = document.getElementById('contact-btn');
let popup = document.getElementById('popup');
let closeBtn = document.getElementById('close-btn');
let contactForm = document.getElementById('contact-form');

nameField = document.getElementById("name");
mobileField = document.getElementById("mobile");
emailField = document.getElementById("email");
msgField = document.getElementById("message");

moreInfoBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

contactBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let emailTemplate = `<div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
        <p><span style="font-weight: bold;">Name:</span> ${nameField.value}</p>
        <p><span style="font-weight: bold;">Mobile:</span> ${mobileField.value}</p>
        <p><span style="font-weight: bold;">Email:</span> ${emailField.value}</p>
        <p><span style="font-weight: bold;">Message:</span> ${msgField.value}</p>
    </div>`;
    Email.send({
        // SecureToken: "4944141d-8960-46ea-857a-c79c5d20bfcc",
        Host: "smtp.elasticemail.com",
        Username: "shubhamjha14081@gmail.com",
        Password: "8466C8B6481D3DD0383C94E9F74297EB3585",
        To: 'shubhamjha14081@gmail.com',
        From: "shubhamjha14081@gmail.com",
        Subject: "Message from a new client!",
        Body: emailTemplate
    }).then(() => {
        message => alert("Message sent succesfully")
        popup.style.display = 'none';
    }).catch(error => console.log(error));
});


const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}

function img(anything) {
    document.querySelector('.slide').src = anything;
}

function change(change) {
    const line = document.querySelector('.image');
    line.style.background = change;
}

const sideDivFixed = document.querySelector('#side-div-fixed');
const enquireWrapper = document.querySelector('#enquire-wrapper');
let toggle = false;

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY < 300 ? `rgba(0, 0, 0, ${(window.scrollY + 100) / this.innerHeight})` : 'rgba(0, 0, 0, (400 / this.innerHeight))';
});

enquireWrapper.addEventListener("click", () => {
    if (!toggle) {
        sideDivFixed.style.transform = "translate(0, -50%)";
        toggle = true;
    } else {
        sideDivFixed.style.transform = "translate(100%, -50%)";
        toggle = false;
    }
});

var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionIHeading');

for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (var i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})



const slides = document.querySelectorAll('.slides li');
let currentSlideIndex = 0;

function showSlide(index) {
    slides[currentSlideIndex].classList.remove('active');
    slides[index].classList.add('active');
    currentSlideIndex = index;
}

showSlide(0);

setInterval(() => {
    if (currentSlideIndex === slides.length - 1) {
        showSlide(0);
    } else {
        showSlide(currentSlideIndex + 1);
    }
}, 5000);


