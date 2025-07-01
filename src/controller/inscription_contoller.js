import Inscription from "../models/Inscription_models.js";
import { ObjectId } from "mongodb";

export default class InscriptionController{

    #inscriptionModel;

    constructor(){
        this.#inscriptionModel = new Inscription();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const inscription = await this.#inscriptionModel.getAll()
        res.json(inscription);
    };
    async getById(req,res){
        const inscription = await this.#inscriptionModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(inscription);
    };
    async create(req,res){
        const result = await this.#inscriptionModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#inscriptionModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#inscriptionModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}