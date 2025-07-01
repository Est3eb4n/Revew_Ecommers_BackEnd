import User  from "../models/user_models.js";
import { ObjectId } from "mongodb";

export default class UserController{

    #userModel;

    constructor(){
        this.#userModel = new User();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const user = await this.#userModel.getAll()
        res.json(user);
    };
    async getById(req,res){
        const user = await this.#userModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(user);
    };
    async create(req,res){
        const result = await this.#userModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#userModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#userModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}