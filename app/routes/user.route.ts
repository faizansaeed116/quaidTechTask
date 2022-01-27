import express from 'express';
import controller from '../controllers/user.ctrl';
const router = express.Router();
const {body,param} = require("express-validator");

//Registration Fields Validations
let Validation = [body("email").notEmpty().isEmail(),body("password").notEmpty().isString()];


router.post('/register', Validation, controller.userRegister);
router.post('/login', Validation, controller.userLogin);

export = router;