import { inject, injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import IResgateRepository from "../repositories/IResgateRepository";
import ResgateEntity from "../entities/Resgate.entity";

@injectable()
class UpdateResgateService {
  constructor(
    @inject("ResgateRepository")
    private resgateRepository: IResgateRepository
  ) {}

  public async execute(data: ResgateEntity): Promise<ResgateEntity> {
    const findResgate = await this.resgateRepository.findById(data.id);

    if (!findResgate) {
      throw new AppError("País não encontrado!!", 404);
    }

    const updateResgate = await this.resgateRepository.update(data);
    return updateResgate;
  }
}

export default UpdateResgateService;
