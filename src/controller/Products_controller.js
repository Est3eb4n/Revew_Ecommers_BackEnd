import Products from "../models/Products_models.js";
import { ObjectId } from "mongodb";

export default class ProductController{

    #productModel;

    constructor(){
        this.#productModel = new Products();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const course = await this.#productModel.getAll()
        res.json(course);
    };
    async getById(req,res){
        const course = await this.#productModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(course);
    };
    async create(req,res){
        const result = await this.#productModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#productModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#productModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}