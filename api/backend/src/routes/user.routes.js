import { Router } from "express";
import userController from "../controllers/user.controller.js";

import userMiddlewares from "../middlewares/global.middlewares.js";
const router = Router();

router.post("/", userController.create);
router.get("/", userController.findAll);
router.get(
  "/:id",
  userMiddlewares.validId,
  userMiddlewares.validUser,
  userController.findById
);
router.patch(
  "/:id",
  userMiddlewares.validId,
  userMiddlewares.validUser,
  userController.update
);

export default router;
