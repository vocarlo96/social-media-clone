import express from 'express'
import * as profileController from '../controllers/profiles.js'

const router = express.Router()

router.get('/', profileController.getProfiles)
router.post('/', profileController.createProfile)
router.put('/', profileController.updateProfile)

export default router