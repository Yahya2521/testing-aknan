document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.getElementById('mobileMenu');
    const headerNavLinks = document.querySelectorAll('.nav-links a');
    // إضافة مرجع لشعار الموقع لتحديد السلوك عند النقر عليه
    const logoLink = document.querySelector('.logo');

    // Function to show/hide pages and scroll to the top
    window.showPage = function(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            // التحديث المطلوب: التمرير إلى أعلى الصفحة عند الانتقال لصفحة جديدة
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

    // Close mobile menu when a navigation link is clicked (optional, as showPage handles it)
    headerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // If the mobile menu is open, close it
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
    });

    // Handle logo click to go to home page and scroll to top
    // بما أن الشعار لديه بالفعل onclick="showPage('home')", فهذه الميزة مضمونة
    // ولكن يمكن إضافة مستمع حدث صريح لمزيد من التحكم أو إذا تغيرت بنية HTML
    if (logoLink) {
        logoLink.addEventListener('click', (event) => {
            // إذا كان الـ onclick قد تم إزالته من HTML، أزل التعليق عن السطر التالي
            // event.preventDefault(); // منع السلوك الافتراضي إذا كان الـ href هو #
            showPage('home'); // تأكد من عرض الصفحة الرئيسية والتمرير لأعلى
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
        event.preventDefault(); // منع السلوك الافتراضي لإرسال النموذج

        // هنا يمكنك إضافة كود لإرسال البيانات إلى خادم (باستخدام Fetch API مثلاً)
        // For now, we'll just show an alert and reset the form.
        alert('تم إرسال رسالتك بنجاح! شكراً لك.');
        document.getElementById('contactForm').reset(); 
    };
});