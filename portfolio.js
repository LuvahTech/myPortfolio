let nav = document.querySelector('nav');
window.addEventListener('scroll',()=>{
    nav.classList.toggle('nav-scroll',window.scrollY > 0);
})


// active toggle ...........
const AllNavlinkA = document.querySelectorAll('.navlinks li a');

AllNavlinkA.forEach(item => {
  item.addEventListener('click', () => {
    removeActive();
    item.classList.add('active');
  });
});

function removeActive() {
  AllNavlinkA.forEach(item => {
    item.classList.remove('active');
  });
}

// Navbar ...........

let menuBars = document.querySelector('nav button');
let navlinks = document.querySelector('.navlinks');

menuBars.addEventListener('click', () => {
    navlinks.classList.toggle('nav-links-block');
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      const isVisible = entry.isIntersecting;
      
      if (isVisible) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const sections = document.querySelectorAll('.container');
sections.forEach((el) => {
  if (!el.classList.contains('exclude-animation')) {
      observer.observe(el);
  }
});

// const hiddenelements = document.querySelectorAll('container portfolio-container');