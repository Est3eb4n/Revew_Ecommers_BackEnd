import CoursesDTO from "../dto/Courses.dto.js";
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    details: String,
    datarange: Date,
    active: Boolean,
});

const course = mongoose.model('Courses', courseSchema);

export default class Courses{
    async create(){
        course.inserOne({...(new CoursesDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return course.find().toArray();
    };
    async get(){
        course.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return course.fing().toArray()    
    }
    async put(){
        course.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return course.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        course.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return course.deleteOne({_id})
    }
}