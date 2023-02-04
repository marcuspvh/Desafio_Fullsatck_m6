import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { AppError } from "../../errors/appError";
import {Contacts} from "../../entities/contacts.enttty";
import { IContactsCreate, IContactsRequest } from "../../interfaces/contacts";


const createContactService = async({name, email, telephone, userId }:IContactsCreate): Promise<Contacts> => {

const contactsRepository = AppDataSource.getRepository(Contacts);

const userRepository = AppDataSource.getRepository(User);
const user = await userRepository.findOne({
  where: {id: userId }
});

// const contact = await contactsRepository.find();
// const emailAlreadyExists = contact.find((contacts) => contacts.email === email);

// if(emailAlreadyExists){
//     throw new AppError("Email already exists" )
// }



  if (!user) {
    throw new AppError("User is not exists", 404);
  }

const newContacts = contactsRepository.create({
  name,
  email,
  telephone,
  user

})



await contactsRepository.save(newContacts)

return newContacts;


}

export default createContactService