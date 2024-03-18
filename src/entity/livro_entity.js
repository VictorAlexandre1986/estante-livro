import mongoose from 'mongoose';

const livroSchema = new mongoose.Schema({
  
  id: { 
    type:mongoose.Schema.Types.ObjectId 
  },
  titulo: { 
    type:String,
    required: true,
    unique: true
  },
  autor: {
    type:String,
    required: true
  },
  paginas: {
    type:Number,
    required: true
  }
});

const Livro = mongoose.model('livraria', livroSchema);

// module.exports = mongoose.model('Livro', userSchema);
export default Livro;
