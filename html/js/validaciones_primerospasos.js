var arreglo = [];
for(var x=0; x < 3; x++){
    arreglo[x]=0;
}

function init() {

    var dinero = document.getElementById('dinero');
    var banco  = document.getElementById('banco');
    var NumCuenta = document.getElementById('NumCuenta');
    var SaldoActual = document.getElementById('SaldoActual');

    

    addEventHandler(dinero, 'blur', validarDinero);
    addEventHandler(banco, 'blur',  validarBanco);
    addEventHandler(NumCuenta, 'blur',  validarCuenta);
    addEventHandler(SaldoActual, 'blur',  validarSaldoActual);
    
}




function validarDinero(){
    var code = document.getElementById('dinero').value;
        document.getElementById('msgDinero').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            arreglo[0]=1;
            return true;
        }else{
            document.getElementById('msgDinero').style.display = "block";
            document.getElementById('msgDinero').style.height = "32px";
            document.getElementById('msgDinero').style.paddingTop = "4px";
            document.getElementById('msgDinero').style.paddingLeft = "9px";
            document.getElementById('msgDinero').style.width = "90%";
            document.getElementById('msgDinero').innerHTML = "Ingrese una cantidad numerica $ ";
            
            arreglo[0]=0;
            return false;
        }
}

function validarBanco(){
    var code = document.getElementById('banco').value;
        document.getElementById('msgBanco').style.display = "none";

        re = /^[A-Za-z\s]+$/;

        if(re.test(code)){
            arreglo[1]=1;
            return true;
        }else{
            document.getElementById('msgBanco').style.display = "block";
            document.getElementById('msgBanco').style.height = "32px";
            document.getElementById('msgBanco').style.paddingTop = "4px";
            document.getElementById('msgBanco').style.paddingLeft = "9px";
            document.getElementById('msgBanco').style.width = "90%";
            document.getElementById('msgBanco').innerHTML = "No se admiten caracteres numericos";

            arreglo[1]=0;
            return false;
        }
}

function validarCuenta(){
    var code = document.getElementById('NumCuenta').value;
        document.getElementById('msgCuenta').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            arreglo[2]=1;
            return true;
        }else{
            document.getElementById('msgCuenta').style.display = "block";
            document.getElementById('msgCuenta').style.height = "32px";
            document.getElementById('msgCuenta').style.paddingTop = "4px";
            document.getElementById('msgCuenta').style.paddingLeft = "9px";
            document.getElementById('msgCuenta').style.width = "90%";
            document.getElementById('msgCuenta').innerHTML = "Solo se admiten caracteres numericos";

            arreglo[2]=0;
            return false;
        }
}

function validarSaldoActual(){
    var code = document.getElementById('SaldoActual').value;
        document.getElementById('msgSaldoAc').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            arreglo[3]=1;
            return true;
        }else{
            document.getElementById('msgSaldoAc').style.display = "block";
            document.getElementById('msgSaldoAc').style.height = "32px";
            document.getElementById('msgSaldoAc').style.paddingTop = "4px";
            document.getElementById('msgSaldoAc').style.paddingLeft = "9px";
            document.getElementById('msgSaldoAc').style.width = "90%";
            document.getElementById('msgSaldoAc').innerHTML = "Solo se admiten caracteres numericos";

            arreglo[3]=0;
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
