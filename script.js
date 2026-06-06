document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       MOBILE NAVIGATION MENU
       ========================================================================== */
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close mobile menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    /* ==========================================================================
       STICKY NAVBAR SCROLL CLASS
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check on load

    /* ==========================================================================
       SCROLLSPY ACTIVE STATE FOR NAVBAR LINKS
       ========================================================================== */
    const sections = document.querySelectorAll('section, header');
    
    const handleScrollSpy = () => {
        let scrollPosition = window.scrollY + 150; // offset for nav height

        sections.forEach(section => {
            if (section.id) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${section.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    };

    window.addEventListener('scroll', handleScrollSpy);

    /* ==========================================================================
       SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .fade-in-up');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* ==========================================================================
       STATS COUNTER ANIMATION
       ========================================================================== */
    const statsSection = document.querySelector('.hero-stats-bar');
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-target'));
        const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
        const duration = 2000; // 2 seconds animation
        const startTime = performance.now();

        const updateNumber = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime >= duration) {
                el.textContent = target.toFixed(decimals);
            } else {
                const progress = elapsedTime / duration;
                // Easing function: easeOutQuad
                const easeProgress = progress * (2 - progress);
                const currentValue = easeProgress * target;
                el.textContent = currentValue.toFixed(decimals);
                requestAnimationFrame(updateNumber);
            }
        };

        requestAnimationFrame(updateNumber);
    };

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(num => animateCounter(num));
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });

        statsObserver.observe(statsSection);
    }

    /* ==========================================================================
       CONTACT FORM SUBMISSION
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');

    if (contactForm && successMsg) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple front-end validation check
            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const message = document.getElementById('form-message').value.trim();

            if (name && email && message) {
                // Submit button status change
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

                // Simulate network request delay (1.2 seconds)
                setTimeout(() => {
                    successMsg.style.display = 'block';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMsg.style.display = 'none';
                    }, 5000);
                }, 1200);
            }
        });
    }

    /* ==========================================================================
       MAP PLACEHOLDER CLICK INTERACTION
       ========================================================================== */
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', () => {
            const marker = mapPlaceholder.querySelector('.marker-pulse');
            if (marker) {
                marker.style.animation = 'none';
                void marker.offsetWidth; // Trigger reflow
                marker.style.animation = 'markerPulse 1s ease-out 3';
            }
        });
    }
});
