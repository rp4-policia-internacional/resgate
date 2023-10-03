import { injectable, inject } from "tsyringe";
import IResgateRepository from "../repositories/IResgateRepository";

@injectable()
class FindOneResgateService {
  constructor(
    @inject("ResgateRepository")
    private resgateRepository: IResgateRepository
  ) {}

  public async execute(id: string) {
    const findResgate = await this.resgateRepository.findById(id);
    return findResgate;
  }
}

export default FindOneResgateService;
