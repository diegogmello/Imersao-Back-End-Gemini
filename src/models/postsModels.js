import 'dotenv/config'
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';
// Importa a função `conectarAoBanco` definida em `dbConfig.js`, responsável por estabelecer a conexão com o banco de dados. Essa função provavelmente utiliza um driver de banco de dados específico (como MongoDB, PostgreSQL, etc.) para se conectar ao banco.

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma conexão com o banco de dados. A string de conexão é obtida da variável de ambiente `STRING_CONEXAO`, que geralmente contém informações como o nome do host, porta, banco de dados e credenciais. A palavra-chave `await` indica que a função `conectarAoBanco` é assíncrona e espera pela conclusão da conexão antes de continuar.

export async function getTodosPosts() {
    const db = conexao.db('imersao-instabyte');
    // Obtém uma referência ao banco de dados 'imersao-instabyte' a partir da conexão estabelecida.
    const colecao = db.collection('posts');
    // Obtém uma referência à coleção 'posts' dentro do banco de dados. Uma coleção é similar a uma tabela em um banco de dados relacional, armazenando os documentos (registros).
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos na coleção 'posts'. O método `toArray()` converte o cursor de resultados em um array de objetos JavaScript.
  }
  
export async function criarPost(novoPost) {
  const db = conexao.db('imersao-instabyte');
  const colecao = db.collection('posts');
  return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db('imersao-instabyte');
  const colecao = db.collection('posts')
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}