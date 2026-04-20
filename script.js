let currentHero = 0;
const heroImgs = document.querySelectorAll('.hero-img');
const dots = document.querySelectorAll('.dot');
const totalHero = heroImgs.length;
function changeHero(index) {
    heroImgs[currentHero].classList.remove('active');
    dots[currentHero].classList.remove('active');
    currentHero = index;
    heroImgs[currentHero].classList.add('active');
    dots[currentHero].classList.add('active');
}
setInterval(() => { changeHero((currentHero + 1) % totalHero); }, 5000);
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 60 ? '0 4px 20px rgba(0,0,0,0.1)' : 'none';
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.feature-card, .product-showcase, .detail-card, .design-card, .spec-table-wrap, .contact-wrap').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});
function handleSubmit(e) {
    e.preventDefault();
    const msg = document.getElementById('form-success');
    msg.style.display = 'block';
    e.target.reset();
    setTimeout(() => { msg.style.display = 'none'; }, 4000);
}
const s = document.createElement('style');
s.textContent = '.fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.65s ease, transform 0.65s ease; } .fade-up.visible { opacity: 1; transform: translateY(0); }';
document.head.appendChild(s);
