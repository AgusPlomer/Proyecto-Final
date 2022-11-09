
let totalCarrito;
let contenedor = document.getElementById("prods");
let botonFinalizar = document.getElementById("finalizar");
let tabla = document.getElementById ("tablabody");

//carrito compras:

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//Renderizacion de Productos:

function renderizarProds(){
    for(const producto of productos){
        contenedor.innerHTML += `
        <div class="row ubicacionCards">
            <div class="card col-xl-3 col-md-6 col-sm-12 row ubicacionCards cardRow" style="width: 15rem">
                <img src=${producto.foto} class="card-img-top imgOfertas" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                    
                </div>
            </div>
        `;
    }
    //Evento boton comprar 
    productos.forEach(producto => {        
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })
}

renderizarProds();


//Agregar al carro:

function agregarAlCarrito(productoComprado){
    carrito.push(productoComprado);
    console.table(carrito);

    
    //sweetalert
    Swal.fire({
        title: productoComprado.nombre,
        text: 'Agregaste este producto al carrito.',
        imageUrl: productoComprado.foto,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: productoComprado.nombre,
        backdrop: `rgba(0,0,123,0.4)`,
        showConfirmButton: false,
        timer: 1500
      })
      
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.nombre}</td>
            <td>${productoComprado.precio}</td>
            <td><button onClick = "eliminarDelCarrito(${productoComprado.id})" class="btn btn-primary"> Eliminar del Carrito </button></td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;

    localStorage.setItem("carrito", JSON.stringify(carrito));
}


botonFinalizar.addEventListener('click', function(){
    carrito = [];
    
    document.getElementById("tablabody").innerHTML="";
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total $: ";
});
  


    //Toastify

Toastify({
    text: "Pronto recibirás un mail de confirmacion de tu compra",
    duration: 3000,
    gravity: 'bottom',
    position: 'left',
    style: {
        
        background: 'linear-gradient(to left, #283747, #D6DBDF)'
    }
}).showToast();



    
    localStorage.removeItem("carrito");
    



  
  //agrego una funcion para actualizar el carrito:

//   function actualizarCarrito(){
//     console.table(carrito);
//         let aux = '';
//         carrito.forEach((producto) => {
//             aux = aux + 
//             `
//             <tr>
//             <td>${producto.id}</td>
//             <td>${producto.articulo}</td>
//             <td>${producto.precio}</td>
//             <td><button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button></td>
//         </tr>
//             `;
//         })
//         tablaBody.innerHTML = aux;
        
//         // totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
//         let infoTotal = document.getElementById("total");
//         infoTotal.innerText="Total a pagar $: "+totalCarrito;
    
//         localStorage.setItem("carrito", JSON.stringify(carrito));

//         }
    
    
  
//Agrego una función que elimine el producto del carrito:

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;

    localStorage.setItem("carrito", JSON.stringify(carrito));
  };