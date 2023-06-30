import express from "express";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";
import { forwardAuthenticated } from "../middleware/checkAuth";
import session from "express-session";

router.get("/", ensureAuthenticated, (req, res) => {
  res.render("admin", {
    user: req.user,
  });
});

export default router;