import {Router} from 'express'
import * as retweetControler from '../controllers/retweets'

const router = Router();

router.get('/', retweetControler.getAllRetweets)
router.post('/', retweetControler.setRetweet)
router.delete('/:id', retweetControler.deleteRetweet)

export default router