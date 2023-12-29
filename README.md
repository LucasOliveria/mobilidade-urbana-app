## Como utilizar os códigos desse repositório:

Antes de começar a usar os códigos desse repositório será necessário instale o Node.js e o postgreSQL na sua máquina caso ainda não possua.

Node.js: <a href="https://nodejs.org/en" target="_blank">"https://nodejs.org/en</a> 

postgreSQL: <a href="https://www.postgresql.org/download/" target="_blank">https://www.postgresql.org/download/</a> 

Após instalação do Node.js e postgreSQl, siga os passos abaixo:

1. Faça um fork desse repositório para a sua coleção de repositórios no GitHub
2. Clone o repositório para sua máquina
3. Abra o projeto no seu editor de códigos (IDE) e no terminal navegue ate a pasta **api-map** e digite o comando "**npm install**" para instalar as dependências. Faça o mesmo procedimento com a pasta **front-map**.
4. Com o auxilio da ferramenta que você utiliza para criar e manipular banco de dados, crie um banco de dados utilizando a seguinte query:
```
CREATE DATABASE NOME_DO_BANCO_DE_DADOS
```
OBS.: Caso não possua nenhuma ferramenta para criação e manipulação de banco de dados pode baixar alguma dessas listadas abaixo:

```
- Beekeeper Studio
- DBeaver
- DataGrip
- SQL Workbench/J
```
5. Existem variáveis de ambiente inseridas nos códigos e essas devem ser configuradas. Para isso duplique o arquivo ```.env.example``` no diretório raiz **api-map***, renomeie para ```.env```(Ou só renomeie diretamente o .env.example) e preencha as variáveis com as configurações de conexão que costuma utilizar. Na variável **DATABASE_URL** ```DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"``` substitua **USER**, **PASSWORD** e **PORT** pela configuração usada no seu computador e que foram escolhidas ao instalar o postgreSQL, o **HOST** pode ser substituido por localhost e o **DATABASE** é o nome do banco de dados que você criou no passo 4. Abaixo segue um exemplo de como as variáveis devem ser preenchidas. Na variável **GOOGLE_API_KEY** preencha com a sua Key Api do Google Maps

#### .env (exemplo)
```javascript
GOOGLE_API_KEY="gshoooewsk455aa$aasddw"
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/NOME_DO_BANCO_DADOS?schema=public"
```
6. No diretório **front-map**, dentro da pasta **src** renomeie o arquivo **config.example.ts** para **config.ts** e preencha a variável **GOOGLE_API_KEY** com a sua Key Api do Google Maps
7. Após configurar as variáveis de ambiente no arquivo ```.env```, Rode o script "**npm run migrate:run**" no terminal do projeto **api-map**. Esse comando criará as tabelas dentro do banco de dados criado anteriormente.
8. Após realizar todas as configurações rode o script **"npm run start:dev"** no terminal do projeto. Esse comando iniciará o servidor em sua máquina na porta 3000.
9. Agora abra um outro terminal e navegue até a pasta **front-map** e rode o comando **npm run dev**. No navegador digite a URL: http://localhost:5173/
---