document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initMobileMenu();
    initScrollReveal();
    initFAQ();
    initSmoothScroll();
    initNavScroll();
    initParallaxOrbs();
    initRipple();
    initCardTilt();
    initCardGlow();
    initCursorGlow();
});

// kill the loader once everything's painted
function initLoader() {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;

    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('hidden'), 300);
    });

    // fallback if load never fires (cached page etc)
    setTimeout(() => loader.classList.add('hidden'), 3000);
}

function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    if (!btn || !menu) return;

    const links = menu.querySelectorAll('.mobile-nav-link, .mobile-cta');
    let open = false;

    function toggle(state) {
        open = state;
        menu.classList.toggle('active', open);
        const spans = btn.querySelectorAll('span');
        spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
        spans[1].style.opacity = open ? '0' : '';
        spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
    }

    btn.addEventListener('click', () => toggle(!open));
    links.forEach(l => l.addEventListener('click', () => toggle(false)));

    // close on outside tap
    document.addEventListener('click', (e) => {
        if (open && !menu.contains(e.target) && !btn.contains(e.target)) toggle(false);
    });
}

function initScrollReveal() {
    const els = document.querySelectorAll('.glass-card, .glass-card-lg, .section-header, .mission-text');

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    els.forEach(el => obs.observe(el));
}

function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    items.forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            // close siblings
            items.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const nav = document.querySelector('.nav-glass');
            const offset = nav ? nav.offsetHeight + 20 : 80;
            const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: pos, behavior: 'smooth' });
        });
    });
}

function initNavScroll() {
    const nav = document.querySelector('.nav-container');
    if (!nav) return;

    // throttle this, no need to run 60fps for a bg change
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset > 100;
            nav.style.background = scrolled ? 'rgba(10, 10, 15, 0.8)' : '';
            nav.style.boxShadow = scrolled ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '';
            ticking = false;
        });
    });
}

function initParallaxOrbs() {
    // not worth it on mobile
    if (window.innerWidth <= 768) return;

    const orbs = document.querySelectorAll('.bg-blur-orb');
    let mx = 0, my = 0;
    let w = window.innerWidth, h = window.innerHeight;

    document.addEventListener('mousemove', (e) => {
        mx = (e.clientX - w / 2) / w;
        my = (e.clientY - h / 2) / h;
    });

    window.addEventListener('resize', () => { w = window.innerWidth; h = window.innerHeight; });

    function tick() {
        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 20;
            // only translate, don't clobber css transforms
            orb.style.translate = `${mx * speed}px ${my * speed}px`;
        });
        requestAnimationFrame(tick);
    }
    tick();
}

// ripple on glass buttons
function initRipple() {
    document.querySelectorAll('.btn-glass').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'btn-ripple';
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// 3d tilt on pricing cards
function initCardTilt() {
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const rx = (e.clientY - rect.top - rect.height / 2) / 20;
            const ry = (rect.width / 2 - (e.clientX - rect.left)) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
}

// glow follows cursor on glass cards
function initCardGlow() {
    document.querySelectorAll('.glass-card, .glass-card-lg').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
            card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
        });
    });
}

// everything loaded, wake up the hero
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// cursor glow that follows mouse around
function initCursorGlow() {
    if (window.innerWidth <= 768) return;

    const glow = document.getElementById('cursorGlow');
    if (!glow) return;

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
}
