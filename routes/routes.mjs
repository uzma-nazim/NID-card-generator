import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from "express"
import pdfuploader from "../Controllar/pdfuploader.mjs";
const upload = require("../Multer/multer");
const routes = express.Router();


routes.post("/pdf", upload, pdfuploader);

export default routes 
