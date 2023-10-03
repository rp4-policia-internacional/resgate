import { injectable, inject } from "tsyringe";
import IResgateRepository from "../repositories/IResgateRepository";

@injectable()
class ListResgateService {
  constructor(
    @inject("ResgateRepository")
    private resgateRepository: IResgateRepository
  ) {}

  public async execute() {
    return await this.resgateRepository.listAll();
  }
}

export default ListResgateService;
