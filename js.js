stock=[
    {producto:"batería",nombre:"batería 1" , precio: 100, id:1, desc:"batería de calidad media baja", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"batería",nombre:"batería 2" , precio: 140, id:2, desc:"batería de calidad media", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"batería",nombre:"batería 3" , precio: 180, id:3, desc:"bateria de calidad alta", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg" },
    {producto:"guitarra",nombre:"guitarra 1" , precio: 100, id:4, desc:"guitarra de calidad media baja", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"guitarra",nombre:"guitarra 2" , precio: 140, id:5, desc:"guitarra de calidad media", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"guitarra",nombre:"guitarra 3" , precio: 180, id:6, desc:"guitarra de calidad alta", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"piano",nombre:"piano 1" , precio: 100, id:7, desc:"piano de calidad media baja", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"piano",nombre:"piano 2" , precio: 140, id:8, desc:"piano de calidad media", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"piano",nombre:"piano 3" , precio: 180, id:9, desc:"piano de calidad alta", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"teclado",nombre:"teclado 1" , precio: 100, id:10, desc:"teclado de calidad media baja", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"teclado",nombre:"teclado 2" , precio: 140, id:11, desc:"teclado de calidad media", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"teclado",nombre:"teclado 3" , precio: 180, id:12, desc:"teclado de calidad alta", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"bajo",nombre:"bajo 1" , precio: 100, id:13, desc:"bajo de calidad media baja", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"bajo",nombre:"bajo 2" , precio: 140, id:14, desc:"bajo de calidad media", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
    {producto:"bajo",nombre:"bajo 3" , precio: 180, id:15, desc:"bajo de calidad alta", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Platin_Drums_PTCL2016_AF.jpg/220px-Platin_Drums_PTCL2016_AF.jpg"},
]

let contador=0;
let totalCompra=0;

const filtro=document.getElementById("filtro")
const contenedorProductos=document.getElementById("contenedorProductos")
mostrarProductos(stock)

function mostrarProductos (array){
    array.forEach(producto => {
        let div=document.createElement('div');
        div.className="carta";
        div.innerHTML=`
            <div class="card" style="width: 18rem;">
                <img src="${producto.img}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.desc}</p>
                    <p>$${producto.precio}</p>
                    <button id="boton${producto.id}">comprar</button>
                    <br>
                    <br>
                    <br>
                </div>
            </div>

        `
        contenedorProductos.appendChild(div)
    })
    

}

let carrito=document.getElementById("lista")


let btn1=document.getElementById("boton1");
let cont1=0
btn1.addEventListener("click", rtaclick1);
function rtaclick1(){
    contador=contador+1;
    cont1=cont1+1
    totalCompra=totalCompra+100;
    console.log(totalCompra)
    let bat1=document.createElement('li')
    bat1.innerHTML=`<li id="bat${cont1}">bateria1        100           <button id="batx">x</button></li>`
    carrito.appendChild(bat1)
    contenedorProductos.appendChild(carrito)
    let eliminarbat=document.getElementById('batx')
    eliminarbat.addEventListener("click", dltbat)
    function dltbat(){
        bat1.remove();
        cont1=cont1-1
    }
}


let btn2=document.getElementById("boton2");
let cont2=0
btn2.addEventListener("click", rtaclick2);
function rtaclick2(){
    contador=contador+1;
    cont2=cont2+1
    totalCompra=totalCompra+140;
    console.log(totalCompra)
    carrito.innerHTML=`<li>bateria2        140          ${cont2}<button id="x2">x</button></li>`
    contenedorProductos.appendChild(carrito)
}

let btn3=document.getElementById("boton3");
let cont3=0
btn3.addEventListener("click", rtaclick3);
function rtaclick3(){
    contador=contador+1;
    cont3=cont3+1
    totalCompra=totalCompra+180;
    console.log(totalCompra)
    carrito.innerHTML=`<li>bateria3        180          ${cont1}<button id="x3">x</button></li>`
    contenedorProductos.appendChild(carrito)
}


let btn4=document.getElementById("boton4");
let cont4=0
btn4.addEventListener("click", rtaclick4);
function rtaclick4(){
    contador=contador+1;
    cont4=cont4+1
    totalCompra=totalCompra+100;
    console.log(totalCompra)
}


let btn5=document.getElementById("boton5");
let cont5=0
btn5.addEventListener("click", rtaclick5);
function rtaclick5(){
    contador=contador+1;
    cont5=cont5+1
    totalCompra=totalCompra+140;
    console.log(totalCompra)
}


let btn6=document.getElementById("boton6");
let cont6=0
btn6.addEventListener("click", rtaclick6);
function rtaclick6(){
    contador=contador+1;
    cont6=cont6+1
    totalCompra=totalCompra+180;
    console.log(totalCompra)
}


let btn7=document.getElementById("boton7");
let cont7=0
btn7.addEventListener("click", rtaclick7);
function rtaclick7(){
    contador=contador+1;
    cont7=cont7+1
    totalCompra=totalCompra+100;
    console.log(totalCompra)
}


let btn8=document.getElementById("boton8");
let cont8=0
btn8.addEventListener("click", rtaclick8);
function rtaclick8(){
    contador=contador+1;
    cont8=cont8+1
    totalCompra=totalCompra+140;
    console.log(totalCompra)
}



let btn9=document.getElementById("boton9");
let cont9=0
btn9.addEventListener("click", rtaclick9);
function rtaclick9(){
    contador=contador+1;
    cont9=cont9+1
    totalCompra=totalCompra+180;
    console.log(totalCompra)
}


let btn10=document.getElementById("boton10");
let cont10=0
btn10.addEventListener("click", rtaclick10);
function rtaclick10(){
    contador=contador+1;
    cont10=cont10+1
    totalCompra=totalCompra+100;
    console.log(totalCompra)
}


let btn11=document.getElementById("boton11");
let cont11=0
btn11.addEventListener("click", rtaclick11);
function rtaclick11(){
    contador=contador+1;
    cont11=cont11+1
    totalCompra=totalCompra+140;
    console.log(totalCompra)
}



let btn12=document.getElementById("boton12");
let cont12=0
btn12.addEventListener("click", rtaclick12);
function rtaclick12(){
    contador=contador+1;
    cont12=cont12+1
    totalCompra=totalCompra+180;
    console.log(totalCompra)
}

let btn13=document.getElementById("boton13");
let cont13=0
btn13.addEventListener("click", rtaclick13);
function rtaclick13(){
    contador=contador+1;
    cont13=cont13+1
    totalCompra=totalCompra+100;
    console.log(totalCompra)
}


let btn14=document.getElementById("boton14");
let cont14=0
btn14.addEventListener("click", rtaclick14);
function rtaclick14(){
    contador=contador+1;
    cont14=cont14+1
    totalCompra=totalCompra+140;
    console.log(totalCompra)
}



let btn15=document.getElementById("boton15");
let cont15=0
btn15.addEventListener("click", rtaclick15);
function rtaclick15(){
    contador=contador+1;
    cont15=cont15+1
    totalCompra=totalCompra+180;
    console.log(totalCompra)
}

