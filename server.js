import express from 'express';
import routes from './src/routes/postRoutes.js';
// Importa o framework Express, que será a base para nossa aplicação web. Ele fornece um conjunto de ferramentas para criar servidores HTTP e lidar com requisições e respostas.

console.log(process.env.STRING_CONEXAO);
// Imprime a string de conexão no console para fins de depuração. Isso é útil para verificar se a string de conexão está sendo configurada corretamente.

// Cria uma instância do Express, que representa nossa aplicação web. Essa instância será usada para definir as rotas e as funcionalidades da aplicação.
const app = express();
app.use(express.static('uploads'));
routes(app);

app.listen(3000, () => {
  console.log('Servidor escutando...');
});
// Inicia o servidor Express na porta 3000. Quando o servidor estiver pronto para receber requisições, a mensagem "Servidor escutando..." será exibida no console.



