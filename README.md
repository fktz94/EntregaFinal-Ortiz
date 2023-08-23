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

- Se instaló la dependencia **React Icons** para usar los íconos de los Carts y **React Confetti** para darle un detalle estético al concluir la compra.

---

## Estructura del proyecto

1. En la carpeta **components** encontramos 4 subcarpetas y 2 archivos:

- _Layout.jsx_ es el componente que genera la base de la aplicación y que mantiene el footer y el navbar en todas las páginas, utilizando el <Outlet /> que brinda 'react-router-dom'.

- _Footer.jsx_ renderiza el footer propiamente dicho.

- En la carpeta **cart** encontramos todos los componentes que se utilizan en el carrito:

  1. _CartItem.jsx_ es el componente que renderiza cada producto ingresado en el carrito.
  2. _CartItemList.jsx_ el contenedor de todos los productos ingresados.
  3. _CartForm.jsx_ renderiza el formulario al cuál se ingresa al aceptar la compra. Contiene una validación interna (del lado del cliente) que permitirá o no continuar con el proceso hacia el paso final. La información se almacena en un estado pero luego no se utiliza para nada en particular.
  4. _Cart.jsx_ integra todas las funcionalidades del carrito. Se encarga de mapear todos los items almacenados en el context del cart en cada CartItem. En el caso de que no haya ninguno, muestra en pantalla que no hay items.

- En la carpeta **navbar** se encuentran todos los componentes de la barra de navegación:

  1. _AccountButtons.jsx_ es el componente que renderiza ambos buttons de logueo. A fin meramente estético, no cumple ninguna función.
  2. _CartWidget.jsx_ es el ancla que al clickear nos lleva al carrito. Muestra un ícono descriptivo y la cantidad de productos ingresados en el carrito. Dicha data la trae del context del cart.
  3. _Dropdown.jsx_ renderiza el menu dinámico desplegable que corresponde a la categoría PRODUCTOS. Por cada categoría de productos renderiza un **DropdownItem**. El listado de categorías lo trae del ProductContext. Mientras espera que se fetchee la data, en vez de mostrar items muestra 'Cargando...'. El estado interno `isOpen` se usa para renderizar el menu desplegado o cerrado. Clickear sobre 'Productos' es un Link al path '/products'.
  4. _DropdownItems.jsx_ es cada item del menú desplegable en cuestión. Cada uno es un Link de react-router-dom que lleva al path '/products' y le añade los parámetros para filtrar cada categoria de productos.
  5. _NavigationLink.jsx_ corresponde al resto de los dos links: 'Nosotros' y 'Contacto'. Son NavLink de react-router-dom para utilizar el parámetro _isActive_.
  6. _NavBar.jsx_ renderiza el total de la barra de navegación, incluyendo un Link de react-router al 'Home'.

- En la carpeta **pages** se encuentran el resto de las páginas funcionales del sitio:

  1. _About.jsx_ es donde aterriza el path '/about'.
  2. _Contact.jsx_ es donde aterriza el path '/conact'.
  3. _Home.jsx_ es donde aterriza el path '/'.
     Ninguna de los componentes tiene nigún estilo ni componente dentro, son solamente para utilizar React Router.
  4. _NotFound.jsx_ se renderiza cada vez que se introduce una **Route** inexistente. Contiene un botón para redireccionar al home.
  5. _Thanks.jsx_ es la página a la cuál se llega al concluir la 'Compra'. Renderiza el plugin **Confetti** con fines estéticos y un botón para volver al home.

- En la carpeta **products** se encuentra gran parte de las tareas propias de la consigna:

  1. _SectionItemContainer.jsx_ es una suerte de template que se reutiliza en varios lugares del sitio. Es un _container_ para homogeneizar estilo.
  2. _ItemListContainer.jsx_ es el contenedor donde se muestran todos los productos y los filtros para modificar los **queryParams** y filtrar los productos.
  3. _ItemList.jsx_ es una grid con los productos filtrados (o todos).
  4. _ItemCard.jsx_ es la tarjeta de cada producto, que incluye un Link con el id del producto en sí para ir a ver los detalles.
  5. _ItemDetailContainer.jsx_ es el div donde se insertan los detalles del productos.
  6. _ItemDetail.jsx_ son los detalles del producto en sí. Tiene toda la info del producto y es donde efectivamente, el producto se puede añadir al carrito.
  7. _ItemCount.jsx_ es el componente del ItemDetail donde se elije la cantidad de productos y, al dar el click, se ejecuta la función que agrega el producto al cart.
  8. _AddButton.jsx_ es el botón para sumar o restar productos dentro del ItemCount. Es para darle estilos.
  9. _FilterButton.jsx_ es el componente que renderiza las categorías de los productos para poder filtrarlos dentro del ItemListContainer.

2. La próxima carpeta, dentro del directorio '/src', es la carpeta **context**. Aquí se crean y proveen los dos contextos, el de productos y el del carrito:

- _ProductContext_ y _ShoppingCartContext_ proveen contexto de dos custom hooks: **useProductsHook** y **useCartHook** respectivamente.

3. En la carpeta **hooks** se encuentra gran parte de la lógica de la aplicación:

- _useCartHook_ crea un estado dónde se van a almacenar los productos sumados al carrito. Además, crea todas las funciones que lo van a manipular efectivamente:

  1. _handleAddProduct_ para agregar la cantidad elegida de productos.
  2. _handleRemoveProduct_ para remover el producto de a uno a la vez.
  3. _handleClearCart_ para vaciar el carrito.
  4. El estado _isBuying_ sirve para saber si el formulario se completó y se renderiza el siguiente paso o si todavía no se completó.
  5. _handleTotalValue_ es una función que permite determinar el valor total de todos los productos sumados en el carrito.

- _useItems.jsx_ devuelve la función que trae TODA la colección de productos de la base de datos.
- _useFilters.jsx_ devuelve una función que permite separar en un array todas las categorías de productos.
- _useItem.jsx_ devuelve una función donde se encuentra el producto elegido.
- _useQueryParams.jsx_ permite setear los searchParams (hook de react-router) y el state que van a transferir los Link en _ItemCard_.
- _useProductsHook.jsx_ es donde se crea el estado que va a almacenar los productos (**items**), el cuál va a permitir que se modifique el stock sin modificar la base de datos, a través de un useEffect utilizando la función que viene de _useItems.jsx_. **isLoading** es el estado que se 'activa' mientras se espera el fetching de datos y se 'desactiva' una vez que llega.
  Además de los items, devuelve los filtros y cada item particular, y las funciones para modificar el stock de cada item, que se ejecutan cada vez que se agregue o quite un producto del carrito.

4. En la carpeta **mock** está el archivo .json original, antes de utilizar **Firebase**
5. En la carpeta **services** está el script donde se creaban las promesas que simulaban la base de datos y traían la info del mock.

6. _App.jsx_ es dónde se renderizan todos los elementos de la aplicación toda, las rutas de React Router y los ContextProvider.

---
