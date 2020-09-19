
function iniciar() {

    //Codigo para imprimir los datos guardados en LocalStorage
    var guardado = localStorage.getItem('datosUsuario');

    var guardado = JSON.parse(guardado);

    var nombre = document.getElementsByClassName('imprNombre');

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

            agregarObjetoALocalStorage(ingresos);

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

            agregarObjetoALocalStorage(ingresos);

            console.log(ingresos);

        });
    }

    function agregarObjetoALocalStorage(obj) {
        var ingresos = [],
            dataInLocalStorage = localStorage.getItem('ingresosUsuario');

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

        cargarIngresosLocalStorage();
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
    
    // Getter
    get cum() {
       return this.nombre;
    }

    /* Método
    calcCUM () {

        var UM = this.calcUM();
        var UV = this.calcUV();

        var CUMTotal = UM / UV;

        return CUMTotal;
    }

    calcUM(){
        var totalUM = 0;

        for(var um = 0; um < 7; um++){
            
            
            totalUM += (parseFloat(notasIngresadas[um]) * parseFloat(uvIngresadas[um]) );
        }

        //alert(totalUM);
        return totalUM;
    }

    calcUV(){
        var totalUV = 0;

        for(var uv = 0; uv < 7; uv++){
            
            
            totalUV += parseInt(uvIngresadas[uv]);
        }

        //alert(totalUV);
        return totalUV;
    }*/

}


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}
