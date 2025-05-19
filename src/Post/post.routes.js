import { Router } from 'express'

import { 
        createPost, 
        getPosts, 
        getPostById,
<<<<<<< Updated upstream
=======
        getPostByCourse,
        getPostByDateCreate,
>>>>>>> Stashed changes
        updatePost,
        deletePost
    } from './post.controller.js'
import { 
        registervalidatePost,
        updatevalidatePost,
<<<<<<< Updated upstream
        getPostByID
=======
        getValidatePostByID,
        getValidatePostCourse,
        getValidatePostCreat
>>>>>>> Stashed changes
    } from '../../middlewares/validators.js'

const api = Router()

api.post('/posts', registervalidatePost ,createPost)
api.get('/posts', getPosts)
<<<<<<< Updated upstream
api.get('/posts/:id', getPostByID, getPostById)
api.put('/posts/:id',updatevalidatePost, getPostByID, updatePost)
api.delete('/posts/:id',getPostByID, deletePost)
=======
api.get('/posts/:id', getValidatePostByID, getPostById)
api.get('/posts/posts/:course', getValidatePostCourse, getPostByCourse)
api.get('/posts/createdAt/:createdAt',getValidatePostCreat, getPostByDateCreate)
api.put('/posts/:id',updatevalidatePost, getValidatePostByID, updatePost)
api.delete('/posts/:id',getValidatePostByID, deletePost)
>>>>>>> Stashed changes
export default api