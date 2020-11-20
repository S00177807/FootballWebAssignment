
import  mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {type: String, required:true},
    age: {type: String, required:true},
    desc: {type: String, required:true},
    position: {type: String, required:true},
    rating: {type: String, required:true},
    fifaRating: {type: String, required:true}
}
,{toJSON: {virtuals: true}})

PlayerSchema.virtual('uri').get(function()  {
return `/players/${this._id}`;
});

PlayerSchema.plugin(uniqueValidator);

let Player = mongoose.model('Player',PlayerSchema);

export {Player}
