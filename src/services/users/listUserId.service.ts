import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserDeleteRequest, IUserUpdateRequest  } from "../../interfaces/users";
import { AppError } from "../../errors/appError";


const listUserIdService = async (idUser:string ) :Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    
       
    const user = await userRepository.findOneBy({
        
            id:idUser
        
    });
   
    if(!user){
        throw new AppError("User is not exists",404 )
    }    
    


    return user

}

export default listUserIdService;