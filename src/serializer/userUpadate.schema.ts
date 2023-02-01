import { Request, Response, NextFunction} from 'express';
import * as yup from "yup" ;
import { IUserCreate, IUserUpdateRequest } from '../interfaces/users'
import { SchemaOf } from 'yup';



const userUpdateSchema: SchemaOf<IUserUpdateRequest> = yup.object().shape({
    name: yup
        .string(),
    email: yup
        .string().email(),
    telephone: yup
        .string(),
    password: yup
        .string(),
    isActive: yup
        .boolean()
   
})

export default userUpdateSchema