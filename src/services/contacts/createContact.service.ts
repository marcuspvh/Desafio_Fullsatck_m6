import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { v4 as uuidv4} from "uuid";
import { AppError } from "../../errors/appError";
import {Contacts} from "../../entities/contacts.enttty";
import { IContactsCreate, IContactsRequest } from "../../interfaces/contacts";


const createContactService = async({name, email, telephone, userId }:IContactsCreate): Promise<Contacts> => {

const contactsRepository = AppDataSource.getRepository(Contacts);
const contact = await contactsRepository.find();

const emailAlreadyExists = contact.find((contacts) => contacts.email === email);

if(emailAlreadyExists){
    throw new AppError("Email already exists" )
}

const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId
  });

  if (!findUser) {
    throw new AppError("User is not exists", 404);
  }

const contacts = new Contacts()
contacts.name = name
contacts.email = email
contacts.telephone = telephone
contacts.isActive = true
contacts.createdAt= new Date()
contacts.updatedAt= new Date()
contacts.user = findUser

contactsRepository.create(contacts)

await contactsRepository.save(contacts)

return contacts;


}

export default createContactService