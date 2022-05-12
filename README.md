## notes

For run the project `npm install` for rebuild node modules

# agAPI

### POST
**https://alurageek-restapi.herokuapp.com/api/users/** <br>
Endpoint para crear Usuarios


### PUT
**https://alurageek-restapi.herokuapp.com/api/users/6272716e6537f8adc438afb5** <br>
Endpoint para actualizar usuarios


### GET
**https://alurageek-restapi.herokuapp.com/api/users/** <br>
Obtener todos los usuarios

### DEL
**https://alurageek-restapi.herokuapp.com/api/users/6272716e6537f8adc438afb5** <br>
Borrar usuarios: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token

### POST
**https://alurageek-restapi.herokuapp.com/api/auth/login** <br>
Endpoint para login de usuarios registrados (genera token(JWT))


### GET
**https://alurageek-restapi.herokuapp.com/api/categories/** <br>
Obtener todas las categorias

### PUT
**https://alurageek-restapi.herokuapp.com/api/categories/627429b650e4323434a22aaa** <br>
Actualizar categorias

Request Headers
x-token

### POST
**https://alurageek-restapi.herokuapp.com/api/categories/** <br>
Crear categorias: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token

### GET
**https://alurageek-restapi.herokuapp.com/api/categories/627429cd50e4323434a22ab2** <br>
Obtener una categoria por id


### DEL
https://alurageek-restapi.herokuapp.com/api/categories/6273df073e557c8de5b22f21<br>
Borrar categorias: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token

### POST
Products: Create products
https://alurageek-restapi.herokuapp.com/api/products/<br>
Crear productos: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token

### PUT
Products: Update products
https://alurageek-restapi.herokuapp.com/api/products/6274564a91fce2d0445ad90f<br>
Actualizar productos: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token

### DEL
Products: Delete products
https://alurageek-restapi.herokuapp.com/api/products/6274564a91fce2d0445ad90f<br>
Borrar productos: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token

### GET
Products: Get one product
https://alurageek-restapi.herokuapp.com/api/products/62745510b12469e6a3e0cde1<br>
Obtener un producto por id

Request Headers
x-token

### GET
Products: Get products
https://alurageek-restapi.herokuapp.com/api/products/<br>
Obtener todos los productos

Request Headers
x-token

### GET
Search: Search products
https://alurageek-restapi.herokuapp.com/api/search/<br>
Buscar productos

Request Headers
x-token

### POST
Uploads: upload file
https://alurageek-restapi.herokuapp.com/api/uploads/<br>
Subir imagenes

Request Headers
x-token

### PUT
Users: Upload user images
https://alurageek-restapi.herokuapp.com/api/uploads/users/627271596537f8adc438afb1<br>
Actualizar imagenes de usuarios https://alurageek-restapi.herokuapp.com/api/uploads/users/(id de mongoDB)

### PUT
Products: Upload product images
https://alurageek-restapi.herokuapp.com/api/uploads/products/6274591f91fce2d0445ad913<br>
Actualizar imagenes de productos https://alurageek-restapi.herokuapp.com/api/uploads/products/(id de mongoDB)


### GET
Products: get product images
https://alurageek-restapi.herokuapp.com/api/uploads/products/6274591f91fce2d0445ad913<br>
Obtener imagenes de producto solo de forma local

