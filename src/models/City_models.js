import CityDTO from '../dto/Cities.dto.js';
import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    codecity: String,
    country: String,
    satate: String,
});

const city = mongoose.model('City', citySchema);

export default class City{
    async create(){
        city.inserOne({...(new CityDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return city.find().toArray();
    };
    async get(){
        city.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return city.fing().toArray()    
    }
    async put(){
        city.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return city.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        city.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return city.deleteOne({_id})
    }
}