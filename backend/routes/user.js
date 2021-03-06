const express = require("express");
const router = express.Router();
const token = require("../services/token_service");
const userService = require('../services/usuario_service')

router.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type, Authorization,Accept,x-access-token"
  );
  next();
});

router.post("/",  async function (req, res) {
  return await userService.postUser(res, req.body);
});

router.post("/editar", token.checkToken, async function (req, res) {
  return await userService.updateUser(res, req.body);
});

router.post("/authenticate", async function (req, res) {
  return await token.authorizeUser(res, req.body);
});

module.exports = router;
