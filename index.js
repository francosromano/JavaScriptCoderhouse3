// /*********************                        Alert de ingreso                       ************************ */
// /*                                (Variables + constantes + Do..While + Condicionales)                        */

const COMISION = 49810;
let continuar

do{
    let ingreso = Number(prompt("¡Hola!\ Ingrese número de comisión para ingresar:"));

    if(ingreso===COMISION){
        alert("Bienvenido Milton Salazar!")
        break;
    }else{
        alert("Número de comisión incorrecto")
        continuar = prompt("¿Desea seguir intentando?").toLowerCase()
        if (continuar === "no"){
            alert("¡En otra ocasión lo intentaremos")
    }
}
} while(continuar==="si");

// /*********************************             Calculadora                   ************************************/
// /*                                         (Funciones + Switch)                                                 */


function sumar() {
    const NUMERO_A = Number(prompt("Ingrese el primer número para sumar"));
    const NUMERO_B = Number(prompt("Ingrese el segundo número para sumar"));
    const RESULTADO = NUMERO_A + NUMERO_B
    alert(NUMERO_A + " + " + NUMERO_B + " = " + RESULTADO)
    console.log("El resultado de " + NUMERO_A + " + " + NUMERO_B + " es " + RESULTADO)
}

function restar() {
    const NUMERO_A = Number(prompt("Ingrese el primer número para restar"));
    const NUMERO_B = Number(prompt("Ingrese el segundo número para restar"));
    const RESULTADO = NUMERO_A - NUMERO_B
    alert(NUMERO_A + " - " + NUMERO_B + " = " + RESULTADO)
    console.log("El resultado de " + NUMERO_A + " - " + NUMERO_B + " es " + RESULTADO)
}

function multiplicar() {
    const NUMERO_A = Number(prompt("Ingrese el primer número para multiplicar"));
    const NUMERO_B = Number(prompt("Ingrese el segundo número para multiplicar"));
    const RESULTADO = NUMERO_A * NUMERO_B
    alert(NUMERO_A + " x " + NUMERO_B + " = " + RESULTADO)
    console.log("El resultado de " + NUMERO_A + " x " + NUMERO_B + " es " + RESULTADO)
}

function dividir() {
    const NUMERO_A = Number(prompt("Ingrese el primer número para dividir"));
    const NUMERO_B = Number(prompt("Ingrese el segundo número para dividir"));
    const RESULTADO = NUMERO_A / NUMERO_B
    alert(NUMERO_A + " / " + NUMERO_B + " = " + RESULTADO)
    console.log("El resultado de " + NUMERO_A + " / " + NUMERO_B + " es " + RESULTADO)
}

function calcularIVA() {
    const NUMERO_A = Number(prompt("Ingrese el precio para calcular IVA (21%)"))
    const RESULTADO = NUMERO_A * 1.21
    alert("El precio con IVA es de $" + RESULTADO)
    console.log("El resultado del calculo del IVA es de "+ RESULTADO)
}

function calcularDescuento() {
    const NUMERO_A = Number(prompt("Ingrese el precio para calcular el descuento (15%)"))
    const RESULTADO = NUMERO_A - (NUMERO_A * 0.15)
    alert("El precio con descuento es de $" + RESULTADO)
    console.log("El resultado del calculo del descuento es de "+ RESULTADO)
}

do {
    opcion = Number(prompt("¿Qué operación quiere realizar? \n 1-Suma ➕ \n 2-Resta ➖ \n 3-Multiplicación ✖️ \n 4-División ➗ \n 5-Calcular IVA (21%) 🖨️ \n 6-Calcular descuento (15%) 🤑 \n 7-Salir ⚠️"))

    switch (opcion) {
        case 1:
            sumar()
            break;
        case 2:
            restar()
            break;
        case 3:
            multiplicar()
            break;
        case 4:
            dividir()
            break;
        case 5:
            calcularIVA() 
            break;
        case 6:
            calcularDescuento()
            break;
        case 7: 
            alert("Muchas gracias por participar👋");
            break;
        default:
            alert("Opción incorrecta, elegí una opción disponible");
            break;
    }
}while (opcion !==7)

alert("🚩En el caso de haber realizado alguna operación, los resultados quedaron grabados en la consola.👨🏻‍💻 \n¡Hasta la próxima!👋")


// /*************************************       JUEGO: CODIGO DE DESCUENTO              *****************************/
// /*                                         (Condicionales + Metodo Random)                                       */

let intentosRestantes = 3;

do {
  let eleccionDelJugador = prompt("Ingrese su número entre 1 y 5, acertá el número y obtené un código de descuento. Tiene 3 intentos");
  eleccionDelJugador = parseInt(eleccionDelJugador)

  let numeroGanador = Math.floor(Math.random() * 5) + 1;
  console.log("Número seleccionado: ", eleccionDelJugador);
  console.log("Número ganador: ", numeroGanador);

  if (isNaN(eleccionDelJugador) || eleccionDelJugador < 1 || eleccionDelJugador > 5) {            //Si pone un número o valor incorrecto..
    alert("Por favor, ingrese un número entre 1 y 5")
    }
  else if (eleccionDelJugador === numeroGanador){                                                 //Si pone el número ganador...
    alert("🔥 ¡Felicitaciones, acertaste! 🔥 El código de descuento es 'GaneElDesafio20%OFF'");
    break;
    }
  else {                                                                                          //Si no acierta el número ganador..
    if (intentosRestantes > 1) {                                                                  //.. y todavía tienen intentos disponibles..
    
       do {                                                                                        //Hará...
       continuar = prompt("No coincide 😥\n¿Desea seguir intentando? (si/no)").toLowerCase();     //Preguntar al usuario si quiere seguir.
  
       if (continuar !== "si" && continuar !== "no") {                                           //Si el usuario no selecciona "si" ni  "no"..
        alert("Por favor, ingrese 'si' o 'no'.");
       }
      } while (continuar !== "si" && continuar !== "no");                                           //..vuelve a preguntar si quiere seguir 
    
      if (continuar === "no") {                                                                     //Si el usuario selecciona "no"..
       alert("¡En otra ocasión lo intentaremos! 👋");
       break;
      }
    }
    else {                                                                                        //Si vuelve a errar y no hay más intentos..
      alert("No acertaste😥\nSe acabaron los intentos. ¡Mejor suerte la próxima vez! 👋");
      break;
    }

  intentosRestantes--;                                                                                //Descontará un intento por cada fallo.
}

} while (intentosRestantes > 0)                                                        //Repetirá el bucle mientras haya intentos disponibles

/*************************************         CATALOGO DE PRODUCTOS                 *****************************/
/*                                          (Constructor + Metodo Push)                                          */
class Producto {
    constructor(nombre, precio, img) {
      this.nombre = nombre;
      this.precio = precio;
      this.img = img;
    }
  }
  
  
  const PROD1 = new Producto("Ibupirac 400 x 12 caps", 1610 , "img/ibupirac400x12caps.png")
  const PROD2 = new Producto("Ibupirac Plus Max x10cmpr", 1670, "img/ibupiracPlusMax.png")
  const PROD3 = new Producto("Ibupirac Fem x10cmpr", 1320 , "img/ibupiracFem.png")
  const PROD4 = new Producto("Ibupirac Antigripal x10cmpr", 3100, "img/ibupiracAntigripal.png")
  
  const arrayProductos = [PROD1, PROD2, PROD3, PROD4];

arrayProductos.push(
  { nombre: "Ibupirac 2% jbe x90ml", precio: 2450, img: "img/ibupiracJbe.png" },
)

