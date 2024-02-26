import express from 'express'
import auth from '../middleware/auth.js'

import {postComment,getComment,deleteComment,editComment} from '../controllers/comments.js'

const routes=express.Router()

routes.post('/post',auth,postComment)
routes.get('/get',getComment)
routes.delete('/delete/:id',auth,deleteComment)
routes.patch('/edit/:id',auth,editComment)

export default routes;