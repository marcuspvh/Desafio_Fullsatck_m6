import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer"
import ListContactsService from "../../services/contacts/ListContacts.service";

const ListContactsController = async(req: Request, res: Response) => {

    
    const contactsList = await ListContactsService();

    return res.status(201).json(instanceToPlain(contactsList));


};

export default ListContactsController