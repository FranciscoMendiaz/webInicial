//       C:\Users\Francisco\OneDrive\Documentos\webInicial\jsproto\prototipos.js

let person = 
{
  name: 'Francisco',
  apellido: 'Mendiaz',
  getCadenaProtos() {
        let obj = person;
    do{ 
        obj = Object.getPrototypeOf(obj);
        console.log(JSON.stringify(obj));
    }while (obj !== null);
  },
} ;



person.getCadenaProtos(); 
console.log(person);








/* const fsPromises = require ('fs/promises');




async function pepe()
{
  console.log('inicio del texto');
  await imprimirTexto();
  console.log('fin del texto');
}


async function imprimirTexto ()
{
    const data = await fsPromises.readFile('archivoparaJS.txt', 'utf8' );   //defino lo que va antes del readFile en base a como defini la promesa con el require; aqui tambien
    console.log(data);                                                      // necesito especificar el utf8 para convertir a texto

}


pepe(); */
