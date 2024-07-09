const Koa = require("koa")

const application = new Koa()
const conversor = require("basic-auth")
const processor = require("koa-bodyparser")
const search = require("../bigquery/search")

application.use(processor())

application.use(async function(context) {
    const userAndPassword = conversor.parse(context.request.headers.authorization)

    const USER = process.env.USER
    const PASSWORD = process.env.PASSWORD

    if (USER !== userAndPassword.name || PASSWORD !== userAndPassword.pass) {
        context.body = {
            message: "Access Denied"
        }
        return
    }
    
    const reqBody = context.request.body

    context.status = 200
    context.body = await search(reqBody.filter)
})

application.listen(3000)
console.log("API is working correctly")