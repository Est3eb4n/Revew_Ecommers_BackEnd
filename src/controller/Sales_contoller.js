import Sales from "../models/Sales_models.js";
import { ObjectId } from "mongodb";

export default class SalesController{

    #saleModel;

    constructor(){
        this.#saleModel = new Sales();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const inscription = await this.#saleModel.getAll()
        res.json(inscription);
    };
    async getById(req,res){
        const inscription = await this.#saleModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(inscription);
    };
    async create(req,res){
        const result = await this.#saleModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#saleModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#saleModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}