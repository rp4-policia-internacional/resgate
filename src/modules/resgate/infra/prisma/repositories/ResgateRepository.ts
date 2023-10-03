
import ICreateResgateDTO from "@modules/resgate/dtos/ICreateResgate.dto";
import ResgateEntity from "@modules/resgate/entities/Resgate.entity";
import IResgateRepository from "@modules/resgate/repositories/IResgateRepository";
import { prisma } from "@shared/infra/prisma";

export default class ResgateRepository implements IResgateRepository {
  public async create(data: ICreateResgateDTO): Promise<ResgateEntity> {
    const resgate = await prisma.resgate.create({ data });

    return resgate as unknown as ResgateEntity;
  }

  public async delete(id: string): Promise<void> {
    await prisma.resgate.delete({ where: { id } });
  }
  public async findById(id: string): Promise<ResgateEntity> {
    const resgate = await prisma.resgate.findUnique({ where: { id } });

    return resgate as unknown as ResgateEntity;
  }
  public async update(data: ResgateEntity): Promise<ResgateEntity> {
    const resgate = await prisma.resgate.update({ where: { id: data.id }, data });

    return resgate as unknown as ResgateEntity;
  }
  public async listAll(): Promise<ResgateEntity[]> {
    return await prisma.resgate.findMany();
  }
}
