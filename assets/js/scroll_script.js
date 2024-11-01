const updateSection = () => {
    const target = document.getElementById('about');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth', // Optional: adds smooth scrolling
            block: 'start' // Scroll to the top of the element
        });
    }
}


window.addEventListener('wheel', (event) => {
    event.preventDefault();

    const position = window.scrollY;
    const height = window.innerHeight;
    const currentSection = Math.round(position / height);

    console.log(position / height);

    if (event.deltaY > 0) {
        window.scrollTo({
            top: (currentSection + 1) * height,
            left: 0,
            behavior: 'smooth',
        });
    }

    if (event.deltaY < 0) {
        window.scrollTo({
            top: (currentSection - 1) * height,
            left: 0,
            behavior: 'smooth',
        });
    }
});