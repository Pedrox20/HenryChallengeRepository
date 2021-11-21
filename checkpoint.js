
// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.

function menorMayor(numeros) {
  // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
  // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
  // 'numeros' en la posición 1.
  // Ej:
  // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
  // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
  // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]

  // Tu código aca:
var numeroMenorYMayor= [numeros[0],numeros[1]];

for(var i = 0 ; i < numeros.length; i++){
  if(numeros[i] <= numeroMenorYMayor[0]){
    numeroMenorYMayor[0]= numeros[i];
  }
  if(numeros[i] >= numeroMenorYMayor[1]){
    numeroMenorYMayor[1]= numeros[i];
  }
}
return numeroMenorYMayor;
}

function cuantosOnline(usuarios) {
  // La funcion llamada "cuantosOnline" recibe como argumento un objeto 'usuarios', cada property de ese objeto es un objeto
  // cada usuario tiene una property 'online' que es un booleano.
  // deberia devolver la cantidad de usuarios con la property online igual a true.
  // Por ej:
  // let usuarios = {      var usuarios = objeto{},
  //     toni: {           objeto{} = objeto{},
  //         edad: 33,     usuario => nombreDePropiedad = online: true,
  //         online: true   
  //     },                      return usuariosOnline.length;
  //     emi:{                    puedes usar el bucle for in.
  //         edad: 25,
  //         online: true
  //     },
  //     fran: {
  //         edad: 25,
  //         online: false
  //     },
  //     agus: {
  //         edad: 24,
  //         online: false
  //     }
  // }; 
  // cuantosOnline(usuarios) devuelve 2
  // Tip: Podes usar el metodo for...in

  // Tu código aca:
  var usuariosOnline=[];
for( var i = 0; i < usuarios.length; i++){
  for(var online in usuarios){
    if( usuarios[i] === online){
      usuariosOnline[0] = usuarios[online][i];
    }
}
}
return usuariosOnline;
}
function divisores(numero) {
  // La funcion llamada 'divisores' recibe como argumento un numero (entero) 
  // y debe devolver un array con los divisores exactos de 'numero'.
  // Si el numero no tiene divisores ( exeptuando el 1 y el mismo ) deberia devolver el string 'Es primo'
  // Nota: El array no debe contener el 1 y el mismo numero.
  // Por ej:
  // divisores(15) devuelve [3, 5]
  // divisores(11) devuelve 'Es primo'
  // Tu código aca:
  for( var i = 0; i < numero.length; i++){
    if(numero[i]%2){
      return numero /2;
    }
    else if(numero[i]%1 && numero[i]%numero[i]){
      return "Es primo";
    }
  }
}

function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // Tu código aca:
var puntosEnComun= [];
for(var i = 0; i < persona1.length; i ++){

}
for(var a = 0; a < persona2.length; i++){

}
if(persona1[i] && persona2[a] === string){
  puntosEnComun.push(persona1[i].length && persona2[a].length);
}
return puntosEnComun;
  }

function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'

  // Tu código aca:
  
}


function crearClaseEmprendedor() {
  class Emprendedor {
      constructor(nombre, apellido, libros, mascotas) {
          // El constructor de la clase Emprendedor recibe nombre (string), apellido (string), libros (array de objetos), mascotas (array de strings)
          // Inicializar las propiedades del emprendedor con los valores recibidos como argumento

          // Tu código aca:
       this.nombre= nombre;
       this.apellido= apellido;
       libros= [];
       mascotas= [];
      }
    

      addMascota(mascota) {
        // este método debe agregar una mascota (mascota) al arreglo de mascotas del emprendedor.
        // no debe retornar nada.
        // Tu código aca:
      var michi = new mascota(michi);
      }

      getMascotas() {
          // El método 'getMascotas' debe retornar la cantidad de mascotas que tiene el emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estas mascotas: ['perro', 'gato']
          // emprendedor.getMascotas() debería devolver 2

          // Tu código aca:
       Emprendedor.prototype.getMascotas= function(){
       return mascotas.length;
      }
      }

      addBook(book, autor) {
          // El método 'addBook' recibe un string 'book' y un string 'autor' y debe agregar un objeto:
          // { nombre: book, autor: autor} al arreglo de libros del emprendedor.
          // No debe retornar nada.
          // Tu código aca:
        book = new libros(nombre,autor);
      }

      getBooks() {
          // El método 'getBooks' debe retornar un arreglo con sólo los nombres del arreglo de libros del emprendedor.
          // Ej:
          // Suponiendo que el emprendedor tiene estos libros: [{nombre: 'El señor de las moscas',autor: 'William Golding'}, {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
          // emprendedor.getBooks() debería devolver ['El señor de las moscas', 'Fundacion']

          // Tu código aca:
        Emprendedor.prototype.getBooks= function(){
          return libros[nombre];
      }
    }
      getFullName(){
          // El metodo getFullName debe retornar un string con el nombre y apellido del emprendedor.
          // ej:
          // Suponiendo que el emprendedor tiene: nombre: 'Elon' y apellido: 'Musk'
          // emprendedor.getFullName() deberia devolver 'Elon Musk'

          // Tu código aca:
          Emprendedor.prototype.getFullName= function(){
            return this.nombre + " " + this.apellido;
          }
            }
      
  }
  return Emprendedor;
}     
      
/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:

}

module.exports = {
  menorMayor,
  divisores,
  cuantosOnline,
  actividadesEnComun,
  palabraMasLarga,
  crearClaseEmprendedor,
  repetirCaracteres
}