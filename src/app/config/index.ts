import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from the .env file in the project root
dotenv.config({ path: path.join(process.cwd(), '.env') }); // project-dir/.env

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
};
