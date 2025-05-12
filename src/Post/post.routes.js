import { Router } from 'express'

import { 
        createPost, 
        getPosts, 
        getPostById,
        updatePost,
        deletePost
    } from './post.controller.js'

const api = Router()

api.post('/posts', createPost)
api.get('/posts', getPosts)
api.get('/posts/:id', getPostById)
api.put('/posts/:id', updatePost)
api.delete('/posts/:id', deletePost)
export default api