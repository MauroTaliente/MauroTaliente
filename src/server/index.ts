'use strict';
import express, { Request, Response } from 'express';

const router = express.Router();

export const example = async (req: Request, res: Response) => {
  res.send('example api').status(200).end();
};

router.get('/api', example);

export default router;
