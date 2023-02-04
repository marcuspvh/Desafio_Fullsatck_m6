import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IContactsUpdateRequest } from "../../interfaces/contacts";
import updateContactService from "../../services/contacts/updateContact.service";


const updateContactsController = async (req: Request, res: Response) => {
        const {name,email, telephone, }: IContactsUpdateRequest = req.body
        const contactId: string = req.params.id
        
                
        const updatedContact = await updateContactService({name,email, telephone}, contactId)
            return res.json(instanceToPlain(updatedContact))
           
}


export default updateContactsController