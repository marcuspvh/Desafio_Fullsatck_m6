import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserDeleteRequest, IUserUpdateRequest  } from "../../interfaces/users";
import { AppError } from "../../errors/appError";
import { Contacts } from "../../entities/contacts.enttty";


const listContactIdService = async (idContact:string ) :Promise<Contacts> => {
    const contactRepository = AppDataSource.getRepository(Contacts);
    
       
    const contact = await contactRepository.findOne({
        where:{
            id:idContact
        },
        relations:{
            user :true
        
        }
    });
    
   
    if(!contact){
        throw new AppError("Contact is not exists",404 )
    }    
    


    return contact

}

export default listContactIdService;