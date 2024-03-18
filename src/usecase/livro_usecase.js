import LivroRepository from '../repositories/livro_repository.js';
const livroRepository = new LivroRepository();


class LivroUseCase {
  async createLivro(userData) {
    // Aqui você pode adicionar validações ou lógica adicional antes de criar o usuário
    const livro = await livroRepository.create({
      ...userData,
    });
    return livro;
  }

  async getLivroById(livroId) {
    const livro = await livroRepository.findById(livroId);
    if (!livro) {
      throw new Error('Livro não encontrado');
    }
    return livro;
  }

  async updateLivro(livroId, updateData) {
    // Para atualização de senha, você deveria fazer o hash aqui também
    const updatedLivro = await livroRepository.updateById(livroId, updateData);
    if (!updatedLivro) {
      throw new Error('Livro não encontrado para atualização');
    }
    return updatedLivro;
  }

  async deleteLivro(livroId) {
    const deletedLivro = await livroRepository.deleteById(livroId);
    if (!deletedLivro) {
      throw new Error('Livro não encontrado para deleção');
    }
    return deletedLivro;
  }

  async listLivros() {
    return await livroRepository.findAll();
  }
}

export default LivroUseCase;
