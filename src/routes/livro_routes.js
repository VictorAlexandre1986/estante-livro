import express  from 'express';
import LivroController  from '../controller/livro_controller.js';

const router = express.Router();


// Rota para criar um novo usuário
router.post('/livro', LivroController.createLivro);

// Rota para obter um usuário pelo ID
router.get('/livro/:id', LivroController.getLivroById);

// Rota para atualizar um usuário pelo ID
router.patch('/livro/:id', LivroController.updateLivro);

// Rota para deletar um usuário pelo ID
router.delete('/livro/:id', LivroController.deleteLivro);

// Rota para listar todos os usuários
router.get('/livros', LivroController.listLivro);

export default router;