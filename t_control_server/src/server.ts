import { AppDataSource } from "./databases/data-source";
import express from 'express';

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    const PORT = process.env.NODE_PORT as number | undefined;
    
    return app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    })
  })
  .catch((error) => {
    console.error('Erro ao iniciar a aplicação:', error);
    process.exit(1);
  });