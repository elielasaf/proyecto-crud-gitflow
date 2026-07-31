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