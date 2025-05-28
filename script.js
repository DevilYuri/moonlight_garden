document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});
function createPetals() {
    const petalCount = window.innerWidth < 768 ? 20 : 50;
    // остальной код
}