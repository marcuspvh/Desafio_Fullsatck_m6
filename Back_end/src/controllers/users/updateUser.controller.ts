import { Request, Response } from "express";
import { IUserUpdateRequest } from "../../interfaces/users"; 
import { instanceToPlain } from "class-transformer";
import updateUserService from "../../services/users/updateUser.service";


const updateUserController = async (req: Request, res: Response) => {
        const {name,email, telephone, password,isActive}: IUserUpdateRequest = req.newUser
        const id: string = req.params.id
        
                
        const updatedUser = await updateUserService({name,email, telephone, password, isActive}, id)
            return res.json(instanceToPlain(updatedUser))
        
       
   
}


export default updateUserController