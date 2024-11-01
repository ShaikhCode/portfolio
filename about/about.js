document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});