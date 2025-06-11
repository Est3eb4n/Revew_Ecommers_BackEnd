import express from "express";
import mongoose from "mongoose";
import CategoryDTO from '../dtos/categories.dto.js';

const categoryRouter = express.Router();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

const categorySchema = new mongoose.Schema({
    code: String,
    name: String,
    description: String,
    active: Boolean,
});
const Categoty = mongoose.model('category', categorySchema);

categoryRouter.post('/', (req, res)=>{
   console.log({...(new CategoryDTO(req.body)), active:true})
   Categoty.insertOne({...(new CategoryDTO(req.body)), active:true})
        .then(doc =>res.send(doc))
        .catch(error => res.send(error))
});

categoryRouter.get('/', (req, res)=>{
   Categoty.find({}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

categoryRouter.put('/:id', (req, res)=>{
   Categoty.updateOne(req,params, {$set: req.body}).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
});

categoryRouter.delete('/:id', (req, res)=>{
   Categoty.deleteOne(req,params).then((docs) =>{
    res.send(docs)
   })
   .catch((err) => res.send('error'));
})

export default categoryRouter