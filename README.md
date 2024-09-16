# Envio de Email com node, Queue com Bull, Redis, nodemailes e express
<p align="center">🚀 Esta aplicação irá simular um cadastro de usuários e atráves de jobs irá enviar um email de confirmação de cadastro para o usuário.  </p>

### Passos para rodar a aplicação
1. No terminal execute: yarn install
2. Para rodar o redis, se tiver o docker instalado rode o comando: docker run --name redis -p 6379:6379 -d -t redis:alpine
3. Renomeie o arquivo .env-example para .env e insira as configurações de email.
4. Rode o servidor com o comando: yarn dev
5. Com o postman faça um post na rota: http://localhost:3333/users  com osdados: {"name": "Example Name","email": "teste@teste.com","password": "teste@234"}
6. Acompanhe o processo dos jobs pela rota: http://localhost:3333/admin/queues/ 



