import express, {Router} from 'express';
import cds from '@sap/cds';
import cors from 'cors';
import { connectDB } from './srv/config/connectToMongo.js';


export default async (o) => {
  try {
    connectDB();
    let app = express();
    app.express = express;

    app.use(express.json({ limit: '500kb' }));
    app.use(cors());
    app.use('/api', Router);

    o.app = app;

    o.app.httpServer = await cds.server(o);

    return o.app.httpServer;
  } catch (err) {
    console.error(err);
    process.exit(1)
  }
};
