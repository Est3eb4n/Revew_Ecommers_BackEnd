import Classroom from "../models/Classroom_models.js";
import { ObjectId } from "mongodb";

export default class ClassroomController{

    #classroomModel;

    constructor(){
        this.#classroomModel = new Classroom();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const classroom = await this.#classroomModel.getAll()
        res.json(classroom);
    };
    async getById(req,res){
        const classroom = await this.#classroomModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(classroom);
    };
    async create(req,res){
        const result = await this.#classroomModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#classroomModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#classroomModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}