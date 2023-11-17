import { Router } from "express";
import projectsController from "../controllers/projects.controller.js"
import projectMiddlewares from "../middlewares/global.middlewares.js"


const router = Router();

// Rota para criar um novo projeto (método POST)
router.post('', projectsController.create);

// Rota para buscar todos os projetos (método GET)
router.get('', projectsController.findAll);

// Rota para buscar um projeto por ID (método GET)
router.get(
  '/projects/:id',
  projectMiddlewares.validId,
  projectMiddlewares.validUser,
  projectsController.findById,
);

// Rota para atualizar um projeto por ID (método PUT)
router.put(
  '/projects/:id',
  projectMiddlewares.validId,
  projectMiddlewares.validUser,
  projectsController.update   
);

export default router;
