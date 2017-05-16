function validateForm(){
  //Creando variables
  var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
  var tipoBici = document.querySelector("select").value;

  //Validando nombre campo vacío y primera Mayúscula
     if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
         var span = document.createElement("span");
         var referencia = document.getElementById("name");
         var padre = referencia.parentNode;
         padre.insertBefore(span, referencia);
         var texto = document.createTextNode("Debe ingresar su nombre");
         span.appendChild(texto);
         return span;
     } else {
         var mayuscula = /^[a-zA-Z]*$/;
         if (!nombre.search(mayuscula)) {
             console.log("letra")
             mayuscula = /[a-z]/g;
         }
         if (!nombre.search(mayuscula)) {
             var span = document.createElement("span");
             var referencia = document.getElementById("name");
             var padre = referencia.parentNode;
             padre.insertBefore(span, referencia);
             var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
             span.appendChild(texto);
             return span;
         }
     }

     //Validando apellido campo vacío y primera Mayúscula
     if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
         var span = document.createElement("span");
         var referencia = document.getElementById("lastname");
         var padre = referencia.parentNode;
         padre.insertBefore(span, referencia);
         var texto = document.createTextNode("Debe ingresar su apellido");
         span.appendChild(texto);
         return span;
     } else {
         var apellidoMayuscula = /^[a-zA-Z]*$/;
         if (!apellido.search(apellidoMayuscula)) {
             console.log("letra")
             apellidoMayuscula = /[a-z]/g;
         }
         if (!apellido.search(apellidoMayuscula)) {
             var span = document.createElement("span");
             var referencia = document.getElementById("lastname");
             var padre = referencia.parentNode;
             padre.insertBefore(span, referencia);
             var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
             span.appendChild(texto);
             return span;
         }
     }

     //Valindando mail
       if (!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
           var span = document.createElement("span");
           var referencia = document.getElementById("input-email");
           var padre = referencia.parentNode;
           padre.insertBefore(span, referencia);
           var texto = document.createTextNode("Debe ingresar un mail válido");
           span.appendChild(texto);
           return span;


}
