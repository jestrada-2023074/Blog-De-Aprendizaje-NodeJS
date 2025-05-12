import Post from './post.model.js';

// Create a new post
export const createPost = async (req, res) => {
    try {
        const data = req.body;
        const post = new Post(data);
        await post.save();

        return res.send({
            success: true,
            message: 'Post created successfully',
            post
        })  
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
};

// Get all posts
export const getPosts = async (req, res) => {
    try {
        const { limit = 20, skip = 0 } = req.query;
        const posts = await Post.find()
            .limit(Number(limit))
            .skip(Number(skip))

        return res.send({
            success: true,
            message: 'Posts found',
            posts
        })
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
};
// Get a post by ID
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);

        return res.send({
            success: true,
            message: 'Post found',
            post
        });
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
};
// Update a post by ID
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        
        const updatedPost = await Post.findByIdAndUpdate(
         id,
         data,
            { new: true,  }
        )
        return res.send({
            success: true,
            message: 'Post updated successfully',
            post: updatedPost
        })
        }catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
};
 // Delete a post by ID
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const deletePost = await Post.findByIdAndDelete(id)
        
        return res.send({
            success: true,
            message: 'Post deleted successfully'
        })
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
}