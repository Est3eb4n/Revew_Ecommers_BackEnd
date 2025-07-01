import Teacher from "../models/Teacher_models.js";
import { ObjectId } from "mongodb";

export default class TeacherController{

    #teacherModel;

    constructor(){
        this.#teacherModel = new Teacher();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const teacher = await this.#teacherModel.getAll()
        res.json(teacher);
    };
    async getById(req,res){
        const teacher = await this.#teacherModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(teacher);
    };
    async create(req,res){
        const result = await this.#teacherModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#teacherModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#teacherModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}