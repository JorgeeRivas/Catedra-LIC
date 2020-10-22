
function iniciar() {

    //Codigo para imprimir los datos guardados en LocalStorage
    var guardado = localStorage.getItem('datosUsuario');

    var guardado = JSON.parse(guardado);

    var nombre = document.getElementsByClassName('imprNombre');

    cargarSelects(); //Funcion para llenar los selects con las cuentas bancarias disponibles

    for(var i = 0; i < 2; i++){
        nombre[i].innerHTML = guardado.nombre;
    }
    
    document.getElementById('imprEmailxd').innerHTML = guardado.email;

    var submit = document.getElementById('submit');

    cargarIngresosLocalStorage();

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('motivo').value;
            var monto = document.getElementById('monto').value;
            var cuenta = document.getElementById('select').value;

            var ingresos = new Ingresos(fecha, motivo, monto, cuenta);

            ingresos.agregarObjetoALocalStorage(ingresos);

            cargarIngresosLocalStorage();

            document.getElementById('fecha').value = "";
            document.getElementById('motivo').value = "";
            document.getElementById('monto').value = "";
            document.getElementById('select').value = "";

            console.log(ingresos);
            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('motivo').value;
            var monto = document.getElementById('monto').value;
            var cuenta = document.getElementById('select').value;

            var ingresos = new Ingresos(fecha, motivo, monto, cuenta);

            ingresos.agregarObjetoALocalStorage(ingresos);

            cargarIngresosLocalStorage();

            console.log(ingresos);

        });
    }

  
    function cargarSelects(){

        var sel = document.getElementById('select');

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

    function cargarIngresosLocalStorage(){

        var ingresos = [],
        dataInLocalStorage = localStorage.getItem('ingresosUsuario'),
        tablaHTML = document.getElementById("tbody");

        if (dataInLocalStorage !== null) {
            ingresos = JSON.parse(dataInLocalStorage);
        }

        tablaHTML.innerHTML = '';

        ingresos.forEach(function (x, i) {
            
            var tr = document.createElement("tr"),
                tdName = document.createElement("td"),
                tdJob = document.createElement("td"),
                tdAge = document.createElement("td"),
                tdMonto = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            tdName.innerHTML = x.fecha;
            tdJob.innerHTML = x.motivo;
            tdAge.innerHTML = x.cuenta;
            tdMonto.innerHTML = x.monto;

            btnRemove.textContent = 'Eliminar';
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

        var ingresos = [];
        var dataInLocalStorage = localStorage.getItem('ingresosUsuario');

        ingresos = JSON.parse(dataInLocalStorage);

        ingresos.splice(index, 1);

        localStorage.setItem('ingresosUsuario', JSON.stringify(ingresos));

        cargarIngresosLocalStorage();
        
    }


}


class Ingresos {
    constructor(fecha, motivo, monto, cuenta){
        this.fecha = fecha;
        this.motivo = motivo;
        this.monto = monto;
        this.cuenta = cuenta;
    }

    agregarObjetoALocalStorage(obj) {
        var ingresos = [],
            dataInLocalStorage = localStorage.getItem('ingresosUsuario');

        var cargadox = document.getElementById('select');

        var selected = cargadox.options[cargadox.selectedIndex].text;

        console.log(ingresos);

        console.log(dataInLocalStorage);

        if (dataInLocalStorage !== null) {
            ingresos = JSON.parse(dataInLocalStorage);
        }

        console.log(ingresos);
        console.log(typeof(ingresos));

        var totalIngresos = Object.values(ingresos);

        totalIngresos.push(obj);

        localStorage.setItem('ingresosUsuario', JSON.stringify(totalIngresos));

        if(obj.cuenta == 'Efectivo'){
            this.incrementarEfectivo(obj);
        }else if(selected.substr(0, 6) == 'Cuenta'){
            this.incrementarCuenta(obj);
        }else{
            
            this.incrementarTarjeta(obj);
        }
    }

    incrementarEfectivo(obj){

        var efectivoActual = localStorage.getItem('efectivo'); 

        efectivoActual = parseFloat(efectivoActual) + parseFloat(obj.monto);

        localStorage.setItem('efectivo', efectivoActual);
        
    }

    incrementarCuenta(obj){



        var cuentas = [],
            dataInLocalStorage = localStorage.getItem('cuentasUsuario');

        if (dataInLocalStorage !== null) {
            cuentas = JSON.parse(dataInLocalStorage);
        }

        cuentas.forEach(function(x,i){

            if(x.numCuenta == obj.cuenta){

                x.saldoCuenta = parseFloat(x.saldoCuenta) + parseFloat(obj.monto);

            }

        });

        var totalCuentas = Object.values(cuentas);

        localStorage.setItem('cuentasUsuario', JSON.stringify(totalCuentas));

    }


    incrementarTarjeta(obj){
        

        var tarjetas = [],
            dataInLocalStorage = localStorage.getItem('tarjetasUsuario');

        if (dataInLocalStorage !== null) {
            tarjetas = JSON.parse(dataInLocalStorage);
        }

        tarjetas.forEach(function(x,i){

            if(x.tarjeta == obj.cuenta){

                x.saldoTarjeta = parseFloat(x.saldoTarjeta) + parseFloat(obj.monto);

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
