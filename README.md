## MORO Urban Clothing

### eCommerce en React.JS

#### por Facundo Ortiz

- Proyecto final para CoderHouse

- Entrega final

---

#### 2 resoluciones:

- 'branch MASTER' --> En la branch 'master' se encuentra la resolución en la cuál, cada vez que se ingresa a la sección 'PRODUCTOS', se hace un fetch a la base de datos que trae todos los productos disponibles (pide la colección completa a Firebase). En ese caso, mientras espera la respuesta, muestra en pantalla un loader. La misma situación ocurre cada vez que se ingresa a un producto específico.Al hacer click en 'Ver detalles' se ejecuta un fetch a la base de datos (en este caso, pide sólo el producto en cuestión). También, mientras espera la respuesta, muestra un loader.

- 'branch stockBranch' --> En la branch 'stockMaster' quise probar algunas cosas más, para poder implementar un stock global. Se hace una única petición a la base de datos cuando carga la página y guarda toda la información en un estado. En ese estado se almacena el stock de cada producto, que se modifica si se ingresa al carrito, si se elimina del carrito y si se confirma la compra. En ningún momento se sobreescribe la base de datos, al recargar la página se vuelve a traer la información original desde firebase. Al tener toda la información en un estado local, casi no aparecen los loaders, pero si se recarga la página desde la url de productos o algun producto en particular, si se va a visualizar el loader hasta que traiga la información.

---

![moro_AdobeExpress (1)](https://github.com/fktz94/PreEntrega2-Ortiz/assets/106633973/c769130b-f5cf-4b8a-b900-b91695117633)

Página web que funciona como tienda virtual de una empresa de venta de ropa.

---

- Este proyecto está hecho en **React.JS** y estilado con **TailwindCSS**.

- Creado en un entorno de _Vite_, se utiliza _ESLINT_ y _Prettier_ para formatear el código y mantenerlo prolijo.

- Se instaló la dependencia **React Icons** para usar los íconos de los Carts.
