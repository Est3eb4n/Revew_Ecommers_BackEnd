import CreateUserDTO from "../dto/create-users.dto.js";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    googleId: String,
    role:{
        type: String,
        enum:['admin','teacher', 'student'],
    },
    studentDetails: {
        grade: String,
        courses:[{ type: mongoose.Schema.Types.ObjectId, ref:'Course'}]
    },
    teacherDetails:{
        department: String,
        assignedCourses: [{type: mongoose.Schema.Types.ObjectId, ref:'Course'}]
    }
});

const user = mongoose.model('User', userSchema);

export default class User{
    async create(){
        user.inserOne({...(new CreateUserDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return user.find().toArray();
    };
    async get(){
        user.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return user.fing().toArray()    
    }
    async put(){
        user.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return user.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        user.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return user.deleteOne({_id})
    }
}