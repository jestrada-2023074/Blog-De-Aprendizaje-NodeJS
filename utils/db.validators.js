<<<<<<< Updated upstream
import { 
        isValidObjectId 
    } from "mongoose"

=======
import {
        isValidObjectId
    } from "mongoose"
 
>>>>>>> Stashed changes
import Post from "../src/Post/post.model.js"
import Comment from "../src/Comment/comment.model.js"
// Validar que el id del post existe
export const postExists = async (id) => {
    const post = await Post.findById(id);
    if (!post) throw new Error('post not found');
    return true;
}
export const commentExists = async (id) => {
    const comment = await Comment.findById(id);
    if (!comment) throw new Error('comment not found');
    return true;
}
<<<<<<< Updated upstream



=======
export const courseExists = async ( course = '') => {
    const exists = await Post.findOne({ course });
    if (!exists) throw new Error('course not found');
    return true;
}
 
 
 
>>>>>>> Stashed changes
// Validar campo requerido
export const RequiredField = (field) => {
    if (field === undefined || field === null) {
        throw new Error(`${field} El campo es requerido`);
    }
    if (typeof field === "string" && field.trim() === "") {
        throw new Error(`${field} no puede estar vacío`);
    }
    return true;
};
<<<<<<< Updated upstream


=======
 
>>>>>>> Stashed changes
