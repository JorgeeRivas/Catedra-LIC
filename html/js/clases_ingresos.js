
function iniciar() {

    var submit = document.getElementById('submit');

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            //var oldIngresos = JSON.parse(localStorage.getItem('ingresosUsuario')) || [];

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('motivo').value;
            var monto = document.getElementById('monto').value;
            var cuenta = document.getElementById('select').value;

            const ingresos = new Ingresos(fecha, motivo, monto, cuenta);

            //console.log(typeof(oldIngresos) + typeof(ingresos));

            //oldIngresos.push(ingresos);

            localStorage.setItem('ingresosUsuario', JSON.stringify(ingresos));

            console.log(ingresos);

            //window.location.href = "html/primerospasos.html";

            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var oldIngresos = JSON.parse(localStorage.getItem('ingresosUsuario')) || [];

            var fecha = document.getElementById('fecha').value;
            var motivo = document.getElementById('motivo').value;
            var monto = document.getElementById('monto').value;
            var cuenta = document.getElementById('select').value;

            const ingresos = new Ingresos(fecha, motivo, monto, cuenta);

            oldIngresos.push(ingresos);

            localStorage.setItem('ingresosUsuario', JSON.stringify(oldIngresos));

            console.log(ingresos);

            //window.location.href = "html/primerospasos.html";

        });
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
