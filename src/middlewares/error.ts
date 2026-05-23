import type { Request, Response, NextFunction } from "express";
import type { ErrorDto } from "../types/index.js";

interface HttpException extends Error {
  status?: number;
}

export default (err: any, req: Request, res: Response<ErrorDto>, nxt: NextFunction) => {
  res.status(err.status ?? 500).send({ message: err.message ?? 'Internal Server Error' });
}