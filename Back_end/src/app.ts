import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleErrormiddleware from "./middlewares/handleError.middleware"
import usersRoutes from "./routes/users.routes"
import loginRoutes from "./routes/login.routes"
import contactsRoutes from "./routes/contacts.routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"
import cors from "cors"





const app = express()

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);
app.use(handleErrormiddleware);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default app