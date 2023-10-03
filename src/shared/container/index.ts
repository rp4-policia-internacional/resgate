
import { container } from "tsyringe";
import IResgateRepository from "@modules/resgate/repositories/IResgateRepository";
import ResgateRepository from "@modules/resgate/infra/prisma/repositories/ResgateRepository";

container.registerSingleton<IResgateRepository>("ResgateRepository", ResgateRepository);
