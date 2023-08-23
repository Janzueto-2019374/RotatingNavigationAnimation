const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    content.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
    content.classList.remove('active');
});
