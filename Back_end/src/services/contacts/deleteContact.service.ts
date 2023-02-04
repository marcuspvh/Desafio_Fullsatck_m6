import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { IContactsDeleteRequest } from "../../interfaces/contacts";
import { Contacts } from "../../entities/contacts.enttty";


const deleteContactService = async({ isActive  }: IContactsDeleteRequest, id: string): Promise<Contacts> => {

    const contactRepository = AppDataSource.getRepository(Contacts)

    const findContact = await contactRepository.findOneBy({
        id
    })

    if(!findContact){
        throw new AppError('Contact not found', 404)
    }

    if(!findContact.isActive){
        throw new AppError('Contact not active', 400)
    }
   
    await contactRepository.update(
        id,
        {
            isActive: false 
                  }
    )

    const contact = await contactRepository.findOneBy({
        id
    })

    return contact!

}

export default deleteContactService;
