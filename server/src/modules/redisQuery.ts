import { CallbackManager } from 'langchain/callbacks';
import { ConversationalRetrievalQAChain } from 'langchain/chains';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { OpenAI } from 'langchain/llms/openai';
import { RedisVectorStore } from 'langchain/vectorstores/redis';
import config from '../config/index';
import redis from '../loaders/redis';

const MODEL_NAME = 'gpt-3.5-turbo';

const callbackManager = CallbackManager.fromHandlers({
  async handleLLMStart(llm, _prompts: string[]) {
    console.log('handleLLMStart', { llm, _prompts });
  },
  async handleChainStart(chain) {
    console.log('handleChainStart', { chain });
  },
  async handleAgentAction(action) {
    console.log('handleAgentAction', action);
  },
  async handleToolStart(tool) {
    console.log('handleToolStart', { tool });
  },
});

const model = new OpenAI({
  modelName: MODEL_NAME,
  openAIApiKey: config.openAiKey,
  temperature: 0,
  cache: true,
  verbose: true,
  callbackManager,
  streaming: true,
});

const queryWithOpenAi = async (query: string): Promise<object> => {
  const vectorStore = new RedisVectorStore(new OpenAIEmbeddings(), {
    redisClient: redis.client,
    indexName: 'docs',
  });

  const chain = ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(3));

  const chainRes = await chain.call({ question: query, chat_history: [] });

  const answer = { content: chainRes.text as string, history: chainRes.chat_history as any };

  return answer;
};

export default queryWithOpenAi;
