import { User } from "../../entities/user.entity";
import { Request, Response } from "express";
import { IUserDeleteRequest } from "../../interfaces/users";
import deleteUsderService from "../../services/users/deleteUser.service";
import listUserIdService from "../../services/users/listUserId.service";



const listUserIdController = async(req: Request, res: Response) => {
    
    const idUser = req.params.id
    
    const userList = await listUserIdService(idUser);

    return res.status(200).json((userList));

};

export default listUserIdController