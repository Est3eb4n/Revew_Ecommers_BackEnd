import SalesDTO from "../dto/sales.dto.js";
import mongoose, { Types } from "mongoose";

const salesSchema = new mongoose.Schema({
    reference: String,
    date: String,
    paymentMethod: String,
    client: String,
    seller: String,
    details: String
});

const sale = mongoose.model('Sales', salesSchema);

export default class Sales{
    async create(){
        sale.inserOne({...(new SalesDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return sale.find().toArray();
    };
    async get(){
        sale.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return sale.fing().toArray()    
    }
    async put(){
        sale.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return sale.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        sale.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return sale.deleteOne({_id})
    }
}