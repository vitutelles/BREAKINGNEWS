import { Router } from "express";
const router = Router();

import { create, findAll } from "../controllers/news.contoller.js"

router.post("/", create)
router.get("/", findAll)












export default router;