import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { v4 as uuidv4} from "uuid";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";


const userListContactsService = async (idUser:string ) :Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    
       
    const user = await userRepository.findOne({
        where:{
            id:idUser
        },
        relations:{
            contacts :true
        
        }
    });
   
    if(!user){
        throw new AppError("User is not exists",404 )
    }    
    


    return user

}

export default userListContactsService;