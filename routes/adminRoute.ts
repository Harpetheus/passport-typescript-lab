import express from "express";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";
import { forwardAuthenticated } from "../middleware/checkAuth";
import session from "express-session";

router.get("/", ensureAuthenticated, (req, res) => {
  const sessionID = req.sessionID;
  const sessionStore = req.sessionStore;
  sessionStore.get(sessionID, (err, session)=>{
    if(err){
    console.log(err)
    }else{
       res.json(session);
    }
  })
  res.render("admin", {
    user: req.user,
    session
  });

});

export default router;