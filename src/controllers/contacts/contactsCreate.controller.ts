import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IContactsCreate } from "../../interfaces/contacts";
import createContactService from "../../services/contacts/createContact.service";


const createContactsController = async(req: Request, res: Response) => {

    
    const {name, email, telephone, userId}:IContactsCreate = req.body;

    const newContact = await createContactService({name, email, telephone, userId});

    return res.status(201).json(instanceToPlain(newContact));


};

export default createContactsController