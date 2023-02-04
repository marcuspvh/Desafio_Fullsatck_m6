import { Request, Response } from "express";
import listContactIdService from "../../services/contacts/listContactId.service";



const listContactIdController = async(req: Request, res: Response) => {
    
    const idContact = req.params.id
    
    const contactList = await listContactIdService(idContact);

    return res.status(200).json((contactList));

};

export default listContactIdController