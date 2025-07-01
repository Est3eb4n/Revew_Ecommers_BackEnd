import PaymethodDTO from '../dto/paymentMethod.dto.js'
import mongoose from 'mongoose';

const paymethodSchema = new mongoose.Schema({
    code: String,
    name: String,
    description: String,
    active: Boolean
});

const payM = mongoose.model('Paymethod', paymethodSchema);

export default class Paymethod{
    async create(){
        payM.inserOne({...(new PaymethodDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return payM.find().toArray();
    };
    async get(){
        payM.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return payM.fing().toArray()    
    }
    async put(){
        payM.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return payM.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        payM.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return payM.deleteOne({_id})
    }
}