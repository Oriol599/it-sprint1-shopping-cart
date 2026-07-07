import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('Pruebas del Carrito de Compras (app.js)', () => {
  
  beforeEach(async () => {
    // 1. Limpiamos la memoria de módulos de Vitest para simular una carga limpia
    vi.resetModules();

    // 2. Creamos exactamente los contenedores HTML que busca tu app.js al arrancar
    document.body.innerHTML = `
      <div id="product-list"></div>
      <div id="cart-container"></div>
    `;

    // 3. Ahora que el HTML existe en el navegador simulado, cargamos tu código.
    // Esto disparará el renderProducts() y renderCart() iniciales sin dar error.
    await import('./app.js');
  });

  test('Debería renderizar la lista inicial de 3 productos', () => {
    const tarjetasProductos = document.querySelectorAll('.product-card');
    // Tu array "products" tiene 3 elementos, verificamos que se creen las 3 tarjetas
    expect(tarjetasProductos.length).toBe(3);
  });

  test('Debería añadir un producto al carrito al hacer clic en el botón', () => {
    // Buscamos el primer botón de "Add to Cart" generado por tu script (el de la Laptop)
    const botonAgregar = document.querySelector('.add-to-cart-btn');
    
    // Simulamos el clic del usuario
    botonAgregar.click();

    // Al hacer clic, el texto "The cart is empty" debería desaparecer y mostrar la Laptop
    const contenedorCarrito = document.getElementById('cart-container');
    expect(contenedorCarrito.innerHTML).toContain('Laptop');
    expect(contenedorCarrito.innerHTML).toContain('Qty: 1');
    expect(contenedorCarrito.innerHTML).toContain('Total Price: $999');
  });
});

