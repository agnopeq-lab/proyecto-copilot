const API_URL = "http://127.0.0.1:5000"; // Cambia si tu backend usa otro puerto
const tablaProductos = document.getElementById("tablaProductos");
const formProducto = document.getElementById("formProducto");
const formEditar = document.getElementById("formEditar");
const modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));

// --- Cargar productos ---
async function cargarProductos() {
  const res = await fetch(`${API_URL}/todosproductos`);
  const data = await res.json();

  tablaProductos.innerHTML = "";

  for (const codigo in data) {
    const producto = data[codigo];
    const fila = `
      <tr>
        <td>${codigo}</td>
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>
          <button class="btn btn-sm btn-success me-2" onclick="abrirModal('${codigo}', ${producto.cantidad})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarProducto('${codigo}')">Eliminar</button>
        </td>
      </tr>
    `;
    tablaProductos.innerHTML += fila;
  }
}

// --- Agregar producto ---
formProducto.addEventListener("submit", async (e) => {
  e.preventDefault();

  const producto = {
    codigo: document.getElementById("codigo").value,
    nombre: document.getElementById("nombre").value,
    cantidad: parseInt(document.getElementById("cantidad").value),
  };

  const res = await fetch(`${API_URL}/agregarproducto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });

  if (res.ok) {
    alert("✅ Producto agregado correctamente");
    formProducto.reset();
    cargarProductos();
  } else {
    const err = await res.json();
    alert("⚠️ " + err.error);
  }
});

// --- Abrir modal de edición ---
function abrirModal(codigo, cantidad) {
  document.getElementById("editCodigo").value = codigo;
  document.getElementById("editCantidad").value = cantidad;
  modalEditar.show();
}

// --- Actualizar producto ---
formEditar.addEventListener("submit", async (e) => {
  e.preventDefault();

  const codigo = document.getElementById("editCodigo").value;
  const cantidad = parseInt(document.getElementById("editCantidad").value);

  const res = await fetch(`${API_URL}/actualizarproducto/${codigo}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cantidad }),
  });

  if (res.ok) {
    alert("✅ Cantidad actualizada correctamente");
    modalEditar.hide();
    cargarProductos();
  } else {
    const err = await res.json();
    alert("⚠️ " + err.error);
  }
});

// --- Eliminar producto ---
async function eliminarProducto(codigo) {
  if (confirm("¿Seguro que deseas eliminar este producto?")) {
    const res = await fetch(`${API_URL}/eliminarproducto/${codigo}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("🗑️ Producto eliminado correctamente");
      cargarProductos();
    } else {
      const err = await res.json();
      alert("⚠️ " + err.error);
    }
  }
}

// Cargar lista al iniciar
cargarProductos();