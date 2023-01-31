import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleErrormiddleware from "./middlewares/handleError.middleware";
import usersRoutes from "./routes/users.routes";
import loginRoutes from "./routes/login.routes";
// import categoriesRoutes from "./routes/contacts.routes";




const app = express()
app.use(express.json())
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
// app.use("/cantacts", cattactsRoutes);


app.use(handleErrormiddleware);

export default app