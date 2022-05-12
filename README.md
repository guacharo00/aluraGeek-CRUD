# notes

For run the project `npm install` for rebuild node modules

agAPI
Make things easier for your teammates with a complete collection description.
POST
Users: Create users
https://alurageek-restapi.herokuapp.com/api/users/
Endpoint para crear Usuarios

Bodyraw (json)
json
{
  "nombre": "Test15",
  "email": "test15@test.com",
  "password": "123456",
  "role": "USER_ROLE",
  "google": true,
  "img": "myImg"
}
PUT
Users: Update users
https://alurageek-restapi.herokuapp.com/api/users/6272716e6537f8adc438afb5
Endpoint para actualizar usuarios

Bodyraw (json)
json
{
  "nombre": "Test1",
  "email": "test1@test.com",
  "role": "ADMIN_ROLE",
  "google": true,
  "img": "myImg"
}
GET
Users: Get users
https://alurageek-restapi.herokuapp.com/api/users/
Obtener todos los usuarios

Bodyraw (json)
json
{
  "nombre": "Eduardo",
  "email": "eduardo@eduardo.com",
  "role": "ADMIN_ROLE",
  "google": true,
  "img": "myImg"
}
DEL
Users: Delete users
https://alurageek-restapi.herokuapp.com/api/users/6272716e6537f8adc438afb5
Borrar usuarios: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3MTQ0ODksImV4cCI6MTY1MTcyODg4OX0.8WYatZ5TuLW8iz6bfiRN_p_sR1BXqL0r0J5sHVCmrPk
Bodyraw (json)
json
{
  "nombre": "Eduardo",
  "email": "eduardo@eduardo.com",
  "role": "ADMIN_ROLE",
  "google": true,
  "img": "myImg"
}
POST
Auth: Login users
https://alurageek-restapi.herokuapp.com/api/auth/login
Endpoint para login de usuarios registrados (genera token(JWT))

Bodyraw (json)
json
{
  "email": "test@test.com",
  "password": "123456"
}
GET
Categories: Get categories
https://alurageek-restapi.herokuapp.com/api/categories/
Obtener todas las categorias

Bodyraw (json)
json
{
  "nombre": "Eduardo",
  "email": "eduardo@eduardo.com",
  "role": "ADMIN_ROLE",
  "google": true,
  "img": "myImg"
}
PUT
Categories: Update categories
https://alurageek-restapi.herokuapp.com/api/categories/627429b650e4323434a22aaa
Actualizar categorias

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3NzcwOTksImV4cCI6MTY1MTc5MTQ5OX0.xUPAWsINw4M9lz-5rtTOwSgdv_UpZk0mudyVKLBJ_ks
Bodyraw (json)
json
{
  "name": "Actual"
}
POST
Categories: Create categories
https://alurageek-restapi.herokuapp.com/api/categories/
Crear categorias: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3ODE3MTcsImV4cCI6MTY1MTc5NjExN30.LgMarLmGJNTO7QxfYoalMrY3r43qxkDEoWC6VZl3YSA
Bodyraw (json)
json
{
  "name": "damas"
}
GET
Categories: Get one categories
https://alurageek-restapi.herokuapp.com/api/categories/627429cd50e4323434a22ab2
Obtener una categoria por id

Bodyraw (json)
json
{
  "nombre": "Eduardo",
  "email": "eduardo@eduardo.com",
  "role": "ADMIN_ROLE",
  "google": true,
  "img": "myImg"
}
DEL
Categories: Delete categories
https://alurageek-restapi.herokuapp.com/api/categories/6273df073e557c8de5b22f21
Borrar categorias: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3NzcwOTksImV4cCI6MTY1MTc5MTQ5OX0.xUPAWsINw4M9lz-5rtTOwSgdv_UpZk0mudyVKLBJ_ks
Bodyraw (json)
json
{}
POST
Products: Create products
https://alurageek-restapi.herokuapp.com/api/products/
Crear productos: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3ODE3MTcsImV4cCI6MTY1MTc5NjExN30.LgMarLmGJNTO7QxfYoalMrY3r43qxkDEoWC6VZl3YSA
Bodyraw (json)
json
{
  "name": "Producto YXZ",
  "price": "60",
  "description": "A excelent product",
  "img": "images/product.png"
}
PUT
Products: Update products
https://alurageek-restapi.herokuapp.com/api/products/6274564a91fce2d0445ad90f
Actualizar productos: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3ODE3MTcsImV4cCI6MTY1MTc5NjExN30.LgMarLmGJNTO7QxfYoalMrY3r43qxkDEoWC6VZl3YSA
Bodyraw (json)
json
{
  "name": "Producto ABC",
  "description": "A excelent product",
  "img": "images/produc-1.png"
}
DEL
Products: Delete products
https://alurageek-restapi.herokuapp.com/api/products/6274564a91fce2d0445ad90f
Borrar productos: requiere token(JWT) y ser administrador (role="ADMIN_ROLE")

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3ODE3MTcsImV4cCI6MTY1MTc5NjExN30.LgMarLmGJNTO7QxfYoalMrY3r43qxkDEoWC6VZl3YSA
Bodyraw (json)
json
{
  "name": "Producto ABC",
  "description": "A excelent product",
  "img": "images/produc-1.png"
}
GET
Products: Get one product
https://alurageek-restapi.herokuapp.com/api/products/62745510b12469e6a3e0cde1
Obtener un producto por id

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3ODE3MTcsImV4cCI6MTY1MTc5NjExN30.LgMarLmGJNTO7QxfYoalMrY3r43qxkDEoWC6VZl3YSA
GET
Products: Get products
https://alurageek-restapi.herokuapp.com/api/products/
Obtener todos los productos

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3ODE3MTcsImV4cCI6MTY1MTc5NjExN30.LgMarLmGJNTO7QxfYoalMrY3r43qxkDEoWC6VZl3YSA
GET
Search: Search products
https://alurageek-restapi.herokuapp.com/api/search/
Buscar productos

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTE3ODE3MTcsImV4cCI6MTY1MTc5NjExN30.LgMarLmGJNTO7QxfYoalMrY3r43qxkDEoWC6VZl3YSA
POST
Uploads: upload file
https://alurageek-restapi.herokuapp.com/api/uploads/
Subir imagenes

Request Headers
x-token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjcyNzE1OTY1MzdmOGFkYzQzOGFmYjEiLCJpYXQiOjE2NTIwNDQ5MjYsImV4cCI6MTY1MjA1OTMyNn0.IoUHTHDH0qFhO-3NZuUHwABkLPz4nb2z7mzxidwDxm8
Bodyform-data
file
/Users/luisfructuoso/Documents/Pics/puzzle.jpg
PUT
Users: Upload user images
https://alurageek-restapi.herokuapp.com/api/uploads/users/627271596537f8adc438afb1
Actualizar imagenes de usuarios https://alurageek-restapi.herokuapp.com/api/uploads/users/(id de mongoDB)

Bodyform-data
file
/Users/luisfructuoso/Documents/Pics/avatar3.png
PUT
Products: Upload product images
https://alurageek-restapi.herokuapp.com/api/uploads/products/6274591f91fce2d0445ad913
Actualizar imagenes de productos https://alurageek-restapi.herokuapp.com/api/uploads/products/(id de mongoDB)

Bodyform-data
file
/Users/luisfructuoso/Desktop/aluraGeek/images/consolas/pocket-console.jpeg
GET
Products: get product images
https://alurageek-restapi.herokuapp.com/api/uploads/products/6274591f91fce2d0445ad913
Obtener imagenes de producto solo de forma local

Bodyform-data
file
