import Post from './post.model.js';
<<<<<<< Updated upstream

=======
import Comment from '../Comment/comment.model.js'
>>>>>>> Stashed changes
// Create a new post
export const createPost = async (req, res) => {
    try {
        const data = req.body;
        const post = new Post(data);
        await post.save();
<<<<<<< Updated upstream

        return res.send({
            success: true,
            message: 'Post created successfully',
=======
 
        return res.send({
            success: true,
            message: 'Publicacion creada correctamente',
>>>>>>> Stashed changes
            post
        })  
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
<<<<<<< Updated upstream
            message: 'General error'
        })
    }
};

=======
            message: 'Error al crear la publicacion',
        })
    }
};
 
>>>>>>> Stashed changes
// Get all posts
export const getPosts = async (req, res) => {
    try {
        const { limit = 20, skip = 0 } = req.query;
        const posts = await Post.find()
            .limit(Number(limit))
            .skip(Number(skip))
<<<<<<< Updated upstream

        return res.send({
            success: true,
            message: 'Posts found',
=======
 
        return res.send({
            success: true,
            message: 'Publicaciones encontradas',
>>>>>>> Stashed changes
            posts
        })
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
<<<<<<< Updated upstream
            message: 'General error'
=======
            message: 'Error al obtener las publicaciones'
>>>>>>> Stashed changes
        })
    }
};
// Get a post by ID
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
<<<<<<< Updated upstream
        const post = await Post.findById(id);

        return res.send({
            success: true,
            message: 'Post found',
=======
        const post = await Post.findById(id)

 
        return res.send({
            success: true,
            message: 'Publicacion encontrada',
>>>>>>> Stashed changes
            post
        });
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
<<<<<<< Updated upstream
            message: 'General error'
        })
    }
};
=======
            message: 'Error al obtener las publicaciones'
        })
    }
}
// Get a post By Category
export const getPostByCourse = async (req, res) => {
    try{
        const { course } = req.params;
        const post = await Post.find({ course })
       
        return res.send({
            success: true,
            message: 'Publicaciones encontradas',
            data: post
        });
    }catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'Error al obtener las publicaciones'
        })
    }
}
// Get a post By Fecha
 
export const getPostByDateCreate= async (req, res) => {
    try{
        const { createdAt } = req.params;
        const post = await Post.find({ createdAt })
       
        if(!post.length){
            return res.status(404).send({
                success: false,
                message: 'Publicaciones no encontradas',
            })
        }      
        return res.send({
            success: true,
            message: 'Publicaciones encontradas',
            data: post
        })
    }catch (err) {
        console.error('General error', err);
        return res.status(500).send({
            success: false,
            message: 'Error al obtener las publicaciones',
            err
        })
    }
}
 
>>>>>>> Stashed changes
// Update a post by ID
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
<<<<<<< Updated upstream
        
=======
       
>>>>>>> Stashed changes
        const updatedPost = await Post.findByIdAndUpdate(
         id,
         data,
            { new: true,  }
        )
        return res.send({
            success: true,
<<<<<<< Updated upstream
            message: 'Post updated successfully',
=======
            message: 'Publicacion actualizada correctamente',
>>>>>>> Stashed changes
            post: updatedPost
        })
        }catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
<<<<<<< Updated upstream
            message: 'General error'
=======
            message: 'Error al actualizar la publicacion',
>>>>>>> Stashed changes
        })
    }
};
 // Delete a post by ID
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const deletePost = await Post.findByIdAndDelete(id)
<<<<<<< Updated upstream
        
        return res.send({
            success: true,
            message: 'Post deleted successfully'
=======
       
        return res.send({
            success: true,
            message: 'Publicacion eliminada correctamente',
>>>>>>> Stashed changes
        })
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
<<<<<<< Updated upstream
            message: 'General error'
=======
            message: 'Error al eliminar la publicacion'
>>>>>>> Stashed changes
        })
    }
}