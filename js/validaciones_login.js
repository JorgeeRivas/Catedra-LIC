

function init() {

    var nombre = document.getElementById('nombres');

    addEventHandler(nombre, 'blur', validarNombres);


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



//Funciones con reg EXP


function validarNombres(){
    
    var code = document.getElementById('nombres').value;
    document.getElementById('msgNombre').style.display = "none";

    re = /^[a-zA-Z]+\s[a-zA-Z]+$/;

    if(re.test(code)){
        return true;
    }else{
        document.getElementById('msgNombre').style.display = "block";
        document.getElementById('msgNombre').style.height = "32px";
        document.getElementById('msgNombre').style.paddingTop = "4px";
        document.getElementById('msgNombre').style.paddingLeft = "9px";
        document.getElementById('msgNombre').style.width = "90%";
        document.getElementById('msgNombre').innerHTML = "Debe contener dos grupos de letras separadas por un espacio";
        
        return false;
    }

}