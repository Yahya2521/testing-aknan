document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.getElementById('mobileMenu');
    const headerNavLinks = document.querySelectorAll('.nav-links a');

    const logoLink = document.querySelector('.logo');

    // Function to show/hide pages and scroll to the top
    window.showPage = function(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            window.scrollTo(0, 0);
        }

        // Update active link in navigation
        headerNavLinks.forEach(link => {
            link.classList.remove('active-link');
            if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(`'${pageId}'`)) {
                link.classList.add('active-link');
            }
        });

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('open');
        }
    };

    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });

    headerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
    });


    if (logoLink) {
        logoLink.addEventListener('click', (event) => {
            showPage('home'); 
        });
    }

    // Initial page load (show home page)
    showPage('home');


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form Submission (dummy for front-end)
    window.submitContactForm = function(event) {
        event.preventDefault(); 

        
        alert('تم إرسال رسالتك بنجاح! شكراً لك.');
        document.getElementById('contactForm').reset(); 
    };
});
