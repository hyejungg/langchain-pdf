import fileRouter from './fileRouter';
import queryRouter from './queryRouter';

// router index file
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Langchain-pdf!!'));
router.use('/file', fileRouter);
router.use('/query', queryRouter);

export default router;
