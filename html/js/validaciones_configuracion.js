var arreglo = [];
for(var x=0; x < 2; x++){
    arreglo[x]=0;
}


function init() {

    var ingreso = document.getElementById('ingreso');
    var gastos  = document.getElementById('gastos');
    


    addEventHandler(ingreso, 'blur', validarIngreso);
    addEventHandler(gastos, 'blur',  validarGastos);
  
    
}




function validarIngreso(){
    var code = document.getElementById('ingreso').value;
        document.getElementById('msgIngreso').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            arreglo[0]=1;
            return true;
        }else{
            document.getElementById('msgIngreso').style.display = "block";
            document.getElementById('msgIngreso').style.height = "32px";
            document.getElementById('msgIngreso').style.paddingTop = "4px";
            document.getElementById('msgIngreso').style.paddingLeft = "9px";
            document.getElementById('msgIngreso').style.width = "90%";
            document.getElementById('msgIngreso').innerHTML = "Ingrese solo cantidad numerica $ ";
            
            arreglo[0]=0;
            return false;
        }
}

function validarGastos(){
    var code = document.getElementById('gastos').value;
        document.getElementById('msgGasto').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            arreglo[1]=1;
            return true;
        }else{
            document.getElementById('msgGasto').style.display = "block";
            document.getElementById('msgGasto').style.height = "32px";
            document.getElementById('msgGasto').style.paddingTop = "4px";
            document.getElementById('msgGasto').style.paddingLeft = "9px";
            document.getElementById('msgGasto').style.width = "90%";
            document.getElementById('msgGasto').innerHTML = "Ingrese una cantidad numerica $ "; 

            arreglo[1]=0;       
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
