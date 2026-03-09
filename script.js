let productos=[200,150,500,120,300]

const min = Math.min(...productos);

const index = productos.indexOf(min);

if (index > -1) {
  productos.splice(index, 1);
}
productos.splice(400, 160,);
console.log(productos); 
