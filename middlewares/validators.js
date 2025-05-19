import {
    param,
    body
} from 'express-validator';
<<<<<<< Updated upstream
import { 
=======
import {
>>>>>>> Stashed changes
        validateErrorsWithoutFiles
    } from '../middlewares/validate.error.js';
import {
    RequiredField,
    postExists,
<<<<<<< Updated upstream
    commentExists
} from '../utils/db.validators.js'

=======
    commentExists,
    courseExists,
} from '../utils/db.validators.js'
 
>>>>>>> Stashed changes
export const registervalidatePost = [
        body('title')
            .exists()
            .withMessage('El título es requerido')
            .custom(RequiredField)
            .withMessage('El título no puede estar vacío')
            .isLength({ min: 5, max: 100 })
            .withMessage('El título debe tener entre 5 y 100 caracteres')
            .trim(),
        body('description')
            .exists()
            .withMessage('la descripcion es requerida')
            .custom(RequiredField)
            .withMessage('la descripcion no puede estar vacía')
            .trim(),
        body('course')
            .exists()
            .withMessage('El curso es requerido')
            .custom(RequiredField)
            .withMessage('El curso no puede estar vacío')
            .isIn(['Tecnología', 'Practica Supervisada', 'Taller'])
            .withMessage('El curso no es válido')
            .trim(),
        validateErrorsWithoutFiles
]
export const updatevalidatePost = [
        body('title')
            .optional()
            .custom(RequiredField)
            .withMessage('El título no puede estar vacío')
            .isLength({ min: 5, max: 100 })
            .withMessage('El título debe tener entre 5 y 100 caracteres')
            .trim(),
        body('description')
<<<<<<< Updated upstream
            .optional() 
=======
            .optional()
>>>>>>> Stashed changes
            .custom(RequiredField)
            .withMessage('la descripción no puede estar vacía')
            .trim(),
        body('course')
            .optional()
            .custom(RequiredField)
            .withMessage('El curso no puede estar vacío')
            .isIn(['Tecnología', 'Practica Supervisada', 'Taller'])
            .withMessage('El curso no es válido')
            .trim(),
        validateErrorsWithoutFiles
]
export const registerValidateComment = [
    body('postId')
        .custom(postExists)
        .withMessage('El id del post no existe')
        .exists()
        .withMessage('El id del post es requerido')
        .custom(RequiredField)
        .withMessage('El id del post no puede estar vacío')
        .isMongoId()
        .withMessage('El id del post no es válido')
        .trim(),
    body('userName')
        .exists()
        .withMessage('El nombre de usuario es requerido')
        .custom(RequiredField)
        .withMessage('El nombre de usuario no puede estar vacío')
        .isLength({ min: 3, max: 50 })
        .withMessage('El nombre de usuario debe tener entre 3 y 50 caracteres')
        .trim(),
<<<<<<< Updated upstream
    body('content') 
=======
    body('content')
>>>>>>> Stashed changes
        .exists()
        .withMessage('El contenido del comentario es requerido')
        .custom(RequiredField)
        .withMessage('El contenido del comentario no puede estar vacío')
        .isLength({ min: 1, max: 500 })
        .withMessage('El comentario debe tener entre 1 y 500 caracteres')
        .trim(),    
        validateErrorsWithoutFiles
]
export const updateValidateComment = [
    body('postId')
        .custom(postExists)
        .withMessage('El id del post no existe')
        .isMongoId()
        .withMessage('El id del post no es válido')
        .custom(RequiredField)
        .withMessage('El id del post no existe')
        .trim(),
    body('userName')
        .optional()
        .isLength({ min: 3, max: 50 })
        .withMessage('El nombre de usuario debe tener entre 3 y 50 caracteres')
        .trim(),
    body('content')
        .optional()
        .isLength({ min: 1, max: 500 })
        .withMessage('El comentario debe tener entre 1 y 500 caracteres')
        .custom(RequiredField)
        .withMessage('El contenido del comentario no es válido')
        .trim(),
    validateErrorsWithoutFiles
]
<<<<<<< Updated upstream
export const getPostByID = [
=======
export const getValidatePostByID = [
>>>>>>> Stashed changes
    param('id')
        .notEmpty()
        .withMessage('El id del post es requerido')
        .isMongoId()
        .withMessage('El id del post no es válido')
        .custom(postExists),
    validateErrorsWithoutFiles
]
export const getCommentByID = [
    param('id')
        .notEmpty()
        .withMessage('El id del comentario es requerido')
        .isMongoId()
        .withMessage('El id del post no es válido')
        .custom(commentExists),
    validateErrorsWithoutFiles
]
<<<<<<< Updated upstream

=======
export const getValidatePostCourse = [
    param('course')
        .notEmpty()
        .withMessage('El curso es requerido')
        .custom(courseExists)
        .withMessage('El curso no es válido'),
    validateErrorsWithoutFiles
]
 
export const getValidatePostCreat = [
    param('createdAt')
        .notEmpty()
        .withMessage('La fecha es requerido')
        .isISO8601()  
        .withMessage('La fecha no es válida'),
    validateErrorsWithoutFiles
]
 
>>>>>>> Stashed changes
