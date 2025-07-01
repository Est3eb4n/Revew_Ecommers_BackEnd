import ProductDTO from "../dto/products.dto.js";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    code: String,
    name: String,
    description: String,
    images: String,
    price: String,
    stock: String,
    brand: String,
    condition: String,
    category: String,
    sizes: String,
    colors: String,
    VAT: String
});

const product = mongoose.model('Products', productSchema);

export default class Products{
    async create(){
        product.inserOne({...(new ProductDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return product.find().toArray();
    };
    async get(){
        product.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return product.fing().toArray()    
    }
    async put(){
        product.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return product.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        product.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return product.deleteOne({_id})
    }
}