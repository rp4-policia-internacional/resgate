import ICreateResgateDTO from "../dtos/ICreateResgate.dto";
import ResgateEntity from "../entities/Resgate.entity";

export default interface IResgateRepository {
  create(data: ICreateResgateDTO): Promise<ResgateEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<ResgateEntity>;
  update(data: ResgateEntity): Promise<ResgateEntity>;
  listAll(): Promise<ResgateEntity[]>;
}
