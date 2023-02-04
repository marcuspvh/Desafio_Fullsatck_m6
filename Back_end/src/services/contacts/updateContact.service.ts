import AppDataSource from "../../data-source";
import bcrypt, { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { IContactsUpdateRequest } from "../../interfaces/contacts";
import { Contacts } from "../../entities/contacts.enttty";
// import isAdmMiddlewar from "../../middlewares/isAdm.middleware";


const updateContactService = async({ name, email, telephone }: IContactsUpdateRequest, id: string): Promise<IContactsUpdateRequest>  => {

    const contactsRepository = AppDataSource.getRepository(Contacts)

    const findContact = await contactsRepository.findOneBy({
        id
    })

    if(!findContact){
        throw new AppError('Contact not found', 404)
        
    }
  
  

    await contactsRepository.update(
        id,
        {
            name: name ? name : findContact.name,
            email: email ? email : findContact.email,
            telephone: telephone ? telephone : findContact.telephone,
            
        }
    )

    const contact = await contactsRepository.findOneBy({
        id
    })


    return {name,email,telephone}

}

export default updateContactService