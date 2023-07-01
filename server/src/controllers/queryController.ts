import { Request, Response } from 'express';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import { queryService } from '../services';

const chatOpenAiWithLangchain = async (req: Request, res: Response) => {
  try {
    if (!req.body.question) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));

    const question = req.body.question as string;
    console.log(`@@ request query: ${question}`);
    const data = await queryService.chatOpenAIByEmbeddingQuery(question);
    console.log(`@@ response: ${JSON.stringify(data)}`);
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_CHAT_SUCCESS, data));
  } catch (err) {
    console.error(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default { chatOpenAiWithLangchain };
