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

function processPayment(amount, paymentMethod) {
    if (amount <= 0) {
        console.error("El monto debe ser mayor a cero.");
        return false;
    }
    console.log(`Procesando pago de $${amount} usando ${paymentMethod}...`);
    return true;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
}

console.log("Módulo hotfix de formato de fecha cargado correctamente.");