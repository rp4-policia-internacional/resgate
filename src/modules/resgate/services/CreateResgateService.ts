
import { inject, injectable } from "tsyringe";
import ICreateResgateDTO from "../dtos/ICreateResgate.dto";
import IResgateRepository from "../repositories/IResgateRepository";
import ResgateEntity from "../entities/Resgate.entity";


@injectable()
class CreateResgateService{

    constructor(
        @inject('ResgateRepository')
        private resgateRepository: IResgateRepository
    ){}
        public async execute(data: ICreateResgateDTO): Promise<ResgateEntity>{
            
            data.probabilidade = Math.random();
            let numeroAleatorio = data.probabilidade * 11; 


            while(numeroAleatorio > 10 || numeroAleatorio < 1) {
                numeroAleatorio = Math.random() * 11;
            }

            data.probabilidade = numeroAleatorio;
          
            const resgate = await this.resgateRepository.create(data);
            return resgate;
        }
}
export default CreateResgateService;