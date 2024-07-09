const Koa = require("koa")

const app = new Koa()
const processor = require("koa-bodyparser")
const count = require("../bigquery/count")

app.use(processor())

app.use(async function(context) {
    const reBody = context.request.body

    queries = [
        "SELECT COUNT(*) as sum, course_name FROM activities GROUP BY course_name",
        "SELECT COUNT(*) as sum, class_name FROM activities GROUP BY class_name"
    ]

    context.status = 200
    context.body = {
        sum_per_course: await count(queries[0]),
        sum_per_class_name: await count(queries[1])
    }
})

app.listen(5000)
console.log("API is working properly")