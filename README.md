# Proyecto final CoderHouse - E-commmerce ficticio PC Market - 

![image](https://github.com/joaquin-leonel/ecommerce/blob/master/public/media/coderLogo.png)

# React JS - Comisión 25380 

### Realizado en:

<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML Logo" width="50" height="50"/> <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="CSS Logo" width="50" height="50"/> <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="JavaScript Logo" width="40" height="40"/> <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React Logo" width="50" height="50"/>


E-commerce relacionado a la venta de Hardware y perisfericos, donde puede seleccionarse y agregarse diversos productos a un carro de compras para su posterior generacion de pedido y luego compra simulada(no se finaliza con metodo de pago).

# :blue_book: Instalación :blue_book:

Descargar/clonar este repositorio, luego se debe instalar la aplicacion haciendo uso del comando "npm install react-app", para luego posteriormente iniciarla con el comando "npm start". Finalizada la ejecucion de ambos comandos Se abrira el navegador que se tenga por defecto en la PC con la siguiente URL:  http://localhost:3000 para su visualizacion.

# :notebook: Dependencias :notebook:

- React
- React-Router-DOM 
- MUI - Material UI 
- react-elastic-carousel
- Firebase

# :blue_book: Descripción del proyecto :blue_book:

- El archivo App contiene un componente llamado AppRouter donde deriva a todas las secciones del e-commerce.
- La carpeta components contiene los componentes utilizados dentro de la app. 
- la carpeta pages contiene todos los componentes que son las diferentes webs del proyecto.
- La carpeta Context, poosee el archivo de contexto utilizado en el proyecto.

# :arrow_forward: Uso de la aplicación :arrow_forward:

- Ingresando al sitio web, el usuario ingresa al index de la web donde puede observarse un banner y acceso a diferentes productos, puede acceder a ellos tanto en el index como en la sección productos.

- Sección productos: accedemos a las diferentes categorías de productos que tenemos en el sitio: procesadores, discos rígidos, placas base, y demás categorías disponibles.

- Clickeando sobre cualquier producto de cualquier categoría, accedemos al detalle de producto, en esta sección podremos seleccionar la cantidad del producto que deseamos sumar al carrito y sumarla con el botón "agregar a carrito".
- A medida que se agregan los productos, estos pueden ir observándose en el carrito de compras, situado en el margen superior derecho de la barra de navegación al que se accede haciendo click en el icono del mismo. Dentro de las opciones del Widget del carrito tenemos la opción de eliminar por producto en caso de arrepentirnos del producto seleccionado, vaciar por completo todo el carrito, o finalizar la compra.

- Al presionar finalizar compra iremos a la sección la cual nos pedirá nombre teléfono e E-mail para confirmar compra, por parte del backend se generara la orden y se sumara a la base en firebase. Finalmente del lado del front nos mostrara que la compra fue completada exitosamente.

# Demostracion del funcionamiento :coffee:

![image](https://github.com/joaquin-leonel/ecommerce/blob/master/public/media/Demo.gif)



