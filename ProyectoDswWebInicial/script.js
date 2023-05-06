
window.addEventListener('load',() =>
{

  const submitButton = document.querySelector('#submit');
  submitButton?.addEventListener('click',(event) =>
    { 
      event.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;

      if ((name !== '')&&(email !== '')&&(message !== '')) {alert('Formulario enviado exitosamente');}
      else {document.querySelector('#error').classList.add('submit-error'); }
    
    } );

    document.querySelector('#get-user').addEventListener('click',getUser);

});


function getUser()
{
  fetch('https://randomuser.me/api/')       /* fetch llama a la API. Espera como parámetro su URL */
    .then((data) => {                       /* then es una promesa. Aquí es la promesa de obtener los datos de la API */
      return data.json();
    })
    .then((response) => {                  /* then es una promesa. Aquí es la promesa de obtener obtener una respuesta, es decir los valores de los DATOS obtenidos  */
      const userData = response.results[0].name;  /* le asigno a la constante userData el valor de la respuesta. Results es un campo de la respuesta que es un arreglo. En la posición 0 de ese arreglo se encuentra el campo nombre  */
      document.querySelector('#user-name').innerHTML = `${userData.title} ${userData.first} ${userData.last}`; /* interpola los strings de result. Selecciona el id = user-name en el html y lo muestra */



    })





}

