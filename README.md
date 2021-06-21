# CarAPI

<br />
<p align="center">
  <a href="https://github.com/amorimcode/CarAPI">
    <img src="./assets/node.png" alt="Logo" height="300">
  </a>

  <h3 align="center">CarAPI</h3>

  <p align="center">
    Docker, Node.js, JavaScript, Morgan, Mongoose, Bcrypt, Yup, Jsonwebtoken
    <br />
  </p>
</p>

## Descrição

 > API criada utilizando Node.js API para gerenciar (incluir, excluir, editar e consultar) um cadastro simplificado de carros.

## Requisitos:

- `nodejs`
- `docker`
- `git`

## Instruções

### Iniciar projeto

1. Clone o repositório (certifique-se que tenha o [Git](https://git-scm.com/) instalado)

```shell
git clone https://github.com/amorimcode/CarAPI
```

2. Entre no diretório da pasta clonada

3. Inicie o docker-compose (certifique-se que tenha o [Docker](https://hub.docker.com/))
```shell
docker-compose up -d
```
4. Para iniciar a aplicação utilize
```shell
npm start
```
ou se preferir utilize o yarn

```shell
yarn start
```
### Requisições

Para facilitar, configurei uma [Collection](/Collection) com exemplos de requisições prontas para softwares API Client. Sugiro o [Insomnia](https://insomnia.rest/).

<img src="./assets/collection.png" alt="Logo" height="auto">

- **Add User**
  Apenas usuários registrados receberão token de autênticação para utilizar as features da API.

http://localhost:8080/user

Utilize um JSON no corpo da requisição.
Exemplo:
```JSON
{
	"name": "Bruno Amorim",
	"email": "bruno.amorim@teste.com",
	"password": "123456"
}
```

- **Login**
Utilize um JSON no corpo da requisição.
Exemplo:
```JSON
{
	"email": "bruno.amorim@teste.com",
	"password": "123456"
}
```
A API retornará um Bearer Token de autênticação, todas as próximas rotas precisarão dele.

- **Add Car** (insira o bearer token)
  Rota utilizada para adicionar carros ao banco.
  http://localhost:8080/car

Utilize um JSON no corpo da requisição.
Exemplo com todos os atributos:
```JSON
{
	"name": "Onix",
	"brand": "Chevrolet",
	"model": "Onix Plus 1.0T AT",
	"year": "2021",
	"fuel": "Flex",
	"color": "Prata",
	"price": 68300
}
```

- **Update Car** (insira o bearer token)
  Rota utilizada para modificar dados em um carro do banco através do ID.
  http://localhost:8080/car/id-do-carro

Utilize um JSON no corpo da requisição com os dados que deseja alterar.
Exemplo:
```JSON
{
	"brand": "Chevrolet",
	"fuel": "Flex",
	"color": "Branco",
	"price": 69000
}
```
- **Delete Car** (insira o bearer token)
  Rota utilizada para remover carros do banco através do ID.
  http://localhost:8080/car/id-do-carro

- **Find Car** (insira o bearer token)
Rota utilizada para encontrar um carro do banco através do ID.
http://localhost:8080/car/id-do-carro

- **Find Car** (insira o bearer token)
Rota de retorna todos os carros do banco.
http://localhost:8080/car

