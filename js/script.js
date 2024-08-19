let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        navbar.style.top = '-75px'; // Adjust this value to match the height of your navbar
    } else {
        // Scroll up
        navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.scroll');

    containers.forEach(container => {
        container.addEventListener('wheel', (e) => {
            const s = container.scrollLeft;
            const soft = container.classList.item(1);
            container.scrollLeft += e.deltaY / soft;
            if (s != container.scrollLeft) {
                e.preventDefault();
            }
        });
    });
});