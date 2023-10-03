import resgateRoutes from "@modules/resgate/infra/http/routes/Resgate.routes";
import { Router } from "express";
const routes = Router();

routes.use("/resgate", resgateRoutes);

export default routes;
