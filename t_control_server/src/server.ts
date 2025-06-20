import { AppDataSource } from "./databases/data-source";
import express from 'express';
import router from './routes/routes';

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(express.json());

    const PORT = process.env.NODE_PORT as number | undefined;

    app.use(router);
    
    return app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    })
  })
  .catch((error) => {
    console.error('Erro ao iniciar a aplicação:', error);
    process.exit(1);
  });