function init() {

    var cuenta = document.getElementById('cuenta'); //Nombre del banco a la que pertenece la cuenta
    var numCuenta  = document.getElementById('numCuenta');
    var saldoCuenta = document.getElementById('saldoCuenta');
    var banco = document.getElementById('banco');
    var tarjeta = document.getElementById('tarjeta');
    var saldoTarjeta = document.getElementById('saldoTarjeta');


    

    addEventHandler(cuenta, 'blur', validarCuenta);
    addEventHandler(numCuenta, 'blur', validarNumCuenta);
    addEventHandler(saldoCuenta, 'blur', validarSaldoCuenta);
    addEventHandler(banco, 'blur', validarBanco);
    addEventHandler(tarjeta, 'blur', validarTarjeta);
    addEventHandler(saldoTarjeta, 'blur', validarSaldoTarjeta);
    
}

function validarCuenta(){
    var code = document.getElementById('cuenta').value;
        document.getElementById('msgCuenta').style.display = "none";

        re = /^[A-Za-z\s]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgCuenta').style.display = "block";
            document.getElementById('msgCuenta').style.height = "32px";
            document.getElementById('msgCuenta').style.paddingTop = "4px";
            document.getElementById('msgCuenta').style.paddingLeft = "9px";
            document.getElementById('msgCuenta').style.width = "90%";
            document.getElementById('msgCuenta').innerHTML = "Solo se admiten letras";
            
            return false;
        }
}

function validarNumCuenta(){
    var code = document.getElementById('numCuenta').value;
        document.getElementById('msgNumCuenta').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgNumCuenta').style.display = "block";
            document.getElementById('msgNumCuenta').style.height = "32px";
            document.getElementById('msgNumCuenta').style.paddingTop = "4px";
            document.getElementById('msgNumCuenta').style.paddingLeft = "9px";
            document.getElementById('msgNumCuenta').style.width = "90%";
            document.getElementById('msgNumCuenta').innerHTML = "Solo se admiten caracteres numericos";
            
            return false;
        }
}

function validarSaldoCuenta(){
    var code = document.getElementById('saldoCuenta').value;
        document.getElementById('msgSaldoCuenta').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgSaldoCuenta').style.display = "block";
            document.getElementById('msgSaldoCuenta').style.height = "32px";
            document.getElementById('msgSaldoCuenta').style.paddingTop = "4px";
            document.getElementById('msgSaldoCuenta').style.paddingLeft = "9px";
            document.getElementById('msgSaldoCuenta').style.width = "90%";
            document.getElementById('msgSaldoCuenta').innerHTML = "Solo se admiten caracteres numericos $ ";
            
            return false;
        }
}

function validarBanco(){
    var code = document.getElementById('banco').value;
        document.getElementById('msgBanco').style.display = "none";

        re = /^[A-Za-z\s]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgBanco').style.display = "block";
            document.getElementById('msgBanco').style.height = "32px";
            document.getElementById('msgBanco').style.paddingTop = "4px";
            document.getElementById('msgBanco').style.paddingLeft = "9px";
            document.getElementById('msgBanco').style.width = "90%";
            document.getElementById('msgBanco').innerHTML = "No se admiten caracteres numericos";
            
            return false;
        }
}

function validarTarjeta(){
    var code = document.getElementById('tarjeta').value;
        document.getElementById('msgTarjeta').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgTarjeta').style.display = "block";
            document.getElementById('msgTarjeta').style.height = "32px";
            document.getElementById('msgTarjeta').style.paddingTop = "4px";
            document.getElementById('msgTarjeta').style.paddingLeft = "9px";
            document.getElementById('msgTarjeta').style.width = "90%";
            document.getElementById('msgTarjeta').innerHTML = "Ingrese una cantidad numerica";
            
            return false;
        }
}

function validarSaldoTarjeta(){
    var code = document.getElementById('saldoTarjeta').value;
        document.getElementById('msgSaldoTarjeta').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgSaldoTarjeta').style.display = "block";
            document.getElementById('msgSaldoTarjeta').style.height = "32px";
            document.getElementById('msgSaldoTarjeta').style.paddingTop = "4px";
            document.getElementById('msgSaldoTarjeta').style.paddingLeft = "9px";
            document.getElementById('msgSaldoTarjeta').style.width = "90%";
            document.getElementById('msgSaldoTarjeta').innerHTML = "Ingrese una cantidad numerica $ ";
            
            return false;
        }
}











function addEventHandler(elem, eventType, handler) {
    if(elem.addEventListener){
    //alert("Evento " + eventType + " controlado en el elemento " + elem);
    elem.addEventListener (eventType, handler, false);
    }else if(elem.attachEvent){
        elem.attachEvent ('on' + eventType, handler);
    }else{
        return 0;
    }

    return 1;
}

if(window.addEventListener){
    window.addEventListener('load', init, false);
}else if(window.attachEvent){
    window.attachEvent('load', init);
}
