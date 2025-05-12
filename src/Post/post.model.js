import {model, Schema} from 'mongoose';

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, 'EL titulo es requerido'],
        trim: true,
        maxlength: [100, 'El titulo no puede tener mas de 100 caracteres']
    },
    description: {
        type: String,
        required: [true, 'La descripcion es requerida'],
        trim: true
    },
    course: {
        type: String,
        required: [true, ' Debe especificar el curso'],
        enum: {
            values: ['Tecnología', 'Practica Supervisada', 'Taller'],
            message: '{VALUE} no es un curso valido'
        },
        trim: true
    },
}, {
    timestamps: true
})

export default model ('Post', postSchema)