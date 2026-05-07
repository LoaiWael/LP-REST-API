import type { Request, Response, NextFunction } from "express";

interface HttpException extends Error {
  status?: number;
}

export default (err: HttpException, req: Request, res: Response, nxt: NextFunction) => {
  res.status(err.status ?? 500).send(err.message ?? 'Internal Server Error');
}