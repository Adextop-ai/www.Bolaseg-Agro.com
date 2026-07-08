// Loader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => document.querySelector('.loader').style.display = 'none', 500);
  }, 1500);
});

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});
// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
  });
});
// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
  });
});
// DARK MODE TOGGLE - THIS IS THE FIX
const darkToggle = document.getElementById('darkToggle');
const body = document.body;

// Check if user had dark mode on before
if(localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark');
  darkToggle.textContent = '☀️';
}

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  if(body.classList.contains('dark')) {
    darkToggle.textContent = '☀️';
    localStorage.setItem('theme','dark');
  } else {
    darkToggle.textContent = '🌙'; 
    localStorage.setItem('theme','light');
  }
});
// Typewriter Effect
const texts = [
  "Premium Livestock & Fresh Farm Produce",
  "Healthy Cattle • Organic Vegetables • Trusted Delivery",
  "Farming with Integrity Since 2015"
];
let textIndex = 0;
let charIndex = 0;
const typewriterEl = document.getElementById('typewriter');

function typeWriter() {
  if(charIndex < texts[textIndex].length) {
    typewriterEl.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if(charIndex > 0) {
    typewriterEl.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 30);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, 500);
  }
}
// Start typewriter after loader
setTimeout(typeWriter, 2000);

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold:0.2 });

document.querySelectorAll('.slide-left,.slide-right,.fade-left,.fade-right').forEach(el => {
  observer.observe(el);
});

// Form submit
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Bolaseg Agro will contact you on WhatsApp soon.');
  e.target.reset();
});
// HERO SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if (index >= slides.length) index = 0;
}

setInterval(showSlide, 4000);

const counters = document.querySelectorAll(".counter");

function animateCounters() {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });
}
window.addEventListener("scroll", animateCounters);

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    const answer = faq.querySelector(".faq-answer");
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
});

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

function openImg(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightboxImg").src = img.src;
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      alert("Message sent successfully!");
    }, () => {
      alert("Failed to send message.");
    });
});
alert("JS is connected!");