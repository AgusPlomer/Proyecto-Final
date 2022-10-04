alert(
  "Bienvenido, para acceder a nuestra pagina web le solicitaremos un breve registro de su nombre de usuario y contraseña"
);

let nombre = prompt("Ingrese su nombre de usuario");
console.log("el nombre de usuario que usted ha ingresado es:" + nombre);

let contrasenia = prompt("Ingrese la contraseña que desea colocar a su cuenta");
console.log("la contraseña que usted ha ingresado es:" + contrasenia);

let confirmacion = prompt(
  "¿Desea confirmar que los datos que ha ingresado son correctos? En caso de que si, presione la letra (S) para continuar, y en caso de querer volver a cargarlos presione la tecla (N)"
);
if (confirmacion == "S") {
  alert("Ya casi puedes navegar por Urban Style, solo queda un paso");
  let productos = prompt(
    "por ultimo, le solicitaremos que escriba los productos que sean de su agrado o que este buscando para que aparezcan de manera mas rapida como recomendacion. Presione (S) para salir"
  );
  while (productos != "S") {
    console.log(productos);
    productos = prompt("ingresa otro producto, o presiona (S) para salir");
    (productos == "S");
      alert(
        "muchas gracias por visitarnos, ante cualquier consulta puedes comunicarte con nosotros mediante el apartado de contacto!"
      );
} 
} else confirmacion == "N";
{
  console.log(
    "Deberas recargar tus datos, presiona F5 para volver a intentarlo."
  );
}


