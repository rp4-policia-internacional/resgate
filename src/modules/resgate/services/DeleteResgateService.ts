import { inject, injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import IResgateRepository from "../repositories/IResgateRepository";

@injectable()
class DeleteResgateService {
  constructor(
    @inject("ResgateRepository")
    private resgateRepository: IResgateRepository
  ) {}
  public async execute(id: string): Promise<void> {
    const findResgate = await this.resgateRepository.findById(id);

    if (!findResgate) {
      throw new AppError("País não encontrado!!", 404);
    }

    await this.resgateRepository.delete(id);

    return;
  }
}

export default DeleteResgateService;
