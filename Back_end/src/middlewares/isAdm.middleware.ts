import { Request, Response, NextFunction } from "express"


const isAdmMiddlewar = (req: Request, res: Response, next: NextFunction) =>{

    if(!req.user.isAdm){
        return res.status(403).json({
            message: 'User is not admin'
        })
    }

    return next()

    }
    
    export default isAdmMiddlewar