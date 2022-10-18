alert(
  "Bienvenido, para acceder a nuestra pagina web le solicitaremos un breve registro de su nombre de usuario y contraseña"
);

let nombre = prompt("Ingrese su nombre de usuario");
console.log("el nombre de usuario que usted ha ingresado es:" + nombre);

let contrasenia = prompt("Ingrese la contraseña que desea colocar a su cuenta");
console.log("la contraseña que usted ha ingresado es:" + contrasenia);

let prendas = prompt(
  "ingrese el tipo de indumentaria que usted desea comprar, para confirmarle si disponemos de stock o no, los filtros correctos son PANTALONES, ZAPATILLAS, GORRAS, GORROS, REMERAS, RIÑONERAS y MEDIAS. Si desea salir presione (S)"
);

class Producto {
  constructor(prenda,marca,precio){
    this.prenda = prenda;
    this.marca = marca;
    this.precio = parseFloat (precio);
  }
  sumarIva(){
    this.precio = this.precio * 1.21;
    return this.precio * 1.21
  }
  
}

while(prendas != "S"){
   switch (prendas) {
     case "PANTALONES":
      alert("si disponemos de pantalones")
      const prenda1 = new Producto("Pantalones", "Levis", "5200");
      console.log ("el valor total de los " +prenda1.prenda+ " marca "+prenda1.marca +"(incluyendo iva) es de: " + prenda1.sumarIva());
      break;
      
     case "GORRAS":
        alert("si disponemos de gorras");
        const prenda2 = new Producto("Gorras", "Nike", "2000");
        console.log ("el valor total de las " +prenda2.prenda+ " marca "+prenda2.marca+ "(incluyendo iva) es de: " + prenda2.sumarIva());
        break;
        
     case "GORROS":
      alert("si disponemos de gorros");
      const prenda3 = new Producto("Gorros", "Nike", "1500");
      console.log ("el valor total de los " +prenda3.prenda+ " marca "+prenda3.marca+ "(incluyendo iva) es de: " + prenda3.sumarIva());
      break;
    
     case "RIÑONERAS":
      alert("si disponemos de riñoneras");
      const prenda4 = new Producto("Riñoneras", "Levis", "2300");
      console.log ("el valor total de las " +prenda4.prenda+ " marca "+ prenda4.marca + "(incluyendo iva) es de: " + prenda4.sumarIva());
      break;
      
     case "REMERAS":
      alert("si disponemos de remeras");
      const prenda5 = new Producto("Remeras", "Nike", "2500");
      console.log ("el valor total de las " +prenda5.prenda+ " marca "+ prenda5.marca + "(incluyendo iva) es de: " + prenda5.sumarIva());
      break;
      
     case "MEDIAS":
      alert("si disponemos de medias");
      const prenda6 = new Producto("Medias", "Nike", "900");
      console.log ("el valor total de las " +prenda6.prenda+ " marca " + prenda6.marca+ "(incluyendo iva) es de: " + prenda6.sumarIva());
      break; 
    
     case "ZAPATILLAS":
        alert("si disponemos de zapatillas");
        const prenda7 = new Producto("Zapatillas", "Jordan", "30000");
        console.log ("el valor total de las " +prenda7.prenda+ " marca "+ prenda7.marca+ "(incluyendo iva) es de: " + prenda7.sumarIva());
        break;

     default:
      alert("por el momento no disponemos stock de lo que usted ha solicitado, pero pronto ingresara")
       break;

  }
  prendas = prompt(
    "ingrese el tipo de indumentaria que usted desea comprar, para confirmarle si disponemos de stock o no, los filtros correctos son PANTALONES, ZAPATILLAS, GORRAS, GORROS, REMERAS, RIÑONERAS y MEDIAS. Si desea salir presione (S)"
  );

}

function calcCuota (cantCuota){
  let interCuota = 10;
  console.log("si desea pagar en " +cantCuota+ "cuota/s, el valor de cada una tendra un recargo de " + interCuota + "%.")
}
 
calcCuota(parseInt(prompt("Ingresa la cantidad de cuotas en las que desea pagar")));

//top de usuarios mas longevos registrados

const usuariosLongevos = ["Tomas Gutierrez", "Plomer Agustín", "Matias Maldonado", "Sergio Aguilera", "Samuel Baez", "Santino Guzman"]
usuariosLongevos.push ("Melina Pinzani");
usuariosLongevos.push ("Sofia Acosta");
usuariosLongevos.unshift ("Ana Santa Cruz");

let cantidadUsuarios = usuariosLongevos.length;
console.log("La cantidad de usuarios que superan un año registrados en nuestra plataforma son: "+cantidadUsuarios)
console.log("estos son nuestros usuarios mas longevos, gracias por formar parte de nuestra familia:");

for(let i=0; i<usuariosLongevos.length; i++){
  console.log(usuariosLongevos[i]);
}




/*
const prenda1 = new Producto("Remeras", "Nike", "2500");
const prenda2 = new Producto("Pantalones", "Levis", "5200");
const prenda3 = new Producto("Zapatillas", "Jordan", "30000");
const prenda4 = new Producto("Gorras", "Nike", "2000");
const prenda5 = new Producto("Gorros", "Nike", "1500");
const prenda6 = new Producto("Riñoneras", "Levis", "2300");
const prenda7 = new Producto("Medias", "Nike", "900");


console.log ("el valor total de la " +prenda1.prenda+ "(incluyendo iva) es de: " + prenda1.sumarIva());
console.log ("el valor total de la " +prenda2.prenda+ "(incluyendo iva) es de: " + prenda2.sumarIva());
console.log ("el valor total de la " +prenda3.prenda+ "(incluyendo iva) es de: " + prenda3.sumarIva());
console.log ("el valor total de la " +prenda4.prenda+ "(incluyendo iva) es de: " + prenda4.sumarIva());
console.log ("el valor total de la " +prenda5.prenda+ "(incluyendo iva) es de: " + prenda5.sumarIva());
console.log ("el valor total de la " +prenda6.prenda+ "(incluyendo iva) es de: " + prenda6.sumarIva());
console.log ("el valor total de la " +prenda7.prenda+ "(incluyendo iva) es de: " + prenda7.sumarIva());
console.log ("el valor total de la " +prenda8.prenda+ "(incluyendo iva) es de: " + prenda8.sumarIva());
*/
