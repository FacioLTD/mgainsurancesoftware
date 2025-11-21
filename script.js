/**
 * MGA Insurance Software - Main JavaScript
 * Optimized for performance and accessibility
 */

(function() {
    'use strict';

    // Mobile Menu Toggle
    const initMobileMenu = () => {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-menu');
        
        if (!toggle || !menu) return;
        
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = toggle.querySelectorAll('span');
            if (!isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
                const spans = toggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    };

    // Smooth Scroll for Anchor Links
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#main-content') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const menu = document.querySelector('.nav-menu');
                    const toggle = document.querySelector('.mobile-menu-toggle');
                    if (menu && menu.classList.contains('active')) {
                        menu.classList.remove('active');
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        });
    };

    // Intersection Observer for Animations (Performance Optimized)
    const initScrollAnimations = () => {
        if (!('IntersectionObserver' in window)) return;
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe platform cards and FAQ items
        document.querySelectorAll('.platform-card, .faq-item, .criterion').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    // Lazy Loading for Images (if any are added later)
    const initLazyLoading = () => {
        if (!('IntersectionObserver' in window)) return;
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    };

    // Table Responsive Enhancement
    const initTableEnhancement = () => {
        const tables = document.querySelectorAll('.comparison-table');
        tables.forEach(table => {
            // Add wrapper if not already wrapped
            if (!table.parentElement.classList.contains('table-wrapper')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'table-wrapper';
                table.parentNode.insertBefore(wrapper, table);
                wrapper.appendChild(table);
            }
        });
    };

    // Performance: Debounce function
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Sticky Header Enhancement
    const initStickyHeader = () => {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScroll = 0;
        const scrollHandler = debounce(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        }, 10);
        
        window.addEventListener('scroll', scrollHandler, { passive: true });
    };
    
    // Intersection Observer for fade-in animations
    const initFadeInAnimations = () => {
        if (!('IntersectionObserver' in window)) return;
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe platform cards, FAQ items, and checklist items
        document.querySelectorAll('.platform-card, .faq-item, .checklist-item, .criterion').forEach(el => {
            observer.observe(el);
        });
    };

    // Analytics and Tracking (placeholder for future implementation)
    const trackEvent = (eventName, eventData) => {
        // Placeholder for analytics integration
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }
        // Console log for debugging (remove in production)
        console.log('Event tracked:', eventName, eventData);
    };

    // Track FAQ interactions
    const initFAQTracking = () => {
        document.querySelectorAll('.faq-item h3').forEach(question => {
            question.addEventListener('click', () => {
                const questionText = question.textContent.trim();
                trackEvent('faq_view', {
                    question: questionText
                });
            });
        });
    };

    // Track CTA clicks
    const initCTATracking = () => {
        document.querySelectorAll('a[href^="#contact"]').forEach(link => {
            link.addEventListener('click', () => {
                trackEvent('cta_click', {
                    location: 'navigation'
                });
            });
        });
    };

    // Initialize all features when DOM is ready
    const init = () => {
        // Core functionality
        initMobileMenu();
        initSmoothScroll();
        initTableEnhancement();
        initStickyHeader();
        
        // Performance optimizations
        initScrollAnimations();
        initLazyLoading();
        initFadeInAnimations();
        
        // Analytics (if needed)
        initFAQTracking();
        initCTATracking();
        
        // Log initialization (remove in production)
        console.log('MGA Insurance Software website initialized');
    };

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export for testing (if needed)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            init,
            trackEvent
        };
    }
})();

