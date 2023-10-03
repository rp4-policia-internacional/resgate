class ResgateEntity{
  id: string;
  id_vitima: string;
  id_pais_resgatado: string;
  id_pais_origem: string;
  data: Date;
  probabilidade: number;


  constructor(id: string, id_vitima: string, id_pais_resgatado: string, id_pais_origem: string, data: Date, probabilidade: number) {
      this.id = id;
      this.id_vitima = id_vitima;
      this.id_pais_resgatado = id_pais_resgatado;
      this.id_pais_origem = id_pais_origem;
      this.data = data;
      this.probabilidade = probabilidade;
  }

}

export default ResgateEntity;