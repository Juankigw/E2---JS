
class pizza{
  constructor(id, nombre, ingredientes, precio){
      this.id=id;
      this.nombre=nombre, 
      this.ingredientes=ingredientes;
      this.precio=precio;
  }
}

let pizza1= new pizza(1, "Muzzarela", ["salsa", "muzzarela", "aceitunas"], 550);
let pizza2= new pizza(2, "Napolitana", ["salsa", "muzzarela", "aceitunas", "tomate"], 700);
let pizza3= new pizza(3, "Calabresa", ["salsa", "muzzarela", "aceitunas", "salame"], 750);
let pizza4= new pizza(4, "Roquefort", ["salsa", "muzzarela", "aceitunas", "roquefort"], 800);
let pizza5= new pizza(5, "Fugazeta", ["salsa", "muzzarela", "aceitunas", "cebolla"], 700);
let pizza6= new pizza(6, "Especial", ["salsa", "muzzarela", "aceitunas", "jamon", "morron"], 750);

const arrayPizzas = [];
arrayPizzas.push(pizza1, pizza2, pizza3, pizza4, pizza5, pizza6);

const input = document.querySelector(".input-number");
const buscarBtn = document.querySelector(".buscar-btn");
const buscarForm = document.querySelector(".buscar-form");
const renderPizzas = document.querySelector(".render-pizzas");


const mostrarPizza = (pizza) =>
  `<h2>El nombre de la pizza es ${pizza.nombre}</h2>
  <h3>Su precio es $${pizza.precio}</h3>`;


const renderizarPizza = (pizza) => {
  renderPizzas.innerHTML =mostrarPizza(pizza);
};

const mostrarError= (error)=>{
  renderPizzas.innerHTML = `<h2>${error}</h2>`
}

const buscarPizza = (e) => {
  e.preventDefault();
  const pizzaId = input.value;
  if (pizzaId.length === 0) {
    mostrarError("Por favor, ingrese una ID");
  }else if(arrayPizzas.some((pizza) => pizza.id == pizzaId)){
    const pizzaEncontrada = arrayPizzas.find((pizza) => pizza.id == pizzaId)
    renderizarPizza(pizzaEncontrada);
  } else  {
    mostrarError("El id ingresado no existe")
  }
  input.value=""
};


const init = () => {
  buscarForm.addEventListener("submit", buscarPizza);
};

init();
