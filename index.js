/*************************************       JUEGO: CODIGO DE DESCUENTO              *****************************/
/*                                         (Condicionales + Metodo Random)                                       */
let intentosRestantes = 3;

function jugar() {
  const entradaUsuario = document.getElementById("entradaUsuario").value;
  const botonJugar = document.getElementById("botonJugar");
  const numeroGanador = Math.floor(Math.random() * 5) + 1;

  if (isNaN(entradaUsuario) || entradaUsuario < 1 || entradaUsuario > 5) {
    Toastify({
      text: "Por favor, ingrese un número entre 1 y 5"
    }).showToast()
  } else if (parseInt(entradaUsuario) === numeroGanador) {
    Toastify({
      text: "🔥¡Felicitaciones, acertaste! El código de descuento es 'GaneElDesafio20%OFF'🔥"
    }).showToast()
  } else {
    if (intentosRestantes > 1) {
      Swal.fire({
        title: 'No coincide 😥',
        text: '¿Desea seguir intentando?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
      }).then((result) => {
        if (!result.value) {
          Toastify({
            text: "¡En otra ocasión lo intentaremos! 👋"
          }).showToast();
        }
      });
    } else {
      Toastify({
        text: "No acertaste😥\n Se acabaron los intentos. ¡Mejor suerte la próxima vez! 👋"
      }).showToast();
    }

    intentosRestantes--;
  } if (intentosRestantes === 0) {
    entradaUsuario.disabled = true;
    botonJugar.disabled = true;
  }
}

/*************************************         CATALOGO DE PRODUCTOS                 *****************************/
/*                                          (Constructor + Metodo Push)                                          */
class Producto {
  constructor(nombre, precio, img, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = cantidad;
  }
}


