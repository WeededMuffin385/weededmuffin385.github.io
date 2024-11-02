const container = document.getElementById('container');

const updateMenuVisibility = () => {
    const element = document.querySelector('header');
    if (container.scrollTop < window.innerHeight) {
        element.classList.remove("hidden");
    } else {
        element.classList.add("hidden");
    }
}

document.addEventListener('load', updateMenuVisibility);
container.addEventListener('scroll', updateMenuVisibility);