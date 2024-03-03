import mongoose from 'mongoose';



async function conectaNaDataBase(){
        //Faça conexao com o banco de dados mongoDB
        const uri='mongodb://127.0.0.1:27017/livraria'
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Conexão com o MongoDB estabelecida com sucesso.'))
        .catch(err => console.error('Não foi possível conectar ao MongoDB:', err));

return mongoose.connection;
}

// export default conectaNaDataBase;

// import mongoose from 'mongoose';

// async function conectaNaDataBase() {
//     const uri = 'mongodb://127.0.0.1:27017/livraria';
//     try {
//          mongoose.connect(uri);
//         console.log('Conexão com o MongoDB estabelecida com sucesso.');

//     } catch (err) {
//         console.error('Não foi possível conectar ao MongoDB:', err);
//         // Encerrar o processo com falha em caso de erro na conexão
//         process.exit(1);
//     }

//     return mongoose.connection;
// }

export default conectaNaDataBase;