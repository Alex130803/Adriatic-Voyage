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
  let observerStarted = false;
  let isScrolling = false;
  
  // Blokira normalni scroll kad zaključano
  function lockScroll(e) {
    if (locked) e.preventDefault();
  }
  
  // Koristi se za deltaY (wheel) i direction (touch)
  function changeStep(direction) {
    if (isScrolling) return; // sprječava spam
    isScrolling = true;
  
    if (direction === 'down' && currentStep < steps.length) {
      steps[currentStep].classList.add('revealed');
      currentStep++;
    } else if (direction === 'up' && currentStep > 0) {
      currentStep--;
      steps[currentStep].classList.remove('revealed');
    }
  
    // Otključaj scroll kad su svi prikazani
    if (currentStep === steps.length) {
      setTimeout(() => {
        locked = false;
        window.removeEventListener('wheel', lockScroll);
        window.removeEventListener('touchmove', lockScroll);
        window.removeEventListener('wheel', handleWheel, { passive: false });
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
        aboutSection.style.height = 'auto';
      }, 600);
    }
  
    // Pauza između koraka (debounce)
    setTimeout(() => {
      isScrolling = false;
    }, 400);
  }
  
  // Scroll kotačić
  function handleWheel(e) {
    if (!locked) return;
    const direction = e.deltaY > 0 ? 'down' : 'up';
    changeStep(direction);
  }
  
  // Touch podrška za mobitel
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
  
  // Observer pokreće skriptu kad sekcija uđe u viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !observerStarted) {
        locked = true;
        observerStarted = true;
  
        window.addEventListener('wheel', lockScroll, { passive: false });
        window.addEventListener('touchmove', lockScroll, { passive: false });
  
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
      }
    });
  }, { threshold: 1 });
  
  observer.observe(aboutSection);
  

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
  