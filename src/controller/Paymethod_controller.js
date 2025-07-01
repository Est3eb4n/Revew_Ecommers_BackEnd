import Paymethod from "../models/PayMethod_models.js";
import { ObjectId } from "mongodb";

export default class PaymethodController{

    #paymethodModel;

    constructor(){
        this.#paymethodModel = new Paymethod();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const classroom = await this.#paymethodModel.getAll()
        res.json(classroom);
    };
    async getById(req,res){
        const classroom = await this.#paymethodModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(classroom);
    };
    async create(req,res){
        const result = await this.#paymethodModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#paymethodModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#paymethodModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}