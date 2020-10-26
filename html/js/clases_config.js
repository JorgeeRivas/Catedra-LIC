function iniciar() {

    var submit = document.getElementById('submit');

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var pago = document.getElementById('selectpago').value;
            var ingreso = document.getElementById('ingreso').value;
            var gasto = document.getElementById('gastos').value;
            var porcentaje  = document.getElementById('porcentaje').value;

            const Pago = new Config(pago, ingreso, gasto, porcentaje);

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
                const Pago = new Config(pago, ingreso, gasto, porcentaje);

                localStorage.setItem('datosPago', JSON.stringify(Pago));


                Swal.fire({
                    icon: 'success',
                    title: 'Enhorabuena',
                    text: 'Sus datos se han guardado!',
                  })

                document.getElementById('selectpago').value = "";
                document.getElementById('ingreso').value = "";
                document.getElementById('gastos').value = "";
                document.getElementById('porcentaje').value = "";

                

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
            var porcentaje  = document.getElementById('porcentaje').value;

            const Pago = new Config(pago, ingreso, gasto, porcentaje);


            localStorage.setItem('datosPago', JSON.stringify(Pago));

            console.log(Pago);


        });
    }



}



class Config {
    
    constructor(pago, ingreso, gasto, porcentaje){
        this.pago = pago;
        this.ingreso = ingreso;
        this.gasto = gasto;
        this.porcentaje = porcentaje;
    }
    

}


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}
