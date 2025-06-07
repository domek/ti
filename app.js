// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navToggle && navMenu) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navToggle && navMenu) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

    // Smooth scrolling for internal navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 60; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Animated counters for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const targetText = counter.textContent;
            const targetValue = parseInt(counter.getAttribute('data-target'));
            
            if (!targetValue) return;
            
            const duration = 2000; // 2 seconds
            const increment = targetValue / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                if (current < targetValue) {
                    current += increment;
                    if (current > targetValue) current = targetValue;
                    
                    // Format number with proper separators
                    let displayValue;
                    if (targetValue >= 1000000) {
                        displayValue = (current / 1000000).toFixed(1).replace('.0', '') + ' mln+';
                    } else if (targetValue >= 1000) {
                        displayValue = Math.floor(current / 1000) + ' tys+';
                    } else {
                        displayValue = Math.floor(current).toLocaleString('pl-PL') + '+';
                    }
                    
                    counter.textContent = displayValue;
                    requestAnimationFrame(updateCounter);
                } else {
                    // Final formatting to match original text
                    counter.textContent = targetText;
                }
            };
            
            updateCounter();
        });
    }

    // Intersection Observer for statistics animation
    const statsSection = document.getElementById('statystyki');
    if (statsSection) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target); // Run animation only once
                }
            });
        }, observerOptions);

        observer.observe(statsSection);
    }

    // Add scroll effect to navbar - hide/show on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Subtle parallax effect for cosmic background elements
    let ticking = false;
    
    function updateParallaxEffects() {
        const scrollY = window.pageYOffset;
        const stars = document.querySelector('.stars');
        const planets = document.querySelector('.planets');
        
        if (stars) {
            stars.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
        if (planets) {
            planets.style.transform = `translateY(${scrollY * 0.05}px)`;
        }
        
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallaxEffects);
            ticking = true;
        }
    });

    // Add loading animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length > 0) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100); // Stagger animation
                    cardObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Initially hide service cards for animation
        serviceCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            cardObserver.observe(card);
        });
    }

    // Add glow effect on hover for interactive elements
    const interactiveElements = document.querySelectorAll('.btn, .service-card, .stat-card, .card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
        });
    });

    // Solar System animation performance optimization
    const solarSystem = document.querySelector('.solar-system');
    if (solarSystem) {
        // Add will-change property for better performance
        const animatedElements = solarSystem.querySelectorAll('.sun, .earth-orbit, .earth, .moon-orbit, .moon');
        animatedElements.forEach(element => {
            element.style.willChange = 'transform';
        });

        // Optional: Pause animations when not visible (performance optimization)
        const solarSystemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const target = entry.target;
                if (entry.isIntersecting) {
                    // Resume animations
                    target.style.animationPlayState = 'running';
                } else {
                    // Pause animations when not visible
                    target.style.animationPlayState = 'paused';
                }
            });
        }, {
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            solarSystemObserver.observe(element);
        });
    }

    // Add fade-in animation for main sections
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    sections.forEach(section => {
        // Skip hero section
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            sectionObserver.observe(section);
        }
    });

    // Add dynamic star generation for better performance
    function createDynamicStars() {
        const starsContainer = document.querySelector('.stars');
        if (!starsContainer) return;

        // Clear existing background and create individual star elements
        const numberOfStars = 50; // Reduced for better performance
        
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'dynamic-star';
            star.style.position = 'absolute';
            star.style.backgroundColor = i % 3 === 0 ? '#FFCD00' : '#ffffff';
            star.style.borderRadius = '50%';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.opacity = Math.random() * 0.8 + 0.2;
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s linear infinite`;
            star.style.animationDelay = Math.random() * 2 + 's';
            
            starsContainer.appendChild(star);
        }
    }

    // Call dynamic star creation
    createDynamicStars();

    // Performance monitoring - reduce animation complexity on slower devices
    function checkPerformance() {
        const startTime = performance.now();
        requestAnimationFrame(() => {
            const endTime = performance.now();
            const frameTime = endTime - startTime;
            
            // If frame time is too high (> 20ms), reduce animations
            if (frameTime > 20) {
                document.body.classList.add('reduced-motion');
                // Add CSS class that reduces or disables some animations
            }
        });
    }

    // Check performance after page load
    setTimeout(checkPerformance, 1000);

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Add focus trap for mobile menu
    if (navMenu) {
        const focusableElements = navMenu.querySelectorAll('a, button');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        navMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    console.log('🌌 Kosmiczne Archiwum Wiedzy UMK - aplikacja załadowana pomyślnie!');
});