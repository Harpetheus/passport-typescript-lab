import express from "express";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";
import { forwardAuthenticated } from "../middleware/checkAuth";
import session from "express-session";

router.get("/login", forwardAuthenticated, (req, res) => {
    const sessions = req.session;
     res.render('login', {sessions });
    
    
  })

export default router;