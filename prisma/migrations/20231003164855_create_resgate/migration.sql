-- CreateTable
CREATE TABLE "Resgate" (
    "id" TEXT NOT NULL,
    "id_vitima" VARCHAR NOT NULL,
    "id_pais_resgatado" VARCHAR NOT NULL,
    "id_pais_origem" VARCHAR NOT NULL,
    "data" DATE NOT NULL,
    "probabilidade" INTEGER NOT NULL,

    CONSTRAINT "Resgate_pkey" PRIMARY KEY ("id")
);
