import express from "express";
import mongoose from "mongoose";
import ProductDTO from "../dtos/products.dto.js";

const productRouter = express.Router();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

const productSchema = new mongoose.Schema({
    code: String,
    name: String,
    price: Number,
    active: Boolean,
});
const Product = mongoose.model('product', productSchema);

productRouter.post('/', (req, res)=>{
   console.log({...(new ProductDTO(req.body)), active:true})
   Product.insertOne({...(new ProductDTO(req.body)), active:true})
        .then(doc =>res.send(doc))
        .catch(error => res.send(error))
});

productRouter.get('/', (req, res)=>{
   Product.find({}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

productRouter.put('/:id', (req, res)=>{
   Product.updateOne(req,params, {$set: req.body}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

productRouter.delete('/:id', (req, res)=>{
   Product.deleteOne(req,params).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
})



export default productRouter