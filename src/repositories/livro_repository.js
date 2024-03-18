import Livro from '../entity/livro_entity.js';

class LivroRepository {
  // Cria um novo livro

  async create(livroData) {
    const livro = new Livro(livroData);
    await livro.save();
    return livro;
  }

  // Busca um livro pelo ID
  async findById(livroId) {
    return Livro.findById(livroId);
  }

  // Atualiza um usuário pelo ID
  async updateById(livroId, updateData) {
    return Livro.findByIdAndUpdate(livroId, updateData, { new: true });
  }

  // Deleta um livro pelo ID
  async deleteById(livroId) {
    return Livro.findByIdAndDelete(livroId);
  }

  // Lista todos os usuários (Você pode querer implementar paginação)
  async findAll() {
    return await Livro.find({});
  }

 

  // Adicione mais métodos conforme necessário para suportar suas operações específicas
  
}

export default LivroRepository;