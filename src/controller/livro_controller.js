import LivroUseCase  from '../usecase/livro_usecase.js';

const livroUseCase = new LivroUseCase();

export default class LivroController {
  // Criar um novo usuário
  static async createLivro(req, res) {
    try {
      const livro = await livroUseCase.createLivro(req.body);
      res.status(201).json(livro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Obter detalhes de um livro pelo ID
  static async getLivroById(req, res) {
    try {
      const livro = await livroUseCase.getLivroById(req.params.id);
      res.status(200).json(livro);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  // Atualizar um livro pelo ID
   static async updateLivro(req, res) {
    try {
      const updatedLivro = await livroUseCase.updateLivro(req.params.id, req.body);
      res.status(200).json(updatedLivro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // Deletar um usuário pelo ID
   static async deleteLivro(req, res) {
    try {
      await livroUseCase.deleteLivro(req.params.id);
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  // Listar todos os usuários
   static async listLivro(req, res) {
    try {
      const livro = await livroUseCase.listLivros();
      res.status(200).json(livro);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}


