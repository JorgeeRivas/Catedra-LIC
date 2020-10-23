var arreglo = [];
for(var x=0; x < 12; x++){
    arreglo[x]=0;
}

function init() {

    Swal.fire({
        title: "Bienvenido :D"
    });

    var nombre = document.getElementById('nombres');
    var apellidos = document.getElementById('apellidos');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var departamento = document.getElementById('departamento');
    var municipio = document.getElementById('municipio');
    var colonia = document.getElementById('colonia');
    var calle = document.getElementById('calle');
    var casa = document.getElementById('Nocasa');
    var dui = document.getElementById('dui');
    var nit = document.getElementById('nit');
    var numero = document.getElementById('numero');
    var fecha = document.getElementById('fecha');
    

    addEventHandler(nombre, 'blur', validarNombres);
    addEventHandler(apellidos, 'blur', validarApellidos);
    addEventHandler(email, 'blur', validarEmail);
    addEventHandler(password, 'blur', validarPassword);
    addEventHandler(departamento, 'blur', validarDepartamento);
    addEventHandler(municipio, 'blur', validarMunicipio);
    addEventHandler(colonia, 'blur', validarColonia);
    addEventHandler(calle, 'blur', validarCalle);
    addEventHandler(casa, 'blur', validarCasa);
    addEventHandler(dui, 'blur', validarDui);
    addEventHandler(nit, 'blur', validarNit);
    addEventHandler(numero, 'blur', validarNumero);
    //addEventHandler(fecha, 'blur', validarFecha);

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
        arreglo[0]=1;
        return true;
    }else{
        document.getElementById('msgNombre').style.display = "block";
        document.getElementById('msgNombre').style.height = "32px";
        document.getElementById('msgNombre').style.paddingTop = "4px";
        document.getElementById('msgNombre').style.paddingLeft = "9px";
        document.getElementById('msgNombre').style.width = "90%";
        document.getElementById('msgNombre').innerHTML = "Debe contener dos grupos de letras separadas por un espacio";
        
        arreglo[0]=0;
        return false;
    }

}

function validarApellidos(){
    
    var code = document.getElementById('apellidos').value;
    document.getElementById('msgApellidos').style.display = "none";

    re = /^[a-zA-Z]+\s[a-zA-Z]+$/;

    if(re.test(code)){
        arreglo[1]=1;
        return true;
    }else{
        document.getElementById('msgApellidos').style.display = "block";
        document.getElementById('msgApellidos').style.height = "32px";
        document.getElementById('msgApellidos').style.paddingTop = "4px";
        document.getElementById('msgApellidos').style.paddingLeft = "9px";
        document.getElementById('msgApellidos').style.width = "90%";
        document.getElementById('msgApellidos').innerHTML = "Debe contener dos grupos de letras separadas por un espacio";
        
        arreglo[1]=0;
        return false;
    }

}

function validarEmail(){
    
    var code = document.getElementById('email').value;
    document.getElementById('msgEmail').style.display = "none";

    re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(re.test(code)){
        arreglo[2]=1;
        return true;
        

    }else{
        document.getElementById('msgEmail').style.display = "block";
        document.getElementById('msgEmail').style.height = "32px";
        document.getElementById('msgEmail').style.paddingTop = "4px";
        document.getElementById('msgEmail').style.paddingLeft = "9px";
        document.getElementById('msgEmail').style.width = "90%";
        document.getElementById('msgEmail').innerHTML = "Debe ingresar un correo electronico valido";
        
        arreglo[2]=0;
        return false;
    }

}

function validarPassword(){
    
    var code = document.getElementById('password').value;
    document.getElementById('msgPassword').style.display = "none";

    re = /^[a-zA-Z0-9]+$/;

    if(re.test(code)){
        arreglo[3]=1;
        return true;
    }else{
        document.getElementById('msgPassword').style.display = "block";
        document.getElementById('msgPassword').style.height = "32px";
        document.getElementById('msgPassword').style.paddingTop = "4px";
        document.getElementById('msgPassword').style.paddingLeft = "9px";
        document.getElementById('msgPassword').style.width = "90%";
        document.getElementById('msgPassword').innerHTML = "Ingrese una contraseña con caracteres alphanumericos";
        
        arreglo[3]=0;
        return false;
    }

}



function validarDepartamento(){
    
    var code = document.getElementById('departamento').value;
    document.getElementById('msgDepartamento').style.display = "none";

    re = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;

    if(re.test(code)){
        arreglo[4]=1;
        return true;
        
    }else{
        document.getElementById('msgDepartamento').style.display = "block";
        document.getElementById('msgDepartamento').style.height = "32px";
        document.getElementById('msgDepartamento').style.paddingTop = "4px";
        document.getElementById('msgDepartamento').style.paddingLeft = "9px";
        document.getElementById('msgDepartamento').style.width = "90%";
        document.getElementById('msgDepartamento').innerHTML = "Ingrese un departamento valido";
        
        arreglo[4]=0;
        return false;
    }

}

