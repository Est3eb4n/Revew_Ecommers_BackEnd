import Course from "../models/Course_models.js";
import { ObjectId } from "mongodb";

export default class CourseController{

    #courseModel;

    constructor(){
        this.#courseModel = new Course();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const course = await this.#courseModel.getAll()
        res.json(course);
    };
    async getById(req,res){
        const course = await this.#courseModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(course);
    };
    async create(req,res){
        const result = await this.#courseModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#courseModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#courseModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}