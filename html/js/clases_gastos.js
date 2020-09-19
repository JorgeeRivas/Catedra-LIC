
function iniciar() {

    var submit = document.getElementById('submit');

    cargarGastosLocalStorage();

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('select').value;
            var monto = document.getElementById('Monto').value;
            var cargado = document.getElementById('cargado').value;

            var gastos = new Gastos(fecha, motivo, monto, cargado);

            agregarObjetoALocalStorage(gastos);

            document.getElementById('fecha').value = "";
            document.getElementById('select').value = "";
            document.getElementById('Monto').value = "";
            document.getElementById('cargado').value = "";

            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('select').value;
            var monto = document.getElementById('Monto').value;
            var cargado = document.getElementById('cargado').value;

            var gastos = new Gastos(fecha, motivo, monto, cargado);

            agregarObjetoALocalStorage(gastos);

            document.getElementById('fecha').value = "";
            document.getElementById('select').value = "";
            document.getElementById('Monto').value = "";
            document.getElementById('cargado').value = "";

        });
    }

    function agregarObjetoALocalStorage(obj) {
        var gastos = [],
            dataInLocalStorage = localStorage.getItem('gastosUsuario');

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

        cargarGastosLocalStorage();
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
