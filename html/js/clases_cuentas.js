
function iniciar() {

    //Codigo para imprimir los datos guardados en LocalStorage
    var guardado = localStorage.getItem('datosUsuario');

    var guardado = JSON.parse(guardado);

    var nombre = document.getElementsByClassName('imprNombre');

    for(var i = 0; i < 2; i++){
        nombre[i].innerHTML = guardado.nombre;
    }

    cargarCuentasLocalStorage();
    cargarTarjetasLocalStorage();
    
    document.getElementById('imprEmail').innerHTML = guardado.email;
    
    document.getElementById('efectivoActual').value = localStorage.getItem('efectivo');

    var submitCuentas = document.getElementById('submitCuentas');
    var submitTarjeta = document.getElementById('submitTarjeta');
        
        if(submitCuentas.addEventListener){
            submitCuentas.addEventListener("click", function(e){
                
                e.preventDefault();
    
                var cuenta = document.getElementById('cuenta').value;
                var numCuenta = document.getElementById('numCuenta').value;
                var saldoCuenta = document.getElementById('saldoCuenta').value;
    
                var cuentas = new NuevaCuenta(cuenta, numCuenta, saldoCuenta);

                console.log(cuentas);
    
                agregarObjetoALocalStorage(cuentas);
    
                document.getElementById('cuenta').value = "";
                document.getElementById('numCuenta').value = "";
                document.getElementById('saldoCuenta').value = "";
    
                console.log(cuentas);
                
            }, false);
        } else if(submit.attachEvent){
            submitCuentas.attachEvent("click", function(e){
                e.preventDefault();
    
                var cuenta = document.getElementById('motivo').value;
                var numCuenta = document.getElementById('monto').value;
                var saldoCuenta = document.getElementById('select').value;
    
                var cuentas = new NuevaCuenta(cuenta, numCuenta, saldoCuenta);
    
                agregarObjetoALocalStorage(cuentas);
    
                console.log(cuentas);
    
            });
        }


        if(submitTarjeta.addEventListener){
            submitTarjeta.addEventListener("click", function(e){
                
                e.preventDefault();
    
                var banco = document.getElementById('banco').value;
                var tarjeta = document.getElementById('tarjeta').value;
                var saldoTarjeta = document.getElementById('saldoTarjeta').value;
                var interes = document.getElementById('interes').value;
                var fecha = document.getElementById('fecha').value;
    
                var tarjetas = new NuevaTarjeta(banco, tarjeta, saldoTarjeta, interes, fecha);

    
                agregarObjetoTarjetaALocalStorage(tarjetas);
    
                document.getElementById('banco').value = "";
                document.getElementById('tarjeta').value = "";
                document.getElementById('saldoTarjeta').value = "";
                document.getElementById('interes').value = "";
                document.getElementById('fecha').value = "";
    
                
            }, false);
        } else if(submitTarjeta.attachEvent){
            submitTarjeta.attachEvent("click", function(e){
                e.preventDefault();
    
                var banco = document.getElementById('banco').value;
                var tarjeta = document.getElementById('tarjeta').value;
                var saldoTarjeta = document.getElementById('saldoTarjeta').value;
                var interes = document.getElementById('interes').value;
                var fecha = document.getElementById('fecha').value;
    
                var tarjetas = new NuevaTarjeta(banco, tarjeta, saldoTarjeta, interes, fecha);

    
                agregarObjetoTarjetaALocalStorage(tarjetas);
    
                document.getElementById('banco').value = "";
                document.getElementById('tarjeta').value = "";
                document.getElementById('saldoTarjeta').value = "";
                document.getElementById('interes').value = "";
                document.getElementById('fecha').value = "";
    
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
    
            cargarCuentasLocalStorage();
        }

        function agregarObjetoTarjetaALocalStorage(obj) {
            var tarjetas = [],
                dataInLocalStorage = localStorage.getItem('tarjetasUsuario');
    
            //console.log(cuentas);
    
            //console.log(dataInLocalStorage);
    
            if (dataInLocalStorage !== null) {
                tarjetas = JSON.parse(dataInLocalStorage);
            }
    
            //console.log(cuentas);
            //console.log(typeof(cuentas));
    
            var totaltarjetas = Object.values(tarjetas);
    
            totaltarjetas.push(obj);
    
            localStorage.setItem('tarjetasUsuario', JSON.stringify(totaltarjetas));
    
            cargarTarjetasLocalStorage();
        }
    
        function cargarCuentasLocalStorage(){
    
            var cuentas = [],
            dataInLocalStorage = localStorage.getItem('cuentasUsuario'),
            tablaHTML = document.getElementById("cuentas");
    
            if (dataInLocalStorage !== null) {
                cuentas = JSON.parse(dataInLocalStorage);
            }
    
            tablaHTML.innerHTML = '';
    
            cuentas.forEach(function (x, i) {
                
                var tr = document.createElement("tr"),
                    tdCuenta = document.createElement("td"),
                    tdNumCuenta = document.createElement("td"),
                    tdSaldoCuenta = document.createElement("td"),
                    tdRemove = document.createElement("td"),
                    btnRemove = document.createElement("button");
    
                    tdCuenta.innerHTML = x.cuenta;
                    tdNumCuenta.innerHTML = x.numCuenta;
                    tdSaldoCuenta.innerHTML = x.saldoCuenta;
                
    
                btnRemove.textContent = 'Remove';
                btnRemove.className = 'btn btn-xs btn-danger';
                btnRemove.addEventListener('click', function(){
                    eliminarDeLocalStorage(i);
                });
    
                tdRemove.appendChild(btnRemove);
    
                tr.appendChild(tdCuenta);
                tr.appendChild(tdNumCuenta);
                tr.appendChild(tdSaldoCuenta);
                tr.appendChild(tdRemove);
    
                tablaHTML.appendChild(tr);
            });
    
    
    
    
        }


        function cargarTarjetasLocalStorage(){
    
            var cuentas = [],
            dataInLocalStorage = localStorage.getItem('tarjetasUsuario'),
            tablaHTML = document.getElementById("tbody2");
    
            if (dataInLocalStorage !== null) {
                cuentas = JSON.parse(dataInLocalStorage);
            }
    
            tablaHTML.innerHTML = '';
    
            cuentas.forEach(function (x, i) {
                
                var tr = document.createElement("tr"),
                tdbanco = document.createElement("td"),
                tdnumCuenta = document.createElement("td"),
                tdsaldoTarjeta = document.createElement("td"),
                tdinteres = document.createElement("td"),
                tdfecha = document.createElement("td"),
                    tdRemove = document.createElement("td"),
                    btnRemove = document.createElement("button");

                tdbanco.innerHTML = x.banco;
                tdnumCuenta.innerHTML = x.tarjeta;
                tdsaldoTarjeta.innerHTML = x.saldoTarjeta;
                tdinteres.innerHTML = x.interes;
                tdfecha.innerHTML = x.fecha;
                
    
                btnRemove.textContent = 'Remove';
                btnRemove.className = 'btn btn-xs btn-danger';
                btnRemove.addEventListener('click', function(){
                    eliminarTarjetaDeLocalStorage(i);
                });
    
                tdRemove.appendChild(btnRemove);
    
                tr.appendChild(tdbanco);
                tr.appendChild(tdnumCuenta);
                tr.appendChild(tdsaldoTarjeta);
                tr.appendChild(tdinteres);
                tr.appendChild(tdfecha);
                tr.appendChild(tdRemove);
    
                tablaHTML.appendChild(tr);
            });
    
    
    
    
        }
    
        function eliminarTarjetaDeLocalStorage(index){
    
            var tarjetas = [];
            var dataInLocalStorage = localStorage.getItem('tarjetasUsuario');
    
            tarjetas = JSON.parse(dataInLocalStorage);
    
            tarjetas.splice(index, 1);
    
            localStorage.setItem('tarjetasUsuario', JSON.stringify(tarjetas));
    
            cargarTarjetasLocalStorage();        
    
        }

        function eliminarDeLocalStorage(index){
    
            var cuentas = [];
            var dataInLocalStorage = localStorage.getItem('cuentasUsuario');
    
            cuentas = JSON.parse(dataInLocalStorage);
    
            cuentas.splice(index, 1);
    
            localStorage.setItem('cuentasUsuario', JSON.stringify(cuentas));
    
            cargarCuentasLocalStorage();        
    
        }

}

class NuevaCuenta {
    
    constructor(cuenta, numCuenta, saldoCuenta){
        this.cuenta = cuenta;
        this.numCuenta = numCuenta;
        this.saldoCuenta = saldoCuenta;
    }
    
}


class NuevaTarjeta {
    
    constructor(banco, tarjeta, saldoTarjeta, interes, fecha){
        this.banco = banco;
        this.tarjeta = tarjeta;
        this.saldoTarjeta = saldoTarjeta;
        this.interes = interes;
        this.fecha = fecha;
    }
    
}

if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}

