// Optional JS: Animate input field on focus
const input = document.querySelector('input.sc-kOnlKp');

input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 10px #fff';
});

input.addEventListener('blur', () => {
    input.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
});
