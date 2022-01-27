import { Request, Response, NextFunction } from 'express';
import Validation from '../utils/Validation';
const {validationResult} = require("express-validator");

interface User {
    name: String;
    email: String;
    password: String;
}
//User Registration
const userRegister = async (req: Request, res: Response, next: NextFunction) => {
    //Checking Validations
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).send({message:errors.array(),code:422});
    }
    //Password Validation
    let validateMsg = Validation.ValidatePass(req.body.password);
    if(validateMsg.length>0){
        return  res.status(422).send({message:validateMsg,code:422});
    }
    let result:any= {
        name: req.body.name,
        email:req.body.email,
        password :req.body.password,
    }
    try{
        let user :[User] = result;
        if (user){
            return res.status(200).json({
                message: "Registration successful"
            });
        }
    }
    catch(err)
    {
        throw({
            message:(err as Error).message || "Server error while registering user",
        });
    }
   
};

//User Login
const userLogin = async (req: Request, res: Response, next: NextFunction) => {
   //Checking Validations
   let errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(422).send({message:errors.array(),code:422});
   }
    //Password Validation
    let validateMsg = Validation.ValidatePass(req.body.password);
    if(validateMsg.length>0){
        return  res.status(422).send({message:validateMsg,code:422});
    }
    let result:any= {
        email:req.body.email,
        password :req.body.password,
    }
    try{
        let user :[User] = result;
        return res.status(200).json({
            email: user
        });
    }
    catch(err)
    {
        throw({
            message:(err as Error).message || "Server error while login user",
        });
    }
};

export default { userRegister, userLogin };