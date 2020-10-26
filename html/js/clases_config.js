function iniciar() {

    var submit = document.getElementById('submit');

    cargarSelects(); //Funcion para llenar los selects con las cuentas bancarias disponibles

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var pago = document.getElementById('selectpago').value;
            var ingreso = document.getElementById('ingreso').value;
            var gasto = document.getElementById('gastos').value;

            const Pago = new Config(pago, ingreso, gasto);

            localStorage.setItem('datosPago', JSON.stringify(Pago));

            var confirmar = true;

            for(var x = 0; x < 2; x++){

                console.log(x + " - " + arreglo[x]);
                if(arreglo[x] == 0){
                    
                    confirmar = false;
                    break;
                }
            }

            if(confirmar == true){
                const Pago = new Config(pago, ingreso, gasto);

                localStorage.setItem('datosPago', JSON.stringify(Pago));


                Swal.fire({
                    icon: 'success',
                    title: 'Enhorabuena',
                    text: 'Sus datos se han guardado!',
                  })

                document.getElementById('selectpago').value = "";
                document.getElementById('ingreso').value = "";
                document.getElementById('gastos').value = "";

                

                console.log(Pago);

                
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Necesitas llenar todos los datos del formulario :D',
                    
                  })
            }

            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var pago = document.getElementById('selectpago').value;
            var ingreso = document.getElementById('ingreso').value;
            var gasto = document.getElementById('gastos').value;

            const Pago = new Config(pago, ingreso, gasto);


            localStorage.setItem('datosPago', JSON.stringify(Pago));

            console.log(Pago);


        });
    }

    function cargarSelects(){

        var sel = document.getElementById('selectpago');

        var bancos = [],
        dataInLocalStorage = localStorage.getItem('cuentasUsuario');

        if (dataInLocalStorage !== null) {
            bancos = JSON.parse(dataInLocalStorage);
        }

        bancos.forEach(function(x,i){

            var opt = document.createElement('option');
            opt.value = x.numCuenta;
            opt.innerHTML = "Cuenta #" + x.numCuenta;
            sel.appendChild(opt);

        });


        var tarjetas = [],
        dataInLocalStorage = localStorage.getItem('tarjetasUsuario');

        if (dataInLocalStorage !== null) {
            tarjetas = JSON.parse(dataInLocalStorage);
        }

        tarjetas.forEach(function(x,i){

            var opt = document.createElement('option');
            opt.value = x.tarjeta;
            opt.innerHTML = "Tarjeta #" + x.tarjeta;
            sel.appendChild(opt);

        });
        
        
    }



}



class Config {
    
    constructor(pago, ingreso, gasto, porcentaje){
        this.pago = pago;
        this.ingreso = ingreso;
        this.gasto = gasto;
    }
    

}


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}
