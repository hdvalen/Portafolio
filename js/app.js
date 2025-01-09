//funcion para el mapa mental
function toggleArms() {
    const arms = document.querySelector('.arms');
    if (arms.style.display === 'flex') {
        arms.style.display = 'none';
    } else {
        arms.style.display = 'flex';
    }
}