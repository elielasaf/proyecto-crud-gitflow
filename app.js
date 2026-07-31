document.addEventListener("DOMContentLoaded", loadItems);

const form = document.getElementById("crud-form");
const itemIdInput = document.getElementById("item-id");
const itemNameInput = document.getElementById("item-name");
const itemList = document.getElementById("item-list");

let items = JSON.parse(localStorage.getItem("crud_items")) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = itemNameInput.value.trim();
    
    if (!name) {
        alert("El campo no puede estar vacío.");
        return;
    }

    const id = itemIdInput.value;
    if (id) {
        items = items.map(item => item.id == id ? { ...item, name } : item);
        itemIdInput.value = "";
    } else {
        const newItem = { id: Date.now(), name };
        items.push(newItem);
    }

    saveAndRender();
    form.reset();
});

function saveAndRender() {
    localStorage.setItem("crud_items", JSON.stringify(items));
    renderItems();
}

// Leer (Read)
function renderItems() {
    itemList.innerHTML = "";
    if (items.length === 0) {
        itemList.innerHTML = `<tr><td colspan="3" style="text-align: center;">No hay registros</td></tr>`;
        return;
    }

    items.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td class="actions">
                <button class="btn-edit" onclick="editItem(${item.id})">Editar</button>
                <button class="btn-delete" onclick="deleteItem(${item.id})">Eliminar</button>
            </td>
        `;
        itemList.appendChild(row);
    });
}

window.editItem = function(id) {
    const item = items.find(i => i.id == id);
    if (item) {
        itemIdInput.value = item.id;
        itemNameInput.value = item.name;
    }
}

window.deleteItem = function(id) {
    if (confirm("¿Estás seguro de eliminar este registro?")) {
        items = items.filter(item => item.id != id);
        saveAndRender();
    }
}

renderItems();