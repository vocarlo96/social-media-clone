import express from "express";
import * as AuthControler from '../controllers/auth-controller'

const router = express.Router()

router.post('/login', AuthControler.login)
router.post('/sign-up', AuthControler.singUp)

export default router