import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest"
import app from "../../../app";
import {mockedAdmin, mockedAdminLogin, mockedContacts, } from "../../mocks"


describe("/contacts", () => {
    let connection: DataSource

    beforeAll(async() => {
        await AppDataSource.initialize().then((res) => {
            connection = res
        }).catch((err) => {
            console.error("Error during Data Source initialization", err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("POST /contacts -  Must be able to create a contacts",async () => {
        const response = await request(app).post('/contacts').send(mockedContacts)

        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("name")
        expect(response.body).toHaveProperty("email")
        expect(response.body).toHaveProperty("telephone")
        expect(response.body).toHaveProperty("isActive")
        expect(response.body).toHaveProperty("createdAt")
        expect(response.body).toHaveProperty("updatedAt")
        expect(response.body.name).toEqual("Joana")
        expect(response.body.email).toEqual("981158855")
        expect(response.body.isAdm).toEqual(false)
        expect(response.body.telephone).toEqual("joana@mail.com")
        expect(response.body.isActive).toEqual(true)
        expect(response.status).toBe(201)        
    })

    test("POST /contacts -  should not be able to create a contact that already exists",async () => {
        const response = await request(app).post('/contacts').send(mockedContacts)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(400)
             
    })

    test("GET /contacts -  Must be able to list contacts",async () => {
    await request(app).post('/contacts').send(mockedAdmin)
        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const response = await request(app).get('/contacts').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

        expect(response.body).toHaveLength(2)
     
    })

    test("GET /contacts -  should not be able to list contacts without authentication",async () => {
        const response = await request(app).get('/contacts')

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
             
    })

    test("GET /contacts -  should not be able to list contacts not being admin",async () => {
        const contactLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const response = await request(app).get('/contacts').set("Authorization", `Bearer ${contactLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
             
    })

    test("DELETE /contacts/:id -  should not be able to delete contact without authentication",async () => {
        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const ContactTobeDeleted = await request(app).get('/contacts').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

        const response = await request(app).delete(`/contacts/${ContactTobeDeleted.body[0].id}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
             
    })

    test("DELETE /contacts/:id -  should not be able to delete contact not being admin",async () => {
        const contactLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const ContactTobeDeleted = await request(app).get('/contacts').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

        const response = await request(app).delete(`/contacts/${ContactTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${contactLoginResponse.body.token}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(403)
             
    })

    test("DELETE /contacts/:id -  Must be able to soft delete contact",async () => {
        await request(app).post('/contacts').send(mockedAdmin)

        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const ContactTobeDeleted = await request(app).get('/contacts').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

        const response = await request(app).delete(`/contacts/${ContactTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        const findContact = await request(app).get('/contacts').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        expect(response.status).toBe(204)
        expect(findContact.body[0].isActive).toBe(false)
     
    })

    test("DELETE /contacts/:id -  shouldn't be able to delete contact with isActive = false",async () => {
        await request(app).post('/contacts').send(mockedAdmin)

        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const ContactTobeDeleted = await request(app).get('/contacts').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)

        const response = await request(app).delete(`/contacts/${ContactTobeDeleted.body[0].id}`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("message")
     
    })

    test("DELETE -  should not be able to delete contact with invalid id",async () => {
        await request(app).post('/contacts').send(mockedAdmin)

        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        
        const response = await request(app).delete(`/contacts/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty("message")
     
    })

    test("PATCH /contacts/:id -  should not be able to update contact without authentication",async () => {
        const adminLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const contactTobeUpdate = await request(app).get('/contacts').set("Authorization", `Bearer ${adminLoginResponse.body.token}`)
        const response = await request(app).patch(`/contacts/${contactTobeUpdate.body[0].id}`)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
             
    })

    test("PATCH /contacts/:id - should not be able to update contact with invalid id",async () => {
        const newValues = {name: "Joana Brito", email: "joanabrito@mail.com"}

        const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`
        
        const contactTobeUpdateRequest = await request(app).get("/contacts").set("Authorization", token)
        const contactTobeUpdateId = contactTobeUpdateRequest.body[0].id

        const response = await request(app).patch(`/contacts/13970660-5dbe-423a-9a9d-5c23b37943cf`).set("Authorization",token).send(newValues)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(404)
    })

    test("PATCH /contacts/:id - should not be able to update isAdm field value",async () => {
        const newValues = {isAdm: false}

        const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`
        
        const contactTobeUpdateRequest = await request(app).get("/contacts").set("Authorization", token)
        const contactTobeUpdateId = contactTobeUpdateRequest.body[0].id

        const response = await request(app).patch(`/contacts/${contactTobeUpdateId}`).set("Authorization",token).send(newValues)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contacts/:id - should not be able to update isActive field value",async () => {
        const newValues = {isActive: false}

        const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`
        
        const contactTobeUpdateRequest = await request(app).get("/contacts").set("Authorization", token)
        const contactTobeUpdateId = contactTobeUpdateRequest.body[0].id

        const response = await request(app).patch(`/contacts/${contactTobeUpdateId}`).set("Authorization",token).send(newValues)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contacts/:id - should not be able to update id field value",async () => {
        const newValues = {id: false}

        const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`
        
        const contactTobeUpdateRequest = await request(app).get("/contacts").set("Authorization", token)
        const contactTobeUpdateId = contactTobeUpdateRequest.body[0].id

        const response = await request(app).patch(`/contacts/${contactTobeUpdateId}`).set("Authorization",token).send(newValues)
        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contacts/:id - should not be able to update another contact without adm permission",async () => {
        const newValues = {isActive: false}

        const contactLoginResponse = await request(app).post("/login").send(mockedContacts);
        const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const contactToken = `Bearer ${contactLoginResponse.body.token}`
        const adminToken = `Bearer ${admingLoginResponse.body.token}`
        
        const contactTobeUpdateRequest = await request(app).get("/contacts").set("Authorization", adminToken)
        const contactTobeUpdateId = contactTobeUpdateRequest.body[1].id

        const response = await request(app).patch(`/contacts/${contactTobeUpdateId}`).set("Authorization",contactToken).send(newValues)

        expect(response.body).toHaveProperty("message")
        expect(response.status).toBe(401)
    })

    test("PATCH /contacts/:id -  should be able to update contact",async () => {
        const newValues = {name: "Joana Brito", email: "joanabrito@mail.com"}

        const admingLoginResponse = await request(app).post("/login").send(mockedAdminLogin);
        const token = `Bearer ${admingLoginResponse.body.token}`
        
        const contactTobeUpdateRequest = await request(app).get("/contacts").set("Authorization", token)
        const contactTobeUpdateId = contactTobeUpdateRequest.body[0].id

        const response = await request(app).patch(`/contacts/${contactTobeUpdateId}`).set("Authorization",token).send(newValues)

        const contactUpdated = await request(app).get("/contacts").set("Authorization", token)

        expect(response.status).toBe(200)
        expect(contactUpdated.body[0].name).toEqual("Joaana Brito")
        expect(contactUpdated.body[0]).not.toHaveProperty("password")
    })    
})