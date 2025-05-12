import {model, Schema} from 'mongoose';

const commentSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: [true, 'El id del post es requerido']
    },
    userName: {
        type: String,
        required: [true, 'El nombre de usuario es requerido'],
        trim: true,
        maxlength: [50, 'El nombre de usuario no puede tener mas de 50 caracteres']
    },
    content: {
        type: String,
        required: [true, 'El contenido del comentario es requerido'],
        trim: true,
        maxlength: [500, 'El comentario no puede tener mas de 500 caracteres']
    },
    timestamp: true
})
export default model ('Comment', commentSchema)
