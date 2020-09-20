
function iniciar() {

        var submitCuentas = document.getElementById('submitCuentas');

        
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


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}

