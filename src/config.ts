import dotenv from "dotenv";

dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public DATABASE_NAME: string | undefined;
  public CLIENT_URL: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public NODE_ENV: string | undefined;
  public REDIS_HOST: string | undefined;

  private readonly DEFAULT_DATABASE_URL =
    "mongodb://root:123456@localhost:27018/";

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    this.DATABASE_NAME = process.env.DATABASE_NAME || "social-media-backend";
    this.CLIENT_URL = process.env.CLIENT_URL || "";
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || "";
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || "";
    this.NODE_ENV = process.env.NODE_ENV || "";
    this.REDIS_HOST = process.env.REDIS_HOST || "";
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
