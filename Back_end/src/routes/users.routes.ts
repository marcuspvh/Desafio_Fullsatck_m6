import { Router } from "express";
import authUserMiddleware from "../middlewares/authUser.middleware";
import isAdmMiddlewar from "../middlewares/isAdm.middleware";
import isUserMiddleware from "../middlewares/isUserMiddleware";
import userUpdateSchema from "../serializer/userUpadate.schema";
import validateUserUpdateMiddleware from "../middlewares/validateUpdate.middleware";
import userCreateController from "../controllers/users/userCreate.controller";
import usersListController from "../controllers/users/usersList.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import listUserIdController from "../controllers/users/listUserId.controller";
import userListContactsController from "../controllers/users/userListContacts.controller";




const usersRoutes = Router()


usersRoutes.post("", userCreateController)
usersRoutes.get("", usersListController)
usersRoutes.get("/:id", authUserMiddleware, isUserMiddleware, listUserIdController)
usersRoutes.get("/:id/contacts",userListContactsController)
usersRoutes.delete("/:id",authUserMiddleware,  isUserMiddleware, deleteUserController)
usersRoutes.patch("/:id", authUserMiddleware,  isUserMiddleware, validateUserUpdateMiddleware(userUpdateSchema) ,updateUserController)


export default usersRoutes