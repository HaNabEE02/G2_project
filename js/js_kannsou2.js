document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const closeBtn = document.getElementById('close-btn');
  const backToTopBtn = document.getElementById('back-to-top');
  const targetSection = document.getElementById('장동혁');
  const theEndScreen = document.querySelector('.the-end-screen');
  const sections = document.querySelectorAll('section.box');
  const emptySpace = document.querySelector('.empty-space');
  
  // Show sidebar
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('show');
  });

  // Hide sidebar
  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });

  // Show/hide "Back to Top" button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }

    // Check if scrolled to the bottom to show "THE END" screen
    const documentHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY + viewportHeight;

    if (scrollPosition >= documentHeight) {
      theEndScreen.classList.add('show'); // Show THE END screen
    } else {
      theEndScreen.classList.remove('show'); // Hide THE END screen
    }
  });

  // Smooth scroll to top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scroll to sections
  const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
  const headerHeight = document.querySelector('.main-header').offsetHeight;

  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Scroll to the section smoothly
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });

  // Intersection Observer for scroll animation
  const sectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Adjust this value to trigger animation when the section is 10% visible
  };

  const sectionObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  const sectionObserver = new IntersectionObserver(sectionObserverCallback, sectionObserverOptions);

  // Observe all sections
  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // Intersection Observer for background change when "장동혁" section is at the top
  const backgroundObserverOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Observe when the top of the section is 100px from the top of the viewport
    threshold: 0
  };

  const backgroundObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.classList.add('background-only');
      } else {
        document.body.classList.remove('background-only');
      }
    });
  };

  const backgroundObserver = new IntersectionObserver(backgroundObserverCallback, backgroundObserverOptions);
  backgroundObserver.observe(targetSection);

  // Intersection Observer for THE END screen
  const theEndObserverOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px', // Observe when the bottom of the empty space is 100px from the bottom of the viewport
    threshold: 0
  };

  const theEndObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        theEndScreen.classList.add('show');
        document.body.classList.add('hide-content'); // Hide content when THE END screen is visible
      } else {
        theEndScreen.classList.remove('show');
        document.body.classList.remove('hide-content'); // Show content when THE END screen is not visible
      }
    });
  };

  const theEndObserver = new IntersectionObserver(theEndObserverCallback, theEndObserverOptions);
  theEndObserver.observe(emptySpace); // Observe the empty space that comes before THE END
});
