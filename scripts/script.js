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

  //Za abour us sekciju
  const steps = document.querySelectorAll('.about-snap .step');
  const aboutSection = document.querySelector('.about-lock');
  let currentStep = 0;
  let locked = false;
  let observerStarted = false;
  
  function lockScroll(e) {
    if (locked) e.preventDefault();
  }
  
  function handleStepScroll(e) {
    if (!locked) return;
  
    if (e.deltaY > 0 && currentStep < steps.length) {
      steps[currentStep].classList.add('revealed');
      currentStep++;
  
      if (currentStep === steps.length) {
        setTimeout(() => {
          locked = false;
          window.removeEventListener('wheel', lockScroll);
          window.removeEventListener('touchmove', lockScroll);
          aboutSection.style.height = 'auto';
        }, 600);
      }
    }
  }
  
  // Observer da pokrene animaciju tek kad se sekcija vidi
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !observerStarted) {
        locked = true;
        observerStarted = true;
        window.addEventListener('wheel', lockScroll, { passive: false });
        window.addEventListener('touchmove', lockScroll, { passive: false });
        window.addEventListener('wheel', handleStepScroll, { passive: false });
      }
    });
  }, { threshold: 0.6 });
  
  observer.observe(aboutSection);
  










//Hamburger menu


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = hamburger.textContent === '☰' ? '✖' : '☰';
});

