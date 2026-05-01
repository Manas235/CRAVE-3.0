document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.getElementById('orderBtn');

    // Simple alert for the button
    orderBtn.addEventListener('click', () => {
        alert('Yum! Our kitchen is warming up. Redirecting you to checkout...');
    });

    // Console greeting
    console.log("Welcome to The Cookie Crumb! Keep your hands off the dough.");
});

// Optional: Add a scroll effect to the header
window.onscroll = function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#4b3621';
    } else {
        header.style.backgroundColor = '#6f4e37';
    }
};