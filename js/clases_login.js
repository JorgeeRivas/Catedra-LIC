function iniciar() {

    var submit = document.getElementById('submit');

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var nombre = document.getElementById('nombres').value;
            var apellido = document.getElementById('apellidos').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            var departamento = document.getElementById('departamento').value;
            var municipio = document.getElementById('municipio').value;
            var colonia = document.getElementById('colonia').value;
            var calle = document.getElementById('calle').value;

            var numerocasa = document.getElementById('Nocasa').value;
            var dui = document.getElementById('dui').value;
            var nit = document.getElementById('nit').value;
            var celular = document.getElementById('numero').value;

            var fecha = document.getElementById('fecha').value;

            const usuario = new Usuario(nombre, apellido, email, password, departamento, municipio, colonia, calle, numerocasa, dui, nit, celular, fecha);

            localStorage.setItem('datosUsuario', JSON.stringify(usuario));

            var confirmar = true;

            for(var x = 0; x < 12; x++){

                console.log(x + " - " + arreglo[x]);
                if(arreglo[x] == 0){
                    alert("Dato erroneo");
                    confirmar = false;
                    break;
                }
            }

            if(confirmar == true){
                const usuario = new Usuario(nombre, apellido, email, password, departamento, municipio, colonia, calle, numerocasa, dui, nit, celular, fecha);

                localStorage.setItem('datosUsuario', JSON.stringify(usuario));

                console.log(usuario);

                window.location.href = "html/primerospasos.html";
            }else{
                alert("Error");
            }

            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var nombre = document.getElementById('nombres').value;
            var apellido = document.getElementById('apellidos').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            var departamento = document.getElementById('departamento').value;
            var municipio = document.getElementById('municipio').value;
            var colonia = document.getElementById('colonia').value;
            var calle = document.getElementById('calle').value;

            var numerocasa = document.getElementById('Nocasa').value;
            var dui = document.getElementById('dui').value;
            var nit = document.getElementById('nit').value;
            var celular = document.getElementById('numero').value;

            var fecha = document.getElementById('fecha').value;

            const usuario = new Usuario(nombre, apellido, email, password, departamento, municipio, colonia, calle, numerocasa, dui, nit, celular, fecha);

            localStorage.setItem('datosUsuario', JSON.stringify(usuario));

            console.log(usuario);

            window.location.href = "html/primerospasos.html";

        });
    }



}



class Usuario {
    
    constructor(nombre, apellidos, email, password, departamento, municipio, colonia, calle, numerocasa, dui, nit, celular, fecha){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.departamento = departamento;
        this.municipio = municipio;
        this.colonia = colonia;
        this.calle = calle;
        this.numerocasa = numerocasa;
        this.dui = dui;
        this.nit = nit;
        this.celular = celular;
        this.fecha = fecha;
    }
    
    // Getter
    get cum() {
       return this.nombre;
    }



}


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}
