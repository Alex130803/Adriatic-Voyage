// POPUP
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}
  
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
  
// FLATPICKR
document.addEventListener("DOMContentLoaded", function () {
    flatpickr("#date", {
      dateFormat: "d.m.Y",
      altInput: true,
      altFormat: "F j, Y"
    });
});

flatpickr("#quick-date-2", {
    dateFormat: "d.m.Y",
    altInput: true,
    altFormat: "F j, Y"
  });
  
  function showThanks(e) {
    e.preventDefault();
    document.getElementById("thanks-msg").classList.add("visible");
  }

  const steps = document.querySelectorAll('.about-snap .step');
  const aboutSection = document.querySelector('.about-lock');
  let currentStep = 0;
  let locked = false;
  let isScrolling = false;
  
  // LOCK SCROLL
  function lockScroll(e) {
    if (locked) e.preventDefault();
  }
  
  // CHANGE STEP
  function changeStep(direction) {
    if (isScrolling) return;
    isScrolling = true;
  
    if (direction === 'down' && currentStep < steps.length) {
      steps[currentStep].classList.add('revealed');
      currentStep++;
    } else if (direction === 'up' && currentStep > 0) {
      currentStep--;
      steps[currentStep].classList.remove('revealed');
    }
  
    if (currentStep === steps.length) {
      setTimeout(() => {
        locked = false;
        window.removeEventListener('wheel', lockScroll, { passive: false });
        window.removeEventListener('touchmove', lockScroll, { passive: false });
        window.removeEventListener('wheel', handleWheel, { passive: false });
        window.removeEventListener('touchstart', handleTouchStart, { passive: false });
        window.removeEventListener('touchend', handleTouchEnd, { passive: false });
        aboutSection.style.height = 'auto';
      }, 600);
    }
  
    setTimeout(() => {
      isScrolling = false;
    }, 400);
  }
  
  // WHEEL EVENT
  function handleWheel(e) {
    if (!locked) return;
    const direction = e.deltaY > 0 ? 'down' : 'up';
    changeStep(direction);
  }
  
  // TOUCH SUPPORT
  let startY = 0;
  function handleTouchStart(e) {
    startY = e.touches[0].clientY;
  }
  function handleTouchEnd(e) {
    const endY = e.changedTouches[0].clientY;
    const diff = startY - endY;
    if (Math.abs(diff) > 30) {
      const direction = diff > 0 ? 'down' : 'up';
      changeStep(direction);
    }
  }
  
  // INIT WHEN SECTION IS VISIBLE
  function startScrollLock() {
    if (locked) return;
  
    locked = true;
    aboutSection.style.height = '100vh';
  
    window.addEventListener('wheel', lockScroll, { passive: false });
    window.addEventListener('touchmove', lockScroll, { passive: false });
  
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
  }
  
  // SCROLL TRIGGER (IntersectionObserver)
  const thresholdValue = window.innerWidth <= 768 ? 0.6 : 1; // mobile: 0.8, desktop: 1

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      startScrollLock(); // ili bilo koja druga funkcija
      obs.disconnect();
    }
  }, {
    threshold: thresholdValue
  });
  
  observer.observe(document.querySelector('.about-lock'));
  
  

//POP UP
// Elementi
const trigger = document.getElementById("quickBookingTrigger");
const btn = document.getElementById("quickBookingBtn");
const popup = document.getElementById("requestPopup");

// Otvori popup
function showPopup() {
  popup.classList.add("show");
}

// Zatvori popup klikom van forme
function hidePopup(e) {
  if (e.target === popup) {
    popup.classList.remove("show");
  }
}

// Event listeneri
trigger.addEventListener("click", showPopup);
btn.addEventListener("click", showPopup);
popup.addEventListener("click", hidePopup);


//Hamburger menu


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = hamburger.textContent === '☰' ? '✖' : '☰';
});





//scroll animacije




document.addEventListener("DOMContentLoaded", function () {
  const fleetCards = document.querySelectorAll(".fleet-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); // za ponavljanje
      }
    });
  }, {
    threshold: 0.2
  });

  fleetCards.forEach(card => observer.observe(card));
});





  document.addEventListener("DOMContentLoaded", function () {
    const islands = document.querySelectorAll(".island");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible"); // omogućuje ponavljanje
        }
      });
    }, {
      threshold: 0.2
    });

    islands.forEach(island => observer.observe(island));
  });





  document.addEventListener("DOMContentLoaded", function () {
    const textEl = document.querySelector('.animated-text');
    const text = textEl.textContent;
    textEl.innerHTML = '';
  
    // Podijeli slova i dodaj span s delayem
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i] === ' ' ? '\u00A0' : text[i]; // \u00A0 = &nbsp;
      span.style.transitionDelay = `${i * 40}ms`;
      textEl.appendChild(span);
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          textEl.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(textEl);
  });
  




  document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector('.animated-heading');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heading.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(heading);
  });

// REVIEWS
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

function updateSlider() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

window.addEventListener("resize", updateSlider);

window.addEventListener("load", () => {
  updateSlider();
});


  
  
  

//popup view/hide


function openPopup() {
  document.getElementById("popup").style.display = "flex";

}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}




//ovo za forme
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form[action='send.php']");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(form);

      fetch("send.php", {
        method: "POST",
        body: formData
      })
        .then(response => response.text())
        .then(data => {
          if (data.trim() === "OK") {
            if (form.querySelector("#success-message")) {
              form.style.display = "none";
              document.getElementById("success-message").style.display = "block";
            } else {
              alert("✅ Request sent successfully!");
              form.reset();
            }
          } else {
            alert("Greška: " + data);
          }
        })
        .catch(err => {
          console.error("Error sending form:", err);
          alert("Greška pri slanju.");
        });
    });
  });
});







//MODAL


function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}







let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll("#modal-kolocep .slide");
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === currentSlide) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

function openModal(id) {
  document.getElementById(id).style.display = "flex";
  currentSlide = 0;
  showSlide(currentSlide);
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}


