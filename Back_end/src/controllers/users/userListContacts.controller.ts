import { Request, Response } from "express";
import userListContactsService from "../../services/users/userListContacts.service";


const userListContactsController = async(req: Request, res: Response) => {

    const idUser = req.params.id
    
    const userList = await userListContactsService(idUser);

    return res.status(200).json((userList));


};

export default userListContactsController