import { Router } from 'express';
import { 
        createComment, 
        getComments, 
        getCommentById,
        updateComment,
        deleteComment
    } from './comment.controller.js';
import { 
        registerValidateComment,
        updateValidateComment,
        getCommentByID
    } from '../../middlewares/validators.js';
const api = Router()

api.post('/comments',registerValidateComment, createComment)
api.get('/comments', getComments)   
api.get('/comments/:id',getCommentByID, getCommentById)
api.put('/comments/:id', updateValidateComment, getCommentByID, updateComment)   
api.delete('/comments/:id', getCommentByID, deleteComment)
export default api
