import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";
import { IContactsDeleteRequest } from "../../interfaces/contacts";
import { Contacts } from "../../entities/contacts.enttty";



const deleteContactController = async(req: Request, res: Response) => {
    
    const {isActive}: IContactsDeleteRequest = req.body
    const id: string = req.params.id
    const updatedContact = await deleteContactService({isActive}, id)

    if(updatedContact instanceof Contacts){
        return res.status(204).json({mesage: "Contact alterated with sucess!", isActive})
    }
    return res.status(updatedContact[1] as number).json({
        message: updatedContact[0]
    })

};

export default deleteContactController