import express  from "express";
import  conectaNaDataBase from "./config/db_connect.js";
import livroRoutes from "./routes/livro_routes.js";


const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => console.log("Erro ao conectar no banco de dados : ", erro));
conexao.once("open", () => console.log("Conexão com o banco de dados realizada com sucesso"));

const app = express();

app.use(express.json());
app.use(livroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;