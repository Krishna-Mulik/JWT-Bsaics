const { Router } = require("express");
const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/login", login);

router.get("/dashboard", authMiddleware, dashboard);

module.exports = router;
