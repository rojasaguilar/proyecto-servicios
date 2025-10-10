//const express = require('express');
//const cds = require('@sap/cds');
//const cors = require('cors')
//const router = express.Router();

import express from "express"
import cds  from "@sap/cds"
import cors from "cors"
import { Router } from "express"

// Importa los modelos de MongoDB
import ZTPRODUCTS from "./src/api/models/mongodb/ztproducts.js";
import ZTPRODUCTS_FILES from "./src/api/models/mongodb/ztproducts_files.js";

export default async (o) => {
    try {
        let app = express();
        app.express = express;
        app.use(express.json({limit:'500kb'}));
        app.use(cors());

        // Endpoint GET all
        app.get('/api/product-catalog/all', async (req, res) => {
            try {
                const products = await ZTPRODUCTS.find();
                const files = await ZTPRODUCTS_FILES.find();
                res.json({ products, files });
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        });

        app.use('/api', Router);
        // app.get('/', (req, res) => {
        //     res.end(`SAP CDS está en ejecución...${req.url}`);
        // });
        o.app = app;
        o.app.httpServer = await cds.server(o);
        return o.app.httpServer;

    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
 }