/***************************           CARDS EN HTML DESDE JS             *********************/
/*                            (DOM + Metodos ForEach y AppendChild)                           */ 

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(producto => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img class="card-img" src="${producto.img}" alt="">
    <div>
      <h2 class="h2-card">${producto.nombre}</h2>
      <p class="precio-card">$${producto.precio}</p>
      <button id="btnCompra" onclick="agregarCarrito({ precio: ${producto.precio}, nombre: '${producto.nombre}' })">Comprar</button>
    </div>
  `;
  contenedorProductos.appendChild(div);
});


/***************************     EVENTOS DEL CARRITO                      *********************/

const CARRITO_COMPRAS = {
  productos: [],
  total: 0,
};

/***************************        EVENTOS EN TOTAL DEL CARRITO          *********************/
                                                  
function agregarCarrito(producto) {
  CARRITO_COMPRAS.productos.push({ precio: producto.precio, nombre: producto.nombre });
  CARRITO_COMPRAS.total += producto.precio;

  alert(`${producto.nombre} 🛒 ¡Agregado al carrito!`);
  console.log(CARRITO_COMPRAS);



  actualizarCarrito();
}


/***************************        FUNCION QUE ACTUALIZA CARRITO         *********************/

function actualizarCarrito() {
  const productosAñadidos = document.getElementById("productosAñadidos");
  const totalCarrito = document.getElementById("totalCarrito");
  

  productosAñadidos.textContent = CARRITO_COMPRAS.productos.length;
  totalCarrito.textContent = `$${CARRITO_COMPRAS.total.toFixed(2)}`;

  actualizarListaCarrito();
  guardarCarritoLocalStorage()

}

/***************************        FUNCION QUE VACIA CARRITO         *********************/

function vaciarCarrito(){
  const vaciarCarrito = document.getElementById("vaciarCarrito")

  if(vaciarCarrito){
    CARRITO_COMPRAS.productos = [];
    CARRITO_COMPRAS.total = 0
    totalConDescuento.innerText = "$0.00"
    descuentoCarrito.textContent = "$0.00"
    codigoDescuento.value = "";
    descuentoAplicado = false
    localStorage.clear("cuponCargado")
    actualizarCarrito();
    }
}

/***************************        EVENTOS EN APLICAR DESCUENTO          *********************/
/*                          (Function + Condicionales + Acceso a NODO)                        */

let descuentoAplicado = false;                                                                       //Iniciamos sin descuento aplicado
const CUPON_DESCUENTO = "GaneElDesafio20%OFF";
const totalConDescuento = document.getElementById("totalConDescuento");


function aplicarDescuento() {
  if (descuentoAplicado) {
    alert("¡El descuento ya se ha aplicado!");                                                        
    return;
  }
  
  const codigoDescuento = document.getElementById("codigoDescuento").value;                           //Accedemos a los valores del campo de descuento

  if (CUPON_DESCUENTO === codigoDescuento) {                                                          //Condicional para aplicar descuento
    const DESCUENTO = CARRITO_COMPRAS.total * 0.2;                                                    //Calculamos descuento
    totalConDescuento.textContent = `$${(CARRITO_COMPRAS.total-DESCUENTO).toFixed(2)}`

    alert("¡Cupon válido! Descuento aplicado");                                                       //Informamos al usuario que se aplicó el descuento
    
    const descuentoCarrito = document.getElementById("descuentoCarrito")
    descuentoCarrito.textContent = `$${DESCUENTO.toFixed(2)}`

    descuentoAplicado = true;                                                                         //Cambiamos la variable para que el descuento sea único
    
    actualizarCarrito();                                                                              //Actualiza el total en HTML
  } else {
    alert("Cupon incorrecto");                                                                        //Informamos al usuario que aplicó un código erroneo
  }
}

function actualizarListaCarrito() {
  const listaCarrito = document.getElementById("listaCarrito");

  // Limpiamos el contenido actual de la lista
  listaCarrito.innerHTML = "Productos en el carrito:";

  CARRITO_COMPRAS.productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "divCarrito";

    
    const botonEliminar = document.createElement("button");                                         // Creamos el botón
    botonEliminar.className ="botonEliminar"
    botonEliminar.textContent = "❌";

    botonEliminar.addEventListener("click", () => eliminarProducto(producto));

    div.innerHTML = `${producto.nombre} `;
    div.appendChild(botonEliminar);

  
    listaCarrito.appendChild(div);
  });
}

/***************************        EVENTOS EN ELIMINAR PRODUCTOS         *********************/
/*                                   (Function + Condicionales)                               */
function eliminarProducto(producto) {
  const index = CARRITO_COMPRAS.productos.indexOf(producto);                    //IndexOf para buscar la posición en el array

  if (index !== -1) {                                                           //Si el indice es distinto a -1, quiere decir que existe en el array
    CARRITO_COMPRAS.productos.splice(index, 1);                                 //SPLICE para que relacione el producto con su indice
    
    CARRITO_COMPRAS.total -= producto.precio
    console.log(CARRITO_COMPRAS)
  }
  
  if (descuentoAplicado) {
    const DESCUENTO = CARRITO_COMPRAS.total * 0.2;
    DESCUENTO.textContent = `$${(CARRITO_COMPRAS.total - totalConDescuento).  toFixed(2)}`
    totalConDescuento.textContent = `$${(CARRITO_COMPRAS.total - DESCUENTO).toFixed(2)}`;
  }

    actualizarListaCarrito();
    actualizarCarrito(); 
  }


/***************************               STORAGE                         *********************/

function guardarCarritoLocalStorage() {
  localStorage.setItem("itemsCarrito", JSON.stringify(CARRITO_COMPRAS.productos));
  localStorage.setItem("totalMiCarrito",JSON.stringify(CARRITO_COMPRAS.total))
  localStorage.setItem("totalConDescuentoCarrito", JSON.stringify(totalConDescuento.textContent))
  localStorage.setItem("cuponCargado", JSON.stringify(descuentoAplicado))
  localStorage.setItem("descuentoCargado", JSON.stringify(descuentoCarrito.textContent))
}

function subirCarritoLocalStorage() {
  const carritoGuardado = localStorage.getItem("itemsCarrito");
  const totalGuardado = localStorage.getItem("totalMiCarrito");
  const totalConDescuentoGuardado = localStorage.getItem("totalConDescuentoCarrito")
  const cuponCargadoGuardado = localStorage.getItem("cuponCargado")
  const descuentoCargadoGuardado = localStorage.getItem("descuentoCargado")

  if (carritoGuardado) {
    CARRITO_COMPRAS.productos = JSON.parse(carritoGuardado);
    CARRITO_COMPRAS.total = JSON.parse(totalGuardado);
    totalConDescuento.textContent = JSON.parse(totalConDescuentoGuardado);
    descuentoAplicado = JSON.parse(cuponCargadoGuardado)
    descuentoCarrito.textContent = JSON.parse(descuentoCargadoGuardado)

    actualizarCarrito();
  } 
}

subirCarritoLocalStorage();











/************************************************************************************************* */
// const formularioCuenta = document.getElementById("formularioCuenta")
// function guardarDatosCuenta(){
//   localStorage.setItem("cuenta",JSON.stringify("formularioCuenta"))
//   localStorage.getItem("cuenta")
  
// }
// guardarDatosCuenta()

// guardarCarritoLocalStorage()