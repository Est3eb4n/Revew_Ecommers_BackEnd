import express from "express";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";
import CreateUserDTO from "../dtos/create-user.dto.js";

const userRouter = express.Router();

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    phone: String,
    addres: String,
    active: Boolean
});

const User = mongoose.model('user', userSchema);

const validation = [
    body('name').exists().isString().isLength({min:2}).withMessage(),
    body('email').exists().isEmail().withMessage(),
    body('username').exists().isString().isLength({min:6}).withMessage(),
    body('password').exists().isString().isLength({min:8}).withMessage()
]

userRouter.post('/', validation, (req, res) =>{
    const errors = validationResult(req);
        if(! errors. isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        
        userRouter.insertOne({...CreateUserDTO(new CreateUserDTO(req.body)), active:true})
        .then(doc => res.send(doc))
        .catch(error => res.send(error))
        })
        userRouter.get('/', (req,res)=>{
            User.find({}).then((doc)=>{
                res.send(doc)
            })
            .catch((err)=> res.send('error'));
        });
        userRouter.put('/:id', (req, res) =>{
            User.updateOne(req, params, {$set: req.body}).then((doc)=>{
                res.send(doc)
            })
        });
        userRouter.delete('/:id', (req, res)=>{
            User.deleteOne(req.params).then((doc)=>{
                res.send(doc)
            })
            .catch((err)=>res.send('error'))
        });
        
export default userRouter;