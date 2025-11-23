const express= require('express');
const { handleLogin, handleRegister } = require('../controller/user');
const userRouter=express.Router();
userRouter.post("/login",(req,res)=>{
  handleLogin(req,res);
});
userRouter.post("/register",(req,res)=>{
  handleRegister(req,res);
})
module.exports={
  userRouter,
}