import express from "express";

import { exampleGet } from "./routes/api";

const router = express.Router();
router.get('/api', exampleGet);

export default router;
