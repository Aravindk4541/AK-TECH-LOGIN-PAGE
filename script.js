
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});


// Sticky navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});


// Typing effect for Web Developer
document.addEventListener("DOMContentLoaded", () => {
  const text = "Web Developer | UI Designer";
  const typedText = document.getElementById("typed-text");
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typedText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});



// Progress bar animation with counting percentage using data-progress
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        const targetValue = parseInt(progress.getAttribute("data-progress"));
        let count = 0;

        progress.style.width = `${targetValue}%`;

        const interval = setInterval(() => {
          if (count >= targetValue) {
            clearInterval(interval);
          } else {
            count++;
            progress.textContent = `${count}%`;
          }
        }, 20);
      }
    });
  }, {
    threshold: 0.6
  });

  progressBars.forEach(bar => observer.observe(bar));
});


// Contact form submission success message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const status = document.createElement("p");
  status.id = "form-status";
  form.appendChild(status);

  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerHTML = "✅ Thanks! Your message has been sent.";
      status.style.color = "green";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! There was a problem sending your message.";
      status.style.color = "red";
    }
  });
});

