import queryWithOpenAi from '../modules/redisQuery';

const chatOpenAIByEmbeddingQuery = async (question: string): Promise<object> => {
  try {
    const data = await queryWithOpenAi(question);

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default { chatOpenAIByEmbeddingQuery };
