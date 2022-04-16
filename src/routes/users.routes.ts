import { Router } from "../../deps.ts";

import { getUsers } from "../controllers/users.controllers.ts";

const router = new Router();

router.get("/api/users", getUsers);

export default router;
