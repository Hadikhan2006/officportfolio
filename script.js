// Preloader - Fixed version
document.addEventListener("DOMContentLoaded", function() {
  // Backup timeout to ensure preloader is removed even if load event doesn't fire
  setTimeout(removePreloader, 2500);
});

window.addEventListener("load", removePreloader);

function removePreloader() {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
      // Trigger animations after preloader
      document.querySelectorAll('[data-aos]').forEach(item => {
        item.classList.add('aos-animate');
      });
    }, 500);
  }
}


// Theme Switcher
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.querySelector(".theme-switch-toggle");
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  
  themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    // Save theme preference
    if (document.body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
});

// Custom Cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 100);
  });

  // Hover effects
  const hoverElements = document.querySelectorAll("a, button, .portfolio-card, .service-card, .btn");
  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
      cursor.style.backgroundColor = "transparent";
      cursor.style.border = "1px solid var(--primary-color)";
      cursorFollower.style.transform = "translate(-50%, -50%) scale(1.5)";
    });

    element.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      cursor.style.backgroundColor = "var(--primary-color)";
      cursor.style.border = "none";
      cursorFollower.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });
  
  // Hide cursor when leaving window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
    cursorFollower.style.opacity = "0";
  });
  
  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
    cursorFollower.style.opacity = "1";
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  
  // Update active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Portfolio Filter
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      portfolioItems.forEach((item) => {
        if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 100);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
  
  // Portfolio Image Lightbox
  const portfolioImageLinks = document.querySelectorAll('.portfolio-image-link');
  if (typeof lightGallery === 'function') {
    lightGallery(document.querySelector('.portfolio-grid'), {
      selector: '.portfolio-image-link'
    });
  }
});

// Particles Background
document.addEventListener("DOMContentLoaded", () => {
  if (typeof particlesJS === 'function') {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ff0000",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ff0000",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }
});

// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
  if (typeof AOS === 'function') {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      disable: 'mobile'
    });
  }
});

// Skills Progress Animation
const animateProgress = () => {
  const progress = document.querySelectorAll(".progress-bar");
  progress.forEach((item) => {
    const value = item.style.width;
    item.style.width = "0";
    setTimeout(() => {
      item.style.width = value;
    }, 100);
  });
};

// Trigger progress animation when in viewport
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateProgress();
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".skills").forEach((skill) => {
    observer.observe(skill);
  });
});

// Parallax Effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero');
  
  parallaxElements.forEach(element => {
    const limit = element.offsetTop + element.offsetHeight;
    if (scrolled > element.offsetTop && scrolled <= limit) {
      element.style.backgroundPositionY = (scrolled - element.offsetTop) / 1.5 + "px";
    }
  });
});

// Animated Text Typing Effect
document.addEventListener("DOMContentLoaded", function() {
  const typedElement = document.querySelector('.typed-text');
  if (typedElement && typeof Typed === 'function') {
    const typed = new Typed('.typed-text', {
      strings: ['Designer', 'Developer', 'Freelancer', 'UI/UX Expert', 'Creator'],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      smartBackspace: true
    });
  }
});

// Tilt Effect for Portfolio Cards
document.addEventListener("DOMContentLoaded", function() {
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  if (typeof VanillaTilt === 'function') {
    portfolioCards.forEach(card => {
      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.05
      });
    });
  }
});

// Animated Counter for Stats
document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.counter-value');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'));
        let count = 0;
        const updateCount = () => {
          const increment = countTo / 100;
          if (count < countTo) {
            count += increment;
            target.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
          } else {
            target.innerText = countTo;
          }
        };
        updateCount();
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});

// Scroll Progress Indicator
document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrollPercentage + '%';
    });
  }
});

// Interactive Service Cards
document.addEventListener("DOMContentLoaded", function() {
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.service-details').classList.add('show');
      card.querySelector('.service-icon').classList.add('animate-icon');
    });
    
    card.addEventListener('mouseleave', () => {
      card.querySelector('.service-details').classList.remove('show');
      card.querySelector('.service-icon').classList.remove('animate-icon');
    });
  });
});

// Testimonial Slider
document.addEventListener("DOMContentLoaded", function() {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentIndex = 0;
  
  function showTestimonial(index) {
    testimonialItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialItems[index].classList.add('active');
    dots[index].classList.add('active');
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? testimonialItems.length - 1 : currentIndex - 1;
      showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === testimonialItems.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    });
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showTestimonial(currentIndex);
      });
    });
    
    // Auto slide
    setInterval(() => {
      currentIndex = (currentIndex === testimonialItems.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    }, 5000);
  }
});

// Contact Form Validation and Submission
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic validation
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      if (!name || !email || !message) {
        formStatus.style.display = 'block';
        formStatus.querySelector('.success-message').style.display = 'none';
        formStatus.querySelector('.error-message').style.display = 'block';
        return;
      }
      
      // Simulate form submission
      formStatus.style.display = 'block';
      formStatus.querySelector('.error-message').style.display = 'none';
      formStatus.querySelector('.success-message').style.display = 'block';
      
      // Reset form
      contactForm.reset();
    });
  }
});

// Back to top button
document.addEventListener("DOMContentLoaded", function() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    });
    
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});