$( document ).ready(function() {
    
    var gastosHTML = 0, pagosHTML = 0, ingresosHTML = 0;

    //Trabajar con la fecha actual en los selects y en las graficas al cargar la pagina
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
        dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
        mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('desde').value=ano+"-"+mes+"-"+dia;
    document.getElementById('hasta').value=ano+"-"+mes+"-"+dia;


    var bancos = [],
        dataInLocalStorage = localStorage.getItem('ingresosUsuario');

    if (dataInLocalStorage !== null) {
        bancos = JSON.parse(dataInLocalStorage);
    }

    //Primera grafica al cargar
    var nuevaData = [];

    bancos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(5, 2) == '10'){
            nuevaData.push( {year: x.fecha, value: x.monto} );

            ingresosHTML += parseFloat(x.monto);
        }

        

    });

    morris1.setData(nuevaData);

    document.getElementById('ingresoss').innerHTML = ingresosHTML;


    //Segunda grafica al iniciar
    var segundaData = [];

    bancos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(0, 4) == '2020'){
            segundaData.push( {year: x.fecha, value: x.monto} );
        }

    });

    morris2.setData(segundaData);


    //Tercera grafica al iniciar
    var terceraData = [];

    var tiempo = document.getElementById('desde').value

    bancos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
    
        if(x.fecha.substr(0, 10) == tiempo){
            terceraData.push( {year: x.fecha, value: x.monto} );
        }

    });

    morris3.setData(terceraData);


    var gas = [],
        dataInLocalStorage = localStorage.getItem('gastosUsuario');

    if (dataInLocalStorage !== null) {
        gas = JSON.parse(dataInLocalStorage);
    }

    gas.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
    
        if(x.fecha.substr(5, 2) == '10'){

            gastosHTML += parseFloat(x.monto);
            pagosHTML++;
        }

    });

    document.getElementById('pagos').innerHTML = pagosHTML;
    document.getElementById('gastos').innerHTML = gastosHTML;



});


var morris1Doble = new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'myfirstchartDouble',
    
    data: [],

    xkey: 'year',
    ykeys: ['a', 'b'],
    labels: ['Ingresos', 'Gastos']
});


var morris2Doble = new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'mySecondChartDouble',
    
    data: [],

    xkey: 'year',
    ykeys: ['a', 'b'],
    labels: ['Ingresos', 'Gastos']
});

var morris3Doble = new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'myThirdChartDouble',
    
    data: [],

    xkey: 'year',
    ykeys: ['a', 'b'],
    labels: ['Ingresos', 'Gastos']
});


var morris1 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});

var morris2 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'mySecondChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});

var morris3 = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myThirdChart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});


$("#mes").on("change", function(){
    
    var filtro = document.getElementById('mes_filtro').value;

    if(filtro == 2){
        $("#myfirstchart").slideUp();
        $("#myfirstchartDouble").slideDown();
        actualizarGrafico1Doble();
    }else{
        $("#myfirstchartDouble").slideUp();
        $("#myfirstchart").slideDown();
        actualizarGrafico1();
    }
    

});

$("#mes_filtro").on("change", function(){
    
    var filtro = document.getElementById('mes_filtro').value;

    
    if(filtro == 2){
        $("#myfirstchart").slideUp();
        $("#myfirstchartDouble").slideDown();
        actualizarGrafico1Doble();
    }else{
        $("#myfirstchartDouble").slideUp();
        $("#myfirstchart").slideDown();
        actualizarGrafico1();
    }

});


function actualizarGrafico1(){

    var filtro = document.getElementById('mes_filtro').value;

    var bancos = [];

    var dataInLocalStorage;

    if(filtro == 0){
        var dataInLocalStorage = localStorage.getItem('ingresosUsuario');

    }else if(filtro == 1){
        var dataInLocalStorage = localStorage.getItem('gastosUsuario');  
    }
        
    if (dataInLocalStorage !== null) {
        bancos = JSON.parse(dataInLocalStorage);
    }
    

    var mes = document.getElementById('mes').value;

    var nuevaData = [];

    bancos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(5, 2) == mes.toString()){
            nuevaData.push( {year: x.fecha, value: x.monto} );
        }
    
    });

    
    if(nuevaData.length == 0){
        alert("No hay datos en este filtro.");
    }

    
    morris1.setData(nuevaData);
    
}



function actualizarGrafico1Doble(){

    var ingresos = [];
    var gastos = [];
    
    var dataInLocalStorage = localStorage.getItem('ingresosUsuario');

    
    var dataInLocalStorage2 = localStorage.getItem('gastosUsuario');  
    
        
    if (dataInLocalStorage !== null) {
        ingresos = JSON.parse(dataInLocalStorage);
    }

    if (dataInLocalStorage2 !== null) {
        gastos = JSON.parse(dataInLocalStorage2);
    }
    

    var mes = document.getElementById('mes').value;

    var nuevaData = [];

    ingresos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(5, 2) == mes.toString()){
            nuevaData.push( {year: x.fecha, a: x.monto , b:null} );
        }
    
    });


    gastos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(5, 2) == mes.toString()){
            nuevaData.push( {year: x.fecha, a:null, b: x.monto} );
        }
    
    });

    if(nuevaData.length == 0){
        alert("No hay datos en este filtro.");
    }
    
    morris1Doble.setData(nuevaData);
    
}


//SEGUNDA GRAFICA
$("#year").on("change", function(){
    
    var filtro = document.getElementById('year_filtro').value;

    if(filtro == 2){
        $("#mySecondChart").slideUp();
        $("#mySecondChartDouble").slideDown();
        actualizarGrafico2Doble();
    }else{
        $("#mySecondChartDouble").slideUp();
        $("#mySecondChart").slideDown();
        actualizarGrafico2();
    }
    

});