const PROD1 = new Producto("Ibupirac 400 x 12 caps", 1610, "img/ibupirac400x12caps.png")
const PROD2 = new Producto("Ibupirac Plus Max x10cmpr", 1670, "img/ibupiracPlusMax.png")
const PROD3 = new Producto("Ibupirac Fem x10cmpr", 1320, "img/ibupiracFem.png")
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
    <div class="divProducto">
      <h2 class="h2-card">${producto.nombre}</h2>
      <p class="precio-card">$${producto.precio}</p>
      <div class="divCantidad">
        <input type="number" id="cantidadProducto-${producto.nombre}" class="cantidadProductos" min="0" max="1000">
      </div>
      <button class="agregarAlCarritoBtn" onclick="agregarCantidad('${producto.nombre}')">Agregar al carrito</button>
    </div>
  `;

  contenedorProductos.appendChild(div);
});

/***************************     EVENTOS DEL CARRITO                      *********************/

const CARRITO_COMPRAS = {
  productos: [],
  cantidad: 0,
  total: 0,
};

/***************************        EVENTOS EN TOTAL DEL CARRITO          *********************/

function agregarCarrito(producto, cantidad) {
  const cantidadProducto = parseInt(cantidad) || 1;



  for (let i = 0; i < cantidadProducto; i++) {
    CARRITO_COMPRAS.productos.push({ precio: producto.precio, nombre: producto.nombre, cantidad: producto.cant });
    CARRITO_COMPRAS.total += producto.precio;

  }

  console.log(CARRITO_COMPRAS);

  actualizarCarrito();
}

function agregarCantidad(nombreProducto) {
  const cantidadProducto = document.getElementById(`cantidadProducto-${nombreProducto}`).value;

  agregarCarrito({ precio: arrayProductos.find(producto => producto.nombre === nombreProducto).precio, nombre: nombreProducto }, cantidadProducto);

  document.getElementById(`cantidadProducto-${nombreProducto}`).value = "";
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

function vaciarCarrito() {
  const vaciarCarrito = document.getElementById("vaciarCarrito")

  if (vaciarCarrito) {
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
/*                     (Function + Condicionales + Acceso a NODO + Librería)                  */

let descuentoAplicado = false;
const CUPON_DESCUENTO = "GaneElDesafio20%OFF";
const totalConDescuento = document.getElementById("totalConDescuento");

function aplicarDescuento() {
  if (descuentoAplicado) {
    Swal.fire({
      title: "Descuento ya aplicado",
      icon: "info",
    });
    return;
  }

  const codigoDescuento = document.getElementById("codigoDescuento").value;

  if (CUPON_DESCUENTO === codigoDescuento) {
    const DESCUENTO = CARRITO_COMPRAS.total * 0.2;
    totalConDescuento.textContent = `$${(CARRITO_COMPRAS.total - DESCUENTO).toFixed(2)}`;

    Swal.fire({
      title: "Descuento aplicado",
      icon: "success",
    });

    const descuentoCarrito = document.getElementById("descuentoCarrito");
    descuentoCarrito.textContent = `$${DESCUENTO.toFixed(2)}`;

    descuentoAplicado = true;
    actualizarCarrito();
  } else {
    Swal.fire({
      title: "Código de descuento incorrecto",
      icon: "error",
    });
  }
}

function actualizarListaCarrito() {
  const listaCarrito = document.getElementById("listaCarrito");

  // Limpiamos el contenido actual de la lista
  listaCarrito.innerHTML = "Productos en el carrito:";

  // Creamos un objeto para almacenar la cantidad acumulada de cada producto
  const productosIguales = {};

  // Iteramos sobre los productos en el carrito y acumulamos las cantidades
  CARRITO_COMPRAS.productos.forEach(producto => {
    if (!productosIguales[producto.nombre]) {
      productosIguales[producto.nombre] = {
        producto: producto,
        cantidad: 0
      };
    }

    productosIguales[producto.nombre].cantidad += producto.cantidad;
  });

  // Iteramos sobre los productos acumulados y creamos las entradas en la lista
  for (const nombreProducto in productosIguales) {
    const productoAcumulado = productosIguales[nombreProducto];

    const div = document.createElement("div");
    div.className = "divCarrito";

    const botonEliminar = document.createElement("button");
    botonEliminar.className = "botonEliminar";
    botonEliminar.textContent = "❌";

    botonEliminar.addEventListener("click", () => eliminarProducto(productoAcumulado.producto));

    // Mostramos el nombre del producto y la cantidad acumulada
    div.innerHTML = `${productoAcumulado.cantidad} ${productoAcumulado.producto.nombre}`;


    console.log(productoAcumulado.cantidad)



    div.appendChild(botonEliminar);
    listaCarrito.appendChild(div);
  }
}
/***************************        EVENTOS EN ELIMINAR PRODUCTOS         *********************/
/*                                   (Function + Condicionales)                               */
function eliminarProducto(producto) {
  const index = CARRITO_COMPRAS.productos.findIndex(
    (item) => item.nombre === producto.nombre
  );

  if (index !== -1) {
    const productoEnCarrito = CARRITO_COMPRAS.productos[index];

    // Reducimos la cantidad del producto
    productoEnCarrito.cantidad -= 1;


    // Si la cantidad es mayor a 0, actualizamos el total
    if (productoEnCarrito.cantidad > 0) {
      CARRITO_COMPRAS.total -= productoEnCarrito.precio;
    } else {
      // Si la cantidad es 0, eliminamos completamente el producto del carrito
      CARRITO_COMPRAS.productos.splice(index, 1);
      CARRITO_COMPRAS.total -= productoEnCarrito.precio;
    }

    actualizarListaCarrito();
    actualizarCarrito();
  }
}



/***************************               STORAGE                         *********************/

function guardarCarritoLocalStorage() {
  localStorage.setItem("itemsCarrito", JSON.stringify(CARRITO_COMPRAS.productos));
  localStorage.setItem("totalMiCarrito", JSON.stringify(CARRITO_COMPRAS.total))
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

/*************************************    LIBRERIAS    ******************************************** */

//Alert de productos agregados:
const botonAgregarCarrito = document.querySelectorAll('.agregarAlCarritoBtn');

botonAgregarCarrito.forEach((boton) => {
  boton.addEventListener('click', () => {
    const nombreProducto = boton.parentElement.querySelector('.h2-card').textContent;
    Toastify({
      text: `¡${nombreProducto} 🛒 Agregado al carrito! `,
      duration: 1500,
      gravity: top,
      position: "right",
      style: {
        background: "linear-gradient(to left, #00b09b, #96c93d)"
      }
    }).showToast()

  });
});


//Alert de vaciar carrito:

const botonVaciarCarrito = document.getElementById("vaciarCarrito");

botonVaciarCarrito.addEventListener("click", () => {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás deshacer esta acción",
    icon: "warning",
    position: "top",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar todo",
    cancelButtonText: "Cancelar",
    backdrop: "rgba(0,0,0,0.943)"
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();                                                  //Llamamos a la funcion para vaciar
      Swal.fire({
        icon: "success",
        title: "¡Listo!",
        text: "Tus productos han sido eliminados",
        position: "top",
        backdrop: "rgba(0,0,0,0.943)"
      });
    }
  });
});

//Alert de confirmar compra:

const confirmarCompra = document.getElementById("confirmarCompra");
const fechaCompra = new Date().toLocaleString()
let tiempoIntervalo;

confirmarCompra.addEventListener("click", () => {
  Swal.fire({
    title: "¿Estás seguro?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ir a pagar",
    backdrop: "rgba(0,0,0,0.943)"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `¡Compra realizada con éxito! \n Realizada: ${fechaCompra}`,
        html: `Será redirigido a la página principal en: <b></b> `,
        timer: 5000,
        timeProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const temporizador = Swal.getPopup().querySelector("b");
          tiempoRestante = setInterval(() => {
            const tiempoRestante = Swal.getTimerLeft() / 1000;              // Pasamos el tiempo restante de milisegundos a segundos
            temporizador.textContent = `${tiempoRestante.toFixed(1).charAt(0)}`;
          }, 10);
        },
        willClose: () => {
          clearInterval(tiempoIntervalo);
        },

        text: `Fecha de compra: ${fechaCompra}`,
        icon: "success",
        backdrop: "rgba(0,0,0,0.943)"
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.temporizador) {
          console.log("I was closed by the timer");
        }
      });
      vaciarCarrito()
    }
  });
})



/*************************************    APIs    ******************************************** */

// const URL = "https://jsonplaceholder.typicode.com/posts"

// const XHR = new XMLHttpRequest()

// function manejador() {
//   if (this.readyState === 4 && this.status === 200) {
//     const DATOS = JSON.parse(this.response)
//     console.log(DATOS)
//     mostrarUsuarios(DATOS)
//   }
// }

// XHR.addEventListener('load', manejador)             //'LOAD' es el evento a efectuar, "manejador" es la funcion donde efectuar la solicitud

// XHR.open('get', URL);                               //Trae informacion del JSON     'GET' es el evento a efectuar, URL es donde efectuar la solicitud

// XHR.send();                                         //Envia solicitud

// const api = document.getElementById("api")          // Creamos funcion para mostrar usuarios

// function mostrarUsuarios(DATOS) {
//   DATOS.forEach(usuario => {
//     const li = document.createElement("li")
//     li.textContent = `${usuario.id} - ${usuario.title} - ${usuario.body}`

//     api.appendChild(li);

//   });
// }

const lista = document.getElementById('api')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
       
        data.forEach((post) => {
            const li = document.createElement('div')
            li.innerHTML = `
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            `
            lista.append(li)
        })
    })



// const URL = 'https://covid-api.com/api/reports/total?date=2023-04-15';
// const XHR = new XMLHttpRequest();

// function manejador() {
//   if (this.readyState === 4 && this.status === 200) {
//     const DATOS = JSON.parse(this.responseText);

//     // Verificar si la propiedad 'data' está presente
//     if (DATOS.data) {
//       const datosCovid = DATOS.data;

//       // Mostrar información de un solo día
//       const divCovid = document.createElement("div");
//       divCovid.textContent = `Fecha:${datosCovid.date} - Ultima actualización:${datosCovid.last_update} - Casos activos:${datosCovid.active}`;

//       const API = document.getElementById("api");
//       API.appendChild(divCovid);
//     } else {
//       console.error("'data' no está en la API");
//     }
//   }
// }

// XHR.addEventListener('load', manejador);
// XHR.open('GET', URL);
// XHR.send();
