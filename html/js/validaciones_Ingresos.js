function init() {

    var motivo = document.getElementById('motivo');
    var monto  = document.getElementById('monto');
    


    

    addEventHandler(motivo, 'blur', validarMotivo);
    addEventHandler(monto, 'blur',  validarMonto);
  
    
}




function validarMotivo(){
    var code = document.getElementById('motivo').value;
        document.getElementById('msgMotivo').style.display = "none";

        re = /^[A-Za-z0-9\s]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgMotivo').style.display = "block";
            document.getElementById('msgMotivo').style.height = "32px";
            document.getElementById('msgMotivo').style.paddingTop = "4px";
            document.getElementById('msgMotivo').style.paddingLeft = "9px";
            document.getElementById('msgMotivo').style.width = "90%";
            document.getElementById('msgMotivo').innerHTML = "Ingrese un motivo valido";
            
            return false;
        }
}

function validarMonto(){
    var code = document.getElementById('monto').value;
        document.getElementById('msgMonto').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            return true;
        }else{
            document.getElementById('msgMonto').style.display = "block";
            document.getElementById('msgMonto').style.height = "32px";
            document.getElementById('msgMonto').style.paddingTop = "4px";
            document.getElementById('msgMonto').style.paddingLeft = "9px";
            document.getElementById('msgMonto').style.width = "90%";
            document.getElementById('msgMonto').innerHTML = "Ingrese una cantidad numerica $ ";            
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
