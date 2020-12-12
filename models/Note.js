import {Schema, model} from 'mongoose';
//model without ID

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        //trim: true
    },
    description: {
        type: String,
        //trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});
const Note = model('Note', noteSchema);
export default Note;