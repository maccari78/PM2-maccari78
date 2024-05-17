class CarritoCompra {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotal() {
      return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }
  
    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = (total * porcentaje) / 100;
        this.totalConDescuento = total - descuento;
        return this.totalConDescuento;
    }
  }
  
  module.exports = CarritoCompra;
  
  