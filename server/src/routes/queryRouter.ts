import { Router } from 'express';
import { queryController } from '../controllers';

const router: Router = Router();

router.post('/chat', queryController.chatOpenAiWithLangchain);

export default router;
