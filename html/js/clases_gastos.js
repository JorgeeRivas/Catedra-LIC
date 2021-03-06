
function iniciar() {

    //Codigo para imprimir los datos guardados en LocalStorage
    var guardado = localStorage.getItem('datosUsuario');

    var guardado = JSON.parse(guardado);

    var nombre = document.getElementsByClassName('imprNombre');

    cargarSelects(); //Funcion para llenar los selects con las cuentas bancarias disponibles

    for(var i = 0; i < 2; i++){
        nombre[i].innerHTML = guardado.nombre;
    }
    
    arreglo[0] = 1;
    
    document.getElementById('imprEmail').innerHTML = guardado.email;

    var submit = document.getElementById('submit');

    cargarGastosLocalStorage();

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('select').value;
            var monto = document.getElementById('Monto').value;
            var cargado = document.getElementById('cargado').value;

            var confirmar = true;

            for(var x = 0; x < 2; x++){

                console.log(x + " - " + arreglo[x]);
                if(arreglo[x] == 0){
                    
                    confirmar = false;
                    break;
                }
            }

            if(confirmar == true){
                var gastos = new Gastos(fecha, motivo, monto, cargado);

                gastos.agregarObjetoALocalStorage(gastos);
                cargarGastosLocalStorage();
    
                document.getElementById('fecha').value = "";
                document.getElementById('select').value = "";
                document.getElementById('Monto').value = "";
                document.getElementById('cargado').value = "";

            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Igrese todos sus datos :D',
                  })
            }




            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('select').value;
            var monto = document.getElementById('Monto').value;
            var cargado = document.getElementById('cargado').value;

            var gastos = new Gastos(fecha, motivo, monto, cargado);

            gastos.agregarObjetoALocalStorage(gastos);
            cargarGastosLocalStorage();

            document.getElementById('fecha').value = "";
            document.getElementById('select').value = "";
            document.getElementById('Monto').value = "";
            document.getElementById('cargado').value = "";

        });
    }


    function cargarSelects(){

        var sel = document.getElementById('cargado');

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

        var guardadoDatos = localStorage.getItem('datosPago');

        var guardadoDatos = JSON.parse(guardadoDatos);

        sel.value = guardadoDatos.pago;
            
    }

    function cargarGastosLocalStorage(){

        var gastos = [],
        dataInLocalStorage = localStorage.getItem('gastosUsuario'),
        tablaHTML = document.getElementById("tbody");

        if (dataInLocalStorage !== null) {
            gastos = JSON.parse(dataInLocalStorage);
        }

        tablaHTML.innerHTML = '';

        gastos.forEach(function (x, i) {
            
            var tr = document.createElement("tr"),
                tdName = document.createElement("td"),
                tdJob = document.createElement("td"),
                tdAge = document.createElement("td"),
                tdMonto = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            tdName.innerHTML = x.fecha;
            tdJob.innerHTML = x.motivo;
            tdAge.innerHTML = x.cargado;
            tdMonto.innerHTML = x.monto;

            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){
                eliminarDeLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(tdName);
            tr.appendChild(tdJob);
            tr.appendChild(tdAge);
            tr.appendChild(tdMonto);
            tr.appendChild(tdRemove);

            tablaHTML.appendChild(tr);
        });




    }

    function eliminarDeLocalStorage(index){

        var gastos = [];
        var dataInLocalStorage = localStorage.getItem('gastosUsuario');

        gastos = JSON.parse(dataInLocalStorage);

        gastos.splice(index, 1);

        localStorage.setItem('gastosUsuario', JSON.stringify(gastos));

        cargarGastosLocalStorage();        

    }


}



class Gastos {
    
    constructor(fecha, motivo, monto, cargado){
        this.fecha = fecha;
        this.motivo = motivo;
        this.monto = monto;
        this.cargado = cargado;
        
    }


    agregarObjetoALocalStorage(obj) {
        var gastos = [],
            dataInLocalStorage = localStorage.getItem('gastosUsuario');

        var cargadox = document.getElementById('cargado');

        var selected = cargadox.options[cargadox.selectedIndex].text;

        console.log(gastos);

        console.log(dataInLocalStorage);

        if (dataInLocalStorage !== null) {
            gastos = JSON.parse(dataInLocalStorage);
        }

        console.log(gastos);
        console.log(typeof(gastos));

        var totalGastos = Object.values(gastos);

        totalGastos.push(obj);

        localStorage.setItem('gastosUsuario', JSON.stringify(totalGastos));

        //alert(selected.substr(0, 6));

        if(obj.cargado == 'Efectivo'){
            this.decrementarEfectivo(obj);
        }else if(selected.substr(0, 6) == 'Cuenta'){
            
            this.decrementarCuenta(obj);
        }else{
            this.decrementarTarjeta(obj);
        }

    }


    decrementarEfectivo(obj){

        var efectivoActual = localStorage.getItem('efectivo'); 

        efectivoActual = parseFloat(efectivoActual) - parseFloat(obj.monto);

        localStorage.setItem('efectivo', efectivoActual);
        
    }

    decrementarCuenta(obj){

        var cuentas = [],
            dataInLocalStorage = localStorage.getItem('cuentasUsuario');

        if (dataInLocalStorage !== null) {
            cuentas = JSON.parse(dataInLocalStorage);
        }

        cuentas.forEach(function(x,i){

            if(x.numCuenta == obj.cargado){

                x.saldoCuenta = parseFloat(x.saldoCuenta) - parseFloat(obj.monto);

            }

        });

        var totalCuentas = Object.values(cuentas);

        localStorage.setItem('cuentasUsuario', JSON.stringify(totalCuentas));

    }


    decrementarTarjeta(obj){
        

        var tarjetas = [],
            dataInLocalStorage = localStorage.getItem('tarjetasUsuario');

        if (dataInLocalStorage !== null) {
            tarjetas = JSON.parse(dataInLocalStorage);
        }

        tarjetas.forEach(function(x,i){

            if(x.tarjeta == obj.cargado){

                x.saldoTarjeta = parseFloat(x.saldoTarjeta) - parseFloat(obj.monto);

            }

        });

        var totalTarjetas = Object.values(tarjetas);

        localStorage.setItem('tarjetasUsuario', JSON.stringify(totalTarjetas));

    }

    
    

    

}


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}
