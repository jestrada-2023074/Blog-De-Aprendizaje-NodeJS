import { Router } from 'express'

import { 
        createPost, 
        getPosts, 
        getPostById,
        updatePost,
        deletePost
    } from './post.controller.js'
import { 
        registervalidatePost,
        updatevalidatePost,
        getPostByID
    } from '../../middlewares/validators.js'

const api = Router()

api.post('/posts', registervalidatePost ,createPost)
api.get('/posts', getPosts)
api.get('/posts/:id', getPostByID, getPostById)
api.put('/posts/:id',updatevalidatePost, getPostByID, updatePost)
api.delete('/posts/:id',getPostByID, deletePost)
export default api