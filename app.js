document.addEventListener("DOMContentLoaded", () => {
    console.log("Módulo de validación de entradas cargado correctamente.");
});

function validateInput(value) {
    if (!value || value.trim() === "") {
        alert("El campo no puede estar vacío.");
        return false;
    }
    return true;
}