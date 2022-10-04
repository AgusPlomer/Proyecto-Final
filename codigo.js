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

while(prendas != "S"){
   switch (prendas) {
     case "PANTALONES":
      alert("si disponemos de pantalones");
      break;
      
     case "GORRAS":
        alert("si disponemos de gorras");
        break;
        
     case "GORROS":
      alert("si disponemos de gorros");
      break;
    
     case "RIÑONERAS":
      alert("si disponemos de riñoneras");
      break;
      
     case "REMERAS":
      alert("si disponemos de remeras");
      break;
      
     case "MEDIAS":
      alert("si disponemos de medias");
      break; 
    
     case "ZAPATILLAS":
        alert("si disponemos de zapatillas");
        break;

     default:
      alert("por el momento no disponemos stock de lo que usted ha solicitado, pero pronto ingresara")
       break;

  }
  prendas = prompt(
    "ingrese el tipo de indumentaria que usted desea comprar, para confirmarle si disponemos de stock o no, los filtros correctos son PANTALONES, ZAPATILLAS, GORRAS, GORROS, REMERAS, RIÑONERAS y MEDIAS. Si desea salir presione (S)"
  );
}
 

 
