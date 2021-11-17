
/***************************** VARIABLES **************************************/
let resp = "si";
const selectedQty = "Cuantas desea llevar?";
let cart = [];

let products = [
  {id:"1", name:"Donkella", price:750, stock:12}, 
  {id:"2", name:"Cheesecake de frutilla", price:800, stock:15}, 
  {id:"3", name:"Boston Manjar", price:700, stock:10},
  {id:"4", name:"Chocolate classic", price:700, stock:10}, 
  {id:"5", name:"Doble chocolate", price:900, stock:15}, 
  {id:"6", name:"Smiley manjar", price:750, stock:14},
  {id:"7", name:"Suspiro alimeño", price:750, stock:10}, 
  {id:"8", name:"Crema de limón", price:800, stock:12}, 
  {id:"9", name:"Jelly de frambueza", price:900, stock:10},
]


/***************************** FUNCIONES **************************************/
//MENU DINAMICO
const showMenu = () =>{
  let menu = "Escoge una dona \n"
  products.forEach((product)=>{
    menu += product.id + ".- " + product.name + "\n";
  })
  menu += (products.length + 1) + ".-Salir";
  let opt = parseInt(prompt(menu));
  return opt;
};

//STOCK
const isStock = (quantity, stock) => {
  if (quantity > stock) {
    alert(`No tenemos suficiente stock de ese sabor, el disponible es ${stock}`);
    return false;
  }
  return true;
}

//ADD CARRITO
const addToCard = (option, qty) => {
  const found = products.find(product => product.id === option.toString());//si oprion = 3 entonces found = {id="3", name="Bananas", precio=100, stock=10}
  if(isStock(qty, found.stock)){
    let item = {
      quantity:qty,
      price:found.price * qty,
      name:found.name,
    }
    cart.push(item);
    products[option - 1].stock -= qty;
    alert(`${found.name} fueron agregadas al carrito`)
  }
  
}

//TOTAL Y DETALLE
const showTotal = () => {
  let dataToShow = "";
  let total = 0;
  cart.forEach(product => {
    dataToShow += `Producto: ${product.name} Cantidad: ${product.quantity} Precio: ${product.price} \n`;
    total += product.price
  })
  dataToShow += `Total: ${total}`;
  alert(dataToShow);
}

/***************************** MAIN **************************************/
//MAIN
alert("Bienvenido a tu tienda de donas online favorita");

do{
  let option = showMenu();
  if (option === (products.length + 1)) {
    break;
  }
  let qty = parseInt(prompt(selectedQty));
  addToCard(option, qty);
  
  resp = prompt("Desea continuar comprando? s / n");

}while (resp === "s");

if (cart.length > 0) showTotal();
  
alert("Gracias por tu visita");