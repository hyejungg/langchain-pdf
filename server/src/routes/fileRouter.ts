import { Router } from 'express';
import upload from '../config/multer';
import { fileController } from '../controllers';

const router: Router = Router();

router.post('/embedding', upload.single('file'), fileController.uploadFile);

export default router;
