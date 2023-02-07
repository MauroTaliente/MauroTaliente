'use strict';
import { Request, Response } from 'express';

/*
 * List of API examples.
 * @route GET /api
 */
export const exampleGet = async (req: Request, res: Response) => {
  return res.send('example api').status(200).end();
};
