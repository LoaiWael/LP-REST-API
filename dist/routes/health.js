import { Router } from "express";
import * as controllers from "../controllers/health.controller.js";
const router = Router();
router.get('/', controllers.getHealth);
export default router;
//# sourceMappingURL=health.js.map