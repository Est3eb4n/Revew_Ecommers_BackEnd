import Category from "../models/Categories_models.js";
import { ObjectId } from "mongodb";

export default class CategoryController{

    #categoryModel;

    constructor(){
        this.#categoryModel = new Category();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const city = await this.#categoryModel.getAll()
        res.json(city);
    };
    async getById(req,res){
        const city = await this.#categoryModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(city);
    };
    async create(req,res){
        const result = await this.#categoryModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#categoryModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#categoryModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}