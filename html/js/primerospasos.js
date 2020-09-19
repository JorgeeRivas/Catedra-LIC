
function iniciar() {

    var submit = document.getElementById('submit');

    if(submit.addEventListener){
        submit.addEventListener("click", function(e){
            
            e.preventDefault();

            var dinero = document.getElementById('dinero').value;
            var banco = document.getElementById('banco').value;
            var NumCuenta = document.getElementById('NumCuenta').value;
            var SaldoActual = document.getElementById('SaldoActual').value;

            const cuenta = new Cuenta(banco, NumCuenta, SaldoActual);

            localStorage.setItem('efectivo', dinero);

            localStorage.setItem('datosCuenta', JSON.stringify(cuenta));

            console.log(cuenta);

            window.location.href = "estadistica.html";

            
        }, false);
    } else if(submit.attachEvent){
        submit.attachEvent("click", function(e){
            e.preventDefault();

            var dinero = document.getElementById('dinero').value;
            var banco = document.getElementById('banco').value;
            var NumCuenta = document.getElementById('NumCuenta').value;
            var SaldoActual = document.getElementById('SaldoActual').value;

            const cuenta = new Cuenta(banco, NumCuenta, SaldoActual);

            localStorage.setItem('efectivo', dinero);

            localStorage.setItem('datosCuenta', JSON.stringify(cuenta));

            console.log(cuenta);

            window.location.href = "estadistica.html";

        });
    }



}



class Cuenta {
    
    constructor(banco, NumCuenta, SaldoActual){
        this.banco = banco;
        this.NumCuenta = NumCuenta;
        this.SaldoActual = SaldoActual;
    }

}


if(window.addEventListener){
    window.addEventListener('load', iniciar, false);
}else if(window.attachEvent){
    window.attachEvent('load', iniciar);
}
