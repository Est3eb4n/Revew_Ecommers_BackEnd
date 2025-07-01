import TeacherDTO from "../dto/Teacher.odt.js";
import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    typeidentification: String,
    numberidentification: String,
    email: String,
    active: Boolean
});

const teacher = mongoose.model('Teacher', teacherSchema);

export default class Teacher{
    async create(){
        teacher.inserOne({...(new TeacherDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return teacher.find().toArray();
    };
    async get(){
        teacher.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return teacher.fing().toArray()    
    }
    async put(){
        teacher.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return teacher.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        teacher.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return teacher.deleteOne({_id})
    }
}