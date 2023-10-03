import { Decimal } from "@prisma/client/runtime/library";

export default interface ICreateResgateDTO {
  id_vitima: string;
  id_pais_resgatado: string;
  id_pais_origem: string;
  data: Date;
  probabilidade: number;
}
