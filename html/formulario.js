function guardardatos(){
let nombre=document.getElementById('nombre');
let apellido=document.getElementById('apellido');
let correo=document.getElementById('correo');
 let button=document.getElementById('boton');

let datos=JSON.parse(localStorage.getItem('datosform'))||[];

if(datos== null){
localStorage.setItem('datosform','[]');
datos=[];
};

let auxregistro={
    Nombre:nombre.value,
    Apellido:apellido.value,
    Correo:correo.value
}

datos.push(auxregistro);

localStorage.setItem('datosform',JSON.stringify(datos));

console.log('fdsf')
 button.addEventListener('click',guardardatos);

};

 let button=document.getElementById('boton');
 button.addEventListener('click',guardardatos);