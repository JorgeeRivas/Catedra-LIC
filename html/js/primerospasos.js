
function iniciar() {

    //Codigo para imprimir los datos guardados en LocalStorage
    var guardado = localStorage.getItem('datosUsuario');

    var guardado = JSON.parse(guardado);

    var nombre = document.getElementsByClassName('imprNombre');

    for(var i = 0; i < 4; i++){
        nombre[i].innerHTML = guardado.nombre;
    }

    document.getElementById("imprEmail").innerHTML = guardado.email;

    //Guardar los datos ingresados como primeros pasos
    var submit = document.getElementById('submit');

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var dinero = document.getElementById('dinero').value;

            var cuentaa = document.getElementById('banco').value;
            var numCuenta = document.getElementById('NumCuenta').value;
            var saldoCuenta = document.getElementById('SaldoActual').value;

            var confirmar = true;

            for(var x = 0; x < 6; x++){

                console.log(x + " - " + arreglo[x]);
                if(arreglo[x] == 0){
                    
                    confirmar = false;
                    break;
                }
            }

            if(confirmar == true){
                const cuenta = new Cuenta(cuentaa, numCuenta, saldoCuenta);

                localStorage.setItem('efectivo', dinero);

                agregarObjetoALocalStorage(cuenta);

                console.log(cuenta);

                window.location.href = "estadistica.html";
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Necesitas llenar todos los datos de los primeros pasos :D',
                  })
            }

            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var dinero = document.getElementById('dinero').value;

            var cuentaa = document.getElementById('banco').value;
            var numCuenta = document.getElementById('NumCuenta').value;
            var saldoCuenta = document.getElementById('SaldoActual').value;

            const cuenta = new Cuenta(cuentaa, numCuenta, saldoCuenta);

            localStorage.setItem('efectivo', dinero);

            agregarObjetoALocalStorage(cuenta);

            console.log(cuenta);

            window.location.href = "estadistica.html";

        });
    }

    function agregarObjetoALocalStorage(obj) {
        var cuentas = [],
            dataInLocalStorage = localStorage.getItem('cuentasUsuario');

        //console.log(cuentas);

        //console.log(dataInLocalStorage);

        if (dataInLocalStorage !== null) {
            cuentas = JSON.parse(dataInLocalStorage);
        }

        //console.log(cuentas);
        //console.log(typeof(cuentas));

        var totalCuentas = Object.values(cuentas);

        totalCuentas.push(obj);

        localStorage.setItem('cuentasUsuario', JSON.stringify(totalCuentas));

    }



}

class Cuenta {
    
    constructor(cuenta, numCuenta, saldoCuenta){

        this.cuenta = cuenta;
        this.numCuenta = numCuenta;
        this.saldoCuenta = saldoCuenta;
    }

}


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}
