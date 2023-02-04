import { Request, Response } from "express";
import { IUserCreate, IUserRequest } from "../../interfaces/users"; 
import { instanceToPlain } from "class-transformer";
import userCreateService from "../../services/users/userCreate.service";


const userCreateController = async(req: Request, res: Response) => {

    
    const {name, email, telephone, password, isAdm}:IUserCreate = req.body;

    const newUser = await userCreateService({name, email, telephone, password, isAdm});

    return res.status(201).json(instanceToPlain(newUser));


};

export default userCreateController