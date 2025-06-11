import express from "express";
import mongoose from "mongoose";
import PaymethodDTO from '../dtos/payMethod.dto.js';

const payMethodRouter = express.Router();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

const payMethodSchema = new mongoose.Schema({
    code: String,
    name: String,
    description: String,
    active: Boolean,
});
const Paymethod = mongoose.model('payMethod', payMethodSchema);

payMethodRouter.post('/', (req, res)=>{
   console.log({...(new PaymethodDTO(req.body)), active:true})
   Paymethod.insertOne({...(new PaymethodDTO(req.body)), active:true})
        .then(doc =>res.send(doc))
        .catch(error => res.send(error))
});

payMethodRouter.get('/', (req, res)=>{
   Paymethod.find({}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

payMethodRouter.put('/:id', (req, res)=>{
   Paymethod.updateOne(req,params, {$set: req.body}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

payMethodRouter.delete('/:id', (req, res)=>{
   Paymethod.deleteOne(req,params).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
})



export default payMethodRouter