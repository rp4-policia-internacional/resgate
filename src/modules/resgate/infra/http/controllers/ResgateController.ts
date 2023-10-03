import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateResgateService from "@modules/resgate/services/CreateResgateService";
import DeleteResgateService from "@modules/resgate/services/DeleteResgateService";
import FindOneResgateService from "@modules/resgate/services/FindOneResgateService";
import ListResgateService from "@modules/resgate/services/ListResgateService";
import UpdateResgateService from "@modules/resgate/services/UpdateResgateService";

export default class ResgateController{
    public async create(req: Request, res: Response): Promise<Response> {
        const createResgate = container.resolve(CreateResgateService);

        const {id_vitima, id_pais_resgatado, id_pais_origem, data, probabilidade} = req.body;
        
        const formatedDate = new Date(data).toISOString();
        const createdResgate = await createResgate.execute({
            id_vitima, 
            id_pais_resgatado,  
            id_pais_origem, 
            data: new Date(formatedDate), 
            probabilidade
        });

        return res.json(createdResgate).status(201).send("Produto criado");
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const deleteResgate = container.resolve(DeleteResgateService);

        const {id} = req.params;
        
        const deletedResgate = await deleteResgate.execute(
            id
        );

        return res.json(deletedResgate).status(200).send();
        
    }

    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneResgate = container.resolve(FindOneResgateService);

        const {id} = req.params;

        const gotOneResgate = await getOneResgate.execute(
            id
        );

        return res.json(gotOneResgate).status(200).send("Ok");

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllResgate = container.resolve(ListResgateService);

        const gotAllResgate = await getAllResgate.execute();

        return res.json(gotAllResgate).status(200).send();
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const updateResgate = container.resolve(UpdateResgateService);

        const {id,id_vitima, id_pais_resgatado, id_pais_origem, data, probabilidade} = req.body;
        
        const formatedDate = new Date(data).toISOString();
        const createdResgate = await updateResgate.execute({
            id,
            id_vitima, 
            id_pais_resgatado, 
            id_pais_origem, 
            data: new Date(formatedDate), 
            probabilidade
        });

        return res.json(createdResgate).status(201).send("Captura alterada com sucesso");
    }
}