$("#year_filtro").on("change", function(){
    
    var filtro = document.getElementById('year_filtro').value;

    
    if(filtro == 2){
        $("#mySecondChart").slideUp();
        $("#mySecondChartDouble").slideDown();
        actualizarGrafico2Doble();
    }else{
        $("#mySecondChartDouble").slideUp();
        $("#mySecondChart").slideDown();
        actualizarGrafico2();
    }

});



function actualizarGrafico2(){

    var filtro = document.getElementById('year_filtro').value;

    var bancos = [];

    var dataInLocalStorage;

    if(filtro == 0){
        var dataInLocalStorage = localStorage.getItem('ingresosUsuario');

    }else if(filtro == 1){
        var dataInLocalStorage = localStorage.getItem('gastosUsuario');  
    }
        
    if (dataInLocalStorage !== null) {
        bancos = JSON.parse(dataInLocalStorage);
    }
    

    var mes = document.getElementById('year').value;

    var nuevaData = [];

    bancos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(0, 4) == mes.toString()){
            nuevaData.push( {year: x.fecha, value: x.monto} );
        }
    
    });

    if(nuevaData.length == 0){
        alert("No hay datos en este filtro.");
    }
    
    morris2.setData(nuevaData);
    
}



function actualizarGrafico2Doble(){

    var ingresos = [];
    var gastos = [];
    
    var dataInLocalStorage = localStorage.getItem('ingresosUsuario');

    
    var dataInLocalStorage2 = localStorage.getItem('gastosUsuario');  
    
        
    if (dataInLocalStorage !== null) {
        ingresos = JSON.parse(dataInLocalStorage);
    }

    if (dataInLocalStorage2 !== null) {
        gastos = JSON.parse(dataInLocalStorage2);
    }
    

    var mes = document.getElementById('year').value;

    var nuevaData = [];

    ingresos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(0, 4) == mes.toString()){
            nuevaData.push( {year: x.fecha, a: x.monto , b:null} );
        }
    
    });


    gastos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(0, 4) == mes.toString()){
            nuevaData.push( {year: x.fecha, a:null, b: x.monto} );
        }
    
    });
    
    if(nuevaData.length == 0){
        alert("No hay datos en este filtro.");
    }

    morris2Doble.setData(nuevaData);
    
}



//TERCERA GRAFICA
$("#desde").on("change", function(){
    
    var filtro = document.getElementById('periodo_filtro').value;

    if(filtro == 2){
        $("#myThirdChart").slideUp();
        $("#myThirdChartDouble").slideDown();
        actualizarGrafico2Doble();
    }else{
        $("#myThirdChartDouble").slideUp();
        $("#myThirdChart").slideDown();
        actualizarGrafico3();
    }
    

});

$("#hasta").on("change", function(){
    
    var filtro = document.getElementById('periodo_filtro').value;

    if(filtro == 2){
        $("#myThirdChart").slideUp();
        $("#myThirdChartDouble").slideDown();
        actualizarGrafico3Doble();
    }else{
        $("#myThirdChartDouble").slideUp();
        $("#myThirdChart").slideDown();
        actualizarGrafico3();
    }
    

});

$("#periodo_filtro").on("change", function(){
    
    var filtro = document.getElementById('periodo_filtro').value;

    
    if(filtro == 2){
        $("#myThirdChart").slideUp();
        $("#myThirdChartDouble").slideDown();
        actualizarGrafico3Doble();
    }else{
        $("#myThirdChartDouble").slideUp();
        $("#myThirdChart").slideDown();
        actualizarGrafico3();
    }

});



function actualizarGrafico3(){

    var filtro = document.getElementById('periodo_filtro').value;

    var bancos = [];

    var dataInLocalStorage;

    if(filtro == 0){
        var dataInLocalStorage = localStorage.getItem('ingresosUsuario');

    }else if(filtro == 1){
        var dataInLocalStorage = localStorage.getItem('gastosUsuario');  
    }
        
    if (dataInLocalStorage !== null) {
        bancos = JSON.parse(dataInLocalStorage);
    }
    

    var desde = document.getElementById('desde').value;
    var hasta = document.getElementById('hasta').value;

    var nuevaData = [];

    bancos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(0, 10) >= desde && x.fecha.substr(0, 10) <= hasta){
            nuevaData.push( {year: x.fecha, value: x.monto} );
        }
    
    });

    if(nuevaData.length == 0){
        alert("No hay datos en este filtro.");
    }
    
    morris3.setData(nuevaData);
    
}



function actualizarGrafico3Doble(){
    
    var ingresos = [];
    var gastos = [];
    
    var dataInLocalStorage = localStorage.getItem('ingresosUsuario');

    
    var dataInLocalStorage2 = localStorage.getItem('gastosUsuario');  
    
        
    if (dataInLocalStorage !== null) {
        ingresos = JSON.parse(dataInLocalStorage);
    }

    if (dataInLocalStorage2 !== null) {
        gastos = JSON.parse(dataInLocalStorage2);
    }

    
    var desde = document.getElementById('desde').value;
    var hasta = document.getElementById('hasta').value;

    var nuevaData = [];

    ingresos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(0, 10) >= desde && x.fecha.substr(0, 10) <= hasta){
            nuevaData.push( {year: x.fecha, a: x.monto , b:null} );
        }
    
    });


    gastos.forEach(function(x,i){

        //console.log(x.fecha.substr(5, 2));
        if(x.fecha.substr(0, 10) >= desde && x.fecha.substr(0, 10) <= hasta){
            nuevaData.push( {year: x.fecha, a:null, b: x.monto} );
        }
    
    });
    
    if(nuevaData.length == 0){
        alert("No hay datos en este filtro.");
    }

    morris3Doble.setData(nuevaData);
    
}
