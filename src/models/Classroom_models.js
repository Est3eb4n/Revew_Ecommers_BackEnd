import ClassRoomDTO from '../dto/Classrooms.dto.js'
import mongoose from 'mongoose';

const classroomSchema = new mongoose.Schema({
    name: String,
    descripition: String,
    details: String,
    dataRange: Date,
    active: Boolean
});

const classroom = mongoose.model('Classroom', classroomSchema);

export default class Classroom{
    async create(){
        classroom.inserOne({...(new ClassRoomDTO(req.body)), active: true })
            .then(doc => res.send(doc))
            .catch(error => send(doc))
        
            return classroom.find().toArray();
    };
    async get(){
        classroom.find({}).then((docs)=>{
            res.send(docs);
        })
        .catch((err)=> res.send('error'));
        
        return classroom.fing().toArray()    
    }
    async put(){
        classroom.updateOne(req, params, {$set: req.body}).them((docs)=>{
            res.send(docs)
        })
        .catch((err) => res.send('error'));
        return classroom.updateOne({_id},{$set: suodateData})
    };
    async delete(){
        classroom.deleteOne(req, params).then((docs) => {
            res.send(docs)
        })
        .catch((err) => res.send('error'))
        return classroom.deleteOne({_id})
    }
}