import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserUpdateRequest  } from "../../interfaces/users";
import bcrypt, { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
// import isAdmMiddlewar from "../../middlewares/isAdm.middleware";


const updateUserService = async({ name, email, telephone, password, isActive }: IUserUpdateRequest, id: string): Promise<IUserUpdateRequest>  => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id
    })

    if(!findUser){
        throw new AppError('User not found', 404)
        
    }
  
  

    await userRepository.update(
        id,
        {
            name: name ? name : findUser.name,
            email: email ? email : findUser.email,
            telephone: telephone ? telephone : findUser.telephone,
            password: password ? await hash(password, 10) : findUser.password,
            isActive: isActive ? isActive : findUser.isActive 
        }
    )

    const user = await userRepository.findOneBy({
        id
    })


    return {name,email,password, isActive}

}

export default updateUserService