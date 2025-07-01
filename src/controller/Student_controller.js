import Student from "../models/Student_models.js";
import { ObjectId } from "mongodb";

export default class StudentController{

    #studentModel;

    constructor(){
        this.#studentModel = new Student();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const student = await this.#studentModel.getAll()
        res.json(student);
    };
    async getById(req,res){
        const student = await this.#studentModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(student);
    };
    async create(req,res){
        const result = await this.#studentModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#studentModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#studentModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}