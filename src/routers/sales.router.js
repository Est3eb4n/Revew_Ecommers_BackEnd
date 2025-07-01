import express from "express";
import mongoose from "mongoose";
import SalesDTO from '../dtos/sales.dto.js';

const salesRouter = express.Router();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

const salesSchema = new mongoose.Schema({
    reference: String,
    date: String,
    paymentMethod: String,
    client: String,
    seller: String,
    details: String,
});
const Sales = mongoose.model('sales', salesSchema);

salesRouter.post('/', (req, res)=>{
   console.log({...(new SalesDTO(req.body)), active:true})
   Sales.insertOne({...(new SalesDTO(req.body)), active:true})
        .then(doc =>res.send(doc))
        .catch(error => res.send(error))
});

salesRouter.get('/', (req, res)=>{
   Sales.find({}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

salesRouter.put('/:id', (req, res)=>{
   Sales.updateOne(req,params, {$set: req.body}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

salesRouter.delete('/:id', (req, res)=>{
   Sales.deleteOne(req,params).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
})



export default salesRouter