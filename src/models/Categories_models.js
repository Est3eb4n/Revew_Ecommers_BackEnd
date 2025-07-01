import CategoryDTO from '../dto/categories.dto.js';
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    code: String,
    name: String,
    description: String,
    active: Boolean
});

const category = mongoose.model('Categories', categorySchema);

export default class Category{
    async create(){
        category.inserOne({...(new CategoryDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return category.find().toArray();
    };
    async get(){
        category.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return category.fing().toArray()    
    }
    async put(){
        category.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return category.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        category.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return category.deleteOne({_id})
    }
}