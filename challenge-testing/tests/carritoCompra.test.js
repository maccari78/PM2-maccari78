const CarritoCompra = require('../carritoCompra');

describe('Constructor de CarritoCompra', () => {
  test('Crea un carrito vacío', () => {
    const carrito = new CarritoCompra();
    expect(carrito.productos).toEqual([]);
  });
});

describe('Método agregarProducto de CarritoCompra', () => {
  test('Agrega un producto al carrito', () => {
    const carrito = new CarritoCompra();
    const producto = { nombre: 'Producto 1', precio: 10 };
    carrito.agregarProducto(producto);
    expect(carrito.productos.length).toBe(1);
  });
});

describe('Método calcularTotal de CarritoCompra', () => {
  test('Calcula correctamente el total de la compra', () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
    expect(carrito.calcularTotal()).toBe(30);
  });
});

describe('Método aplicarDescuento de CarritoCompra', () => {
  test('Aplica correctamente un descuento al total de la compra', () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
    carrito.aplicarDescuento(10);
    expect(carrito.totalConDescuento).toBe(27);
  });
});
