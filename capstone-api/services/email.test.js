const { SENDGRID_API_KEY, EMAIL_SERVICE_ACTIVE, CLIENT_URL, EMAIL_FROM_ADDRESS, APPLICATION_NAME } = require("../config")
const EmailService = require("./email")

const mockSuccessResponse = {statusCode : 202, statusMessage: "success"}
const mockFailureResponse = {statusCode: 400, body: [{field: `to`, message: `missing to field`}]}

const mockSendEmail = jest.fn().mockImplementation((email) =>{
    if (!email?.hasOwnProperty("to")) return [mockFailureResponse]
    return [mockSuccessResponse]
})


jest.mock("nodemailer", () => ({
    createTransport: jest.fn().mockImplementation(() => ({sendMail:mockSendEmail}))
}))



const emailService = new EmailService({
    isActive: EMAIL_SERVICE_ACTIVE,
    apiKey : SENDGRID_API_KEY,
    clientUrl: CLIENT_URL,
    emailFromAdress: EMAIL_FROM_ADDRESS,
    applicationName: APPLICATION_NAME,
})


describe("Test EmailService", () => {
    test("Stores is active config flag and nodemailer transport on instance", () =>{
        expect(emailService).toHaveProperty("isActive")
        expect(emailService).toHaveProperty("transport")
    })

    test("Is inactive when testing", () =>{
        expect(emailService.isActive).toBeFalsy()
        expect(emailService.transport).toBeTruthy()
    })

    describe("test sendEmail", () => {
        test("Returns 202 status code when all goes well", async () =>{
            const emailService = new EmailService({
                isActive: true,
                apiKey : SENDGRID_API_KEY,
                clientUrl: CLIENT_URL,
                emailFromAdress: EMAIL_FROM_ADDRESS,
                applicationName: APPLICATION_NAME,
            })
            const email = {
                to:`estebandayala76@gmail.com`,
                from: `esteban.ayala.site@codepath.org`,
                subject: `testing email sending`,
                html: `<h1>Test Email</h1>`
            }
            const res = await emailService.sendEmail(email)
            expect(res).toEqual({status: 202, email, error : null})
            expect(mockSendEmail).toHaveBeenCalledWith(email)
        })

        test("Returns 400 status when something goes wrong", async () => {
            const emailService = new EmailService({
                isActive: true,
                apiKey : SENDGRID_API_KEY,
                clientUrl: CLIENT_URL,
                emailFromAdress: EMAIL_FROM_ADDRESS,
                applicationName: APPLICATION_NAME,
            })
                const email = {}
                const res = await emailService.sendEmail(email)
                //expect(res).toEqual({status: 400, email, error : [{ field: `to`,message: "Missing to field"}]})
                expect(res).toEqual({status:400, email, error: mockFailureResponse.body})
                expect(mockSendEmail).toHaveBeenCalledWith(email)
            })
        })

        describe("sending password reset emails", () =>{
            test("constructPasswordResetUrl craetes the correct password reset url",() =>{
                const token ="abc123"
                const url = emailService.constructPasswordResetUrl(token)
                expect(url).toEqual(`http://localhost:3000/password-reset?token=${token}`)
            })
            test("sendPasswordResetEmail sends an email to provided user", async () =>{
                const emailService = new EmailService({
                    isActive: true,
                    apiKey : SENDGRID_API_KEY,
                    clientUrl: CLIENT_URL,
                    emailFromAdress: EMAIL_FROM_ADDRESS,
                    applicationName: APPLICATION_NAME,
                })
                const user  = { email:`test@test.io`}
                const token = "abc123"
                const res = await emailService.sendPasswordResetEmail(user,token)
                const email ={
                    to:user.email,
                        from: `esteban.ayala.site@codepath.org`,
                        subject:"Reset Password",
                        html: expect.any(String)
                }
                expect(res).toEqual({
                    status:202,
                    email: email,
                    error:null,
                })
                expect(mockSendEmail).toHaveBeenCalledWith(email)
        })
        test("sendPasswordResetConfirmationEmail sends a confirmation email to provided user", async () =>{
            const emailService = new EmailService({
                isActive: true,
                apiKey : SENDGRID_API_KEY,
                clientUrl: CLIENT_URL,
                emailFromAdress: EMAIL_FROM_ADDRESS,
                applicationName: APPLICATION_NAME,
            })
            const user  = { email:`test@test.io`}
            const res = await emailService.sendPasswordResetEmail(user)
            const email ={
                to:user.email,
                    from: `esteban.ayala.site@codepath.org`,
                    subject:"your password has been updated successfully",
                    html: expect.any(String)
            }
            expect(res).toEqual({
                status:202,
                email: email,
                error:null,
            })
            expect(mockSendEmail).toHaveBeenCalledWith(email)
        })
    })
})
