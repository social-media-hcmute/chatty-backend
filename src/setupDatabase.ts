import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';
import { redisConnection } from '@service/redis/redis.connection';

const log: Logger = config.createLogger('setupDatabase');
export default async () => {
  const connect = async () => {
    try {
      await mongoose.connect(`${config.DATABASE_URL}`, {
        dbName: config.DATABASE_NAME
      });
      log.info('MongoDB connected successfully');
      redisConnection.connect();
    } catch (error) {
      log.error('MongoDB connection error:', error);
      process.exit(1);
    }
  };
  await connect();

  mongoose.connection.on('disconnected', async () => {
    log.info('MongoDB disconnected. Reconnecting...');
    await connect();
  });
};
