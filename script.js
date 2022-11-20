
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let precioTotal = localStorage.getItem('precioTotal');
precioTotal = parseInt(precioTotal);
let totalCarrito;
let botonFinalizar = document.getElementById("finalizar");

const local = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}

// muestra de productos 
function mostrarProductos() {
  fetch('/productos.json')
    .then((respuesta) => respuesta.json())
    .then((productos) => {
      let html = "";
      for (let i = 0; i < productos.length; i++) {
        html = html +
          `

                          <div class="card col-md-2">
                            <img src=${productos[i].foto} class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${productos[i].id}</h5>
                            <p class="card-text">${productos[i].nombre}</p>
                            <p class="card-text">$ ${productos[i].precio}</p>     
                            <button onclick="agregarAlCarrito(${productos[i].id});" type="button" class="btn btn-warning btn-lg">Comprar</button>
     
                            </div>
                          </div>
           `;
      }
      document.getElementById('prods').innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
}

//visualizacion de carrito
function visualizarCarrito() {
  let html = "";
  for (let i = 0; i < carrito.length; i++) {
    html = html +
      `
<tr>
      <th scope="row">${carrito[i].id}</th>
      <td>${carrito[i].nombre}</td>
      <td>$${carrito[i].precio}</td>
      
      <td><i class="fa-solid fa-cart-shopping" onclick="removerCarrito(${i}); local();" ><a class="btn btn-outline">         
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
           class="bi bi-trash3" viewBox="0 0 16 16">
      <path
          d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
      </svg>
  </a></i></td>
    </tr>
  `;
  }
  document.getElementById('tablabody').innerHTML = html;
}


//añadir al carrito
function agregarAlCarrito(id) {
  fetch('/productos.json')
    .then((respuesta) => respuesta.json())
    .then((productos) => {
      const agregarAlCarrito = productos.find((item) => item.id == id);
      carrito.push(agregarAlCarrito)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su producto se ha agregado correctamente al carrito',
        showConfirmButton: false,
        timer: 1000
      })

      visualizarCarrito();
      local();
      calcularPrecioTotal();

    })
    .catch((e) => {
      console.log(e);
    });
}

//borrar productos del carrito
function removerCarrito(id) {
  carrito.splice(id, 1);
  visualizarCarrito();
  local();
  calcularPrecioTotal();
}

function calcularPrecioTotal() {
  precioTotal = carrito.reduce((acumulador, productos) => {
    return (acumulador += productos.precio);
  }, 0);
  document.getElementById('total').innerHTML = 'total: $' + precioTotal;
  saveLocal();
  console.log(precioTotal);
}

//boton finalizar compra

botonFinalizar.onclick = () => {

  if (carrito.length == 0) {
    Swal.fire({
      title: 'El carrito está vacío',
      text: 'Seleccione algun producto',
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    })
  } else {

    carrito.splice(0, carrito.length);
    console.log(carrito);
    document.getElementById("tablabody").innerHTML = "";
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total $: ";

    Swal.fire({
      title: 'Compra Exitosa',
      text: '¡Gracias por su compra, recibiras un mail con tu factura en los proximos minutos!',
      icon: 'info',
      showConfirmButton: false,
      timer: 4000
    })
    

    localStorage.removeItem('carrito');
  }
}


mostrarProductos();
visualizarCarrito();
calcularPrecioTotal();
