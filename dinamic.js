var images=['cyber-animado.jpg', 'impresiones.jpg', 'papeleria.jpg', 'recargas.jpg'];//crea un array con las imagenes
var num=0;//crea una variable para indezado y la inicializa
var t= setInterval(next, 3000);//establece un intervalo de tiempo para ejecutar la función next
function next(){//función next
    var slider=document.getElementById('slider');//captura la información del elemento slider y almacena en variable slider
    num++;//incremente variable de indexado
    if(num >= images.length){//evalua si el indexado llego al final del array
        num=0;//inicializa variable de indexado
    }
    slider.src = images[num];//modifica el atributo src del elemento img
}
function prev(){//funcion prev
    var slider=document.getElementById('slider');//captura la información del elemento slider
    num--;//decrementa variable de indexado
    if(num<0){//si indezado es menor a cero 
        num=images.length-1;//num toma el valor del maximo indice del array
    }
    slider.src=images[num];//modifica el atributo src del elemento img
}