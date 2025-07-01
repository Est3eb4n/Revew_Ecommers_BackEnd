import TopicsDTO from "../dto/Topics.dto.js"; 
import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    title: String,
    description: String,
    active: Boolean
});

const topic = mongoose.model('Topic', topicSchema);

export default class Topic{
    async create(){
        topic.inserOne({...(new TopicsDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return topic.find().toArray();
    };
    async get(){
        topic.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return topic.fing().toArray()    
    }
    async put(){
        topic.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return topic.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        topic.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return topic.deleteOne({_id})
    }
}