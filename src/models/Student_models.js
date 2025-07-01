import StudentDTO from "../dto/Students.dto.js";
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    typeidentification: String,
    numberidentification: String,
    gender: String,
    birthdate: String,
    contact: String,
    city: String,
    active: Boolean
});

const student = mongoose.model('Student', studentSchema);

export default class Student{
    async create(){
        student.inserOne({...(new StudentDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return student.find().toArray();
    };
    async get(){
        student.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return student.fing().toArray()    
    }
    async put(){
        student.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return student.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        student.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return student.deleteOne({_id})
    }
}