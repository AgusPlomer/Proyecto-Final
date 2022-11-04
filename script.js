const productosOferta=[
    {
      id:1,
      articulo:"Buzo oversize Nike",
      foto:"/img-ofertas/buzo-nike-oversize-crema-removebg-preview.png",
      precio: 17000
  
    },
    {
      id:2,
      articulo:"Gorra nike blanca",
      foto:"/img-ofertas/gorra-nike-blanca-removebg-preview.png",
      precio: 4200
  
    },
    {
      id:3,
      articulo:"Jordan low 1",
      foto:"/img-ofertas/jordan-low-1-removebg-preview.png",
      precio: 45000
  
    },
    {
      id:4,
      articulo:"Jordan air retro 4 negras",
      foto:"/img-ofertas/jordan-retro-4-removebg-preview.png",
      precio: 53000
  
    },
    {
      id:5,
      articulo:"Jean levis hombre",
      foto:"/img-ofertas/levis-hombre-removebg-preview.png",
      precio: 18000
  
    },
    {
      id:6,
      articulo:"Medias 3/4 nike",
      foto:"/img-ofertas/medias-nike-variadas-removebg-preview.png",
      precio: 1300
  
    },
    {
      id:7,
      articulo:"Remera oversize nike",
      foto:"/img-ofertas/remeron-oversize-oferta-modificada.png",
      precio: 3700
  
    },
    {
      id:8,
      articulo:"Riñonera negra simple",
      foto:"/img-ofertas/riñonera-simple-modificada.png",
      precio: 2500
  
    },
  ]

let totalCarrito;
let contenedor = document.getElementById("prods");
let botonFinalizar = document.getElementById("finalizar");
let tabla = document.getElementById ("tabla");

//carrito compras:

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//Renderizacion de Productos:

function renderizarProds(){
    for(const producto of productosOferta){
        contenedor.innerHTML += `
            <div class="card col-md-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.articulo}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                    
                </div>
            </div>
        `;
    }
    //Evento boton comprar 
    productosOferta.forEach(producto => {        
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


botonFinalizar.onclick = () => {
    carrito = [];
    document.getElementById("tablabody").innerHTML="";
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total $: ";


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
    
}


  
  //agrego una funcion para actualizar el carrito:

  function actualizarCarrito(){
    console.table(carrito);
        let aux = '';
        carrito.forEach((producto) => {
            aux = aux + 
            `
            <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button></td>
        </tr>
            `;
        })
        tablaBody.innerHTML = aux;
        
        totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: "+totalCarrito;
    
        localStorage.setItem("carrito", JSON.stringify(carrito));

        }
    
    
  
//Agrego una función que elimine el producto del carrito:

const eliminarDelCarrito = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
  };