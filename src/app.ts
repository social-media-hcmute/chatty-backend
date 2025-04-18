import express, { Express } from 'express';
import { SocialMediaServer } from './setupServer';
import databaseConnection from './setupDatabase';
import { config } from './config';

class Application {
  public async initialize(): Promise<void> {
    this.loadConfig();
    await databaseConnection();
    const app: Express = express();
    const server: SocialMediaServer = new SocialMediaServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
