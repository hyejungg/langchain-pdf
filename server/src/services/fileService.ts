import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { RedisVectorStore } from 'langchain/vectorstores/redis';
import pdfLoader from '../loaders/pdf';
import redis from '../loaders/redis';

const fileIntoVectorStore = async (originalname: string, path: string): Promise<void> => {
  try {
    const docs = await pdfLoader(path);

    const vectorStore = await RedisVectorStore.fromDocuments(docs, new OpenAIEmbeddings(), {
      redisClient: redis.client,
      indexName: 'docs',
    });
    console.log(`vectorStore에 저장 성공 - keyPrefix: ${vectorStore.keyPrefix}`);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default { fileIntoVectorStore };
