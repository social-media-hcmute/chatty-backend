import express, { Express } from "express";
import { SocialMediaServer } from "./setupServer";
import databaseConnection from "./setupDatabase";

class Application {
  public async initialize(): Promise<void> {
    await databaseConnection();
    const app: Express = express();
    const server: SocialMediaServer = new SocialMediaServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