function validarMunicipio(){
    
    var code = document.getElementById('municipio').value;
    document.getElementById('msgMunicipio').style.display = "none";

    re = /^[A-Za-z\s]+$/;

    if(re.test(code)){
        arreglo[5]=1;
        return true;
        
    }else{
        document.getElementById('msgMunicipio').style.display = "block";
        document.getElementById('msgMunicipio').style.height = "32px";
        document.getElementById('msgMunicipio').style.paddingTop = "4px";
        document.getElementById('msgMunicipio').style.paddingLeft = "9px";
        document.getElementById('msgMunicipio').style.width = "90%";
        document.getElementById('msgMunicipio').innerHTML = "Ingrese un municipio valido";
        
        arreglo[5]=0;
        return false;
    }

}

function validarColonia(){
        
        var code = document.getElementById('colonia').value;
        document.getElementById('msgColonia').style.display = "none";

        re = /^[A-Za-z0-9\s]+$/;

        if(re.test(code)){
            arreglo[6]=1;
            return true;
            

        }else{
            document.getElementById('msgColonia').style.display = "block";
            document.getElementById('msgColonia').style.height = "32px";
            document.getElementById('msgColonia').style.paddingTop = "4px";
            document.getElementById('msgColonia').style.paddingLeft = "9px";
            document.getElementById('msgColonia').style.width = "90%";
            document.getElementById('msgColonia').innerHTML = "Ingrese una colonia valida";
            
            arreglo[6]=0;
            return false;
        }
    }

    function validarCalle(){
        
        var code = document.getElementById('calle').value;
        document.getElementById('msgCalle').style.display = "none";

        re = /^[A-Za-z0-9\s]+$/;

        if(re.test(code)){
            arreglo[7]=1;
            return true;
            

        }else{
            document.getElementById('msgCalle').style.display = "block";
            document.getElementById('msgCalle').style.height = "32px";
            document.getElementById('msgCalle').style.paddingTop = "4px";
            document.getElementById('msgCalle').style.paddingLeft = "9px";
            document.getElementById('msgCalle').style.width = "90%";
            document.getElementById('msgCalle').innerHTML = "Ingrese una calle valida";
            
            arreglo[7]=0;
            return false;
        }
    }

    function validarCasa(){
        
        var code = document.getElementById('Nocasa').value;
        document.getElementById('msgCasa').style.display = "none";

        re = /^[0-9]+$/;

        if(re.test(code)){
            arreglo[8]=1;
            return true;
            

        }else{
            document.getElementById('msgCasa').style.display = "block";
            document.getElementById('msgCasa').style.height = "32px";
            document.getElementById('msgCasa').style.paddingTop = "4px";
            document.getElementById('msgCasa').style.paddingLeft = "9px";
            document.getElementById('msgCasa').style.width = "90%";
            document.getElementById('msgCasa').innerHTML = "Ingrese un numero de casa valido";
            
            arreglo[8]=0;
            return false;
        }
    }

    function validarDui(){
        
        var code = document.getElementById('dui').value;
        document.getElementById('msgDui').style.display = "none";

        re = /^\d{8}-\d{1}$/;

        if(re.test(code)){
            arreglo[9]=1;
            return true;
            
        }else{
            document.getElementById('msgDui').style.display = "block";
            document.getElementById('msgDui').style.height = "32px";
            document.getElementById('msgDui').style.paddingTop = "4px";
            document.getElementById('msgDui').style.paddingLeft = "9px";
            document.getElementById('msgDui').style.width = "90%";
            document.getElementById('msgDui').innerHTML = "Ingrese un numero de DUI valido con el guion";
            
            arreglo[9]=0;
            return false;
        }
    }

    function validarNit(){
        
        var code = document.getElementById('nit').value;
        document.getElementById('msgNit').style.display = "none";

        re = /^\d{4}-\d{6}-\d{3}-\d{1}$/;

        if(re.test(code)){
            arreglo[10]=1;
            return true;
            

        }else{
            document.getElementById('msgNit').style.display = "block";
            document.getElementById('msgNit').style.height = "32px";
            document.getElementById('msgNit').style.paddingTop = "4px";
            document.getElementById('msgNit').style.paddingLeft = "9px";
            document.getElementById('msgNit').style.width = "90%";
            document.getElementById('msgNit').innerHTML = "Ingrese un numero de NIT valido con los respectivos guiones";
            
            arreglo[10]=0;
            return false;
        }
    }

    function validarNumero(){
        
        var code = document.getElementById('numero').value;
        document.getElementById('msgNum').style.display = "none";

        re = /^\d{4}-\d{4}$/;

        if(re.test(code)){
            arreglo[11]=1;
            return true;
           

        }else{
            document.getElementById('msgNum').style.display = "block";
            document.getElementById('msgNum').style.height = "32px";
            document.getElementById('msgNum').style.paddingTop = "4px";
            document.getElementById('msgNum').style.paddingLeft = "9px";
            document.getElementById('msgNum').style.width = "90%";
            document.getElementById('msgNum').innerHTML = "Ingrese un numero de numero valido con el guion";
            
            arreglo[11]=0;
            return false;
        }
    }

