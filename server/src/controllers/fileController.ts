import { Request, Response } from 'express';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import { fileService } from '../services';

const uploadFile = (req: Request, res: Response) => {
  try {
    if (!req.file) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));

    const file = req.file as Express.Multer.File;
    console.log(file);
    const { originalname, path } = file;
    const data = fileService.fileIntoVectorStore(originalname, path);
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_FILE_SUCCESS, null));
  } catch (err) {
    console.error(err);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default { uploadFile };
