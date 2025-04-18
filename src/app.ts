import express, { Express } from 'express';
import { SocialMediaServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabase';
import { config } from '@root/config';

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
