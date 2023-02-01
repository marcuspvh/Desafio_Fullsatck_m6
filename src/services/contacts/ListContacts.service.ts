import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contacts.enttty";


const ListContactsService = async () => {

    const contactsRepository = AppDataSource.getRepository(Contacts);
    const contacts = await contactsRepository.find();

    return contacts;

}

export default ListContactsService;