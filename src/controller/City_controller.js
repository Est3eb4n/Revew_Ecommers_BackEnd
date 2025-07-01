import City from "../models/City_models.js";
import { ObjectId } from "mongodb";

export default class CityController{

    #cityModel;

    constructor(){
        this.#cityModel = new City();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const city = await this.#cityModel.getAll()
        res.json(city);
    };
    async getById(req,res){
        const city = await this.#cityModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(city);
    };
    async create(req,res){
        const result = await this.#cityModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#cityModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#cityModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}