// testing

import type { Request, Response, NextFunction } from "express"

export default (req: Request, res: Response, nxt: NextFunction) => {
  res.send(`Timestamp: ${req.timestamp}\nLogging...`);
}