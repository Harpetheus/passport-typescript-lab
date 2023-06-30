import express from "express";
import passport from 'passport';
import { forwardAuthenticated } from "../middleware/checkAuth";

const router = express.Router();
// Github  login 

router.get(
  "/github",
  passport.authenticate("github", {scope: ["user:email"]})
);


router.get(
  "/github/callback",
  passport.authenticate("github", { 
    failureRedirect: '/login' }),
  function (req, res ){
    res.redirect('/')
  }
);

router.get("/login", forwardAuthenticated, (req, res) => {
  const messages = req.session.messages || [];
  req.session.messages = [];
  res.render('login', {messages });
  
  
})
// github authenticate after refactoring
// add button 

//calling done()

//email 
//username
//{email, username} => save to database

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login",
    failureMessage: true,

    

  
  })
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
  });
  res.redirect("/auth/login");
});

export default router;
