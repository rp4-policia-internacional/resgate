import { Router } from "express";
import ResgateController from "../controllers/ResgateController";
//conjunto de rotas relacionada as operações da vitima



const resgateRoutes = Router();

const controller = new ResgateController();
 resgateRoutes.post("/", controller.create);
 resgateRoutes.delete("/:id", controller.delete);
 resgateRoutes.get("/:id", controller.getOne);
 resgateRoutes.get("/", controller.getAll);
 resgateRoutes.put("/", controller.update);


 export default  resgateRoutes;
