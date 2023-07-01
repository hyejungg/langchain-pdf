import { createClient } from 'redis';
import config from '../config';

const client = createClient({
  url: config.redisUrl,
});

const connectRedis = async () => {
  await client.connect().then(() => {
    console.log('#### Redis connected ..... ####');
  });
};

const disConnectRedis = async () => {
  await client.disconnect();
};

export default { connectRedis, client, disConnectRedis };
