import Topic from "../models/Topic_models.js";
import { ObjectId } from "mongodb";

export default class TopicController{

    #topicModel;

    constructor(){
        this.#topicModel = new Topic();
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req,res){
        const topic = await this.#topicModel.getAll()
        res.json(topic);
    };
    async getById(req,res){
        const topic = await this.#topicModel.getById(ObjectId.createFromHexString(req.params.id))
        res.json(topic);
    };
    async create(req,res){
        const result = await this.#topicModel.create(req.body)
        res.json(result)
    };
    async update(req,res){
        const _id =ObjectId.createFromHexString(req.params.id);
        const result = await this.#topicModel.update(_id, req.body)
        res.json(result)
    };
    async delete(req,res){
        const result = await this.#topicModel.delete(ObjectId.createFromHexString(req.params.id))
        res.json(result)
    };
}