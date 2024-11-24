import express from 'express';
import multer from 'multer';
import cors from 'cors'
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsController.js';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

// Trecho de código usado para configuração de servidor Windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
// Trecho de código usado para configuração de servidor Windows
const upload = multer({ dest: "./uploads" , storage})
// Usar apenas esse código caso se trate de servidor Linux ou MAC
//const upload = multer({ dest: "./uploads" })

const routes = (app) => {
    app.use(express.json());
    // Habilita o middleware JSON no Express. Isso permite que a aplicação entenda requisições com corpo em formato JSON, que são comuns em APIs REST.
    app.use(cors(corsOptions));
    app.get('/posts', listarPosts);
    app.post('/posts', postarNovoPost);
    app.post('/upload', upload.single('imagem'), uploadImagem)
    app.put('/upload/:id', atualizarNovoPost)
};

export default routes;