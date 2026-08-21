import express from 'express'
import { loginUser, logoutUser, registerUser, verifyUser } from '../Controller/AuthControllers.js'
import protect from '../middleware/auth.js'


const AuthRouter= express.Router();

AuthRouter.post('/register',resgisterUser)
AuthRouter.post('/login',loginUser)
AuthRouter.get('/verify',protect,verifyUser)
AuthRouter.post('/logout',protect,logoutUser)

export default AuthRouter
