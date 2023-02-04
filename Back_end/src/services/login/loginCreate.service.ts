import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";
import { IUserLogin, IUserRequest  } from "../../interfaces/users";
import jwt from 'jsonwebtoken';
import { AppError } from "../../errors/appError";
import "dotenv/config";
import bcrypt, { compareSync } from "bcrypt";



const loginCreateService = async({email,password}:IUserLogin) => {

    const userRepository = AppDataSource.getRepository(User);
    const account = await userRepository.findOneBy({
        email: email
    })
    
    if(!account){
        throw new AppError("Invalid email", 401)
    }

    const passwordMatch =  bcrypt.compareSync(password, account.password)

    if(!passwordMatch){
        throw new AppError("Invalid password", 403)
    }
    if(!account.isActive){
        throw new AppError('User not active', 404 )
    }

         
    const token = jwt.sign({
        isActive: account.isActive,
        id: account.id

    },
    process.env.SECRET_KEY as string,
    {
        expiresIn: "48h",
        subject: account.id
    })

    return {token, account}

}

export default loginCreateService;