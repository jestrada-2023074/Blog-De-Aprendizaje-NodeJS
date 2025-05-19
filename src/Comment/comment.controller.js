import Comment from './comment.model.js'

// Create a new comment
export const createComment = async (req, res) => {
    try {
        const data = req.body
        const comment = new Comment(data)
        await comment.save()

        return res.send({
            success: true,
            message: 'Comment created successfully',
            comment
        })
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
}
<<<<<<< Updated upstream
=======
export const getCommentByPostId = async (req, res) => {
    try{
        const { postId } = req.params;
        const comment = await Comment.find({ postId })
       
        return res.send({
            success: true,
            message: 'comentarios encontradas',
            data: comment
        });
    }catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'Error al todos los comentarios'
        })
    }
}
>>>>>>> Stashed changes

// Get all comments
export const getComments = async (req, res) => {
    try {
        const { limit = 20, skip = 0 } = req.query
        const comments = await Comment.find()
            .limit(Number(limit))
            .skip(Number(skip))

        return res.send({
            success: true,
            message: 'Comments found',
            comments
        })
    } catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
}

// Get a comment by ID
export const getCommentById = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.findById(id)

        return res.send({
            success: true,
            message: 'Comment found',
            comment
        })
    }catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
}

// Update a comment by ID
export const updateComment = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const comment = await Comment.findByIdAndUpdate(
            id,
            data,
            { new: true}
        )
        return res.send({
            success: true,
            message: 'Comment updated successfully',
            comment
        })
    }catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
}
// Delete a comment by ID
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params
        const deleteComment = await Comment.findByIdAndDelete(id)

        return res.send({
            success: true,
            message: 'Comment deleted successfully'
        })
    }catch (err) {
        console.error('General error:', err)
        return res.status(500).json({
            success: false,
            message: 'General error'
        })
    }
}