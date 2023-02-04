import { Router } from "express";
import authUserMiddleware from "../middlewares/authUser.middleware";
import isAdmMiddlewar from "../middlewares/isAdm.middleware";
import isUserMiddleware from "../middlewares/isUserMiddleware";
import ListContactsController from "../controllers/contacts/listContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";
import updateContactsController from "../controllers/contacts/updateContact.controller";
import createContactsController from "../controllers/contacts/contactsCreate.controller";
import listContactIdController from "../controllers/contacts/listContactId.controller";




const contactsRoutes = Router()


contactsRoutes.post("", authUserMiddleware, createContactsController)
contactsRoutes.get("", authUserMiddleware,   ListContactsController)
contactsRoutes.get("/:id", authUserMiddleware, isUserMiddleware, listContactIdController)
contactsRoutes.delete("/:id",authUserMiddleware,   deleteContactController)
contactsRoutes.patch("/:id", authUserMiddleware,  isUserMiddleware,  updateContactsController)


export default contactsRoutes