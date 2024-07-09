"use strict"

const pubsub = require("./pubsub")

module.exports = async function receiveUser(req, res) {
    const user = req.body

    const tableColumns = [
        "name",
        "age",
        "answered_question"
    ]

    tableColumns.forEach(column => {
        if (!user.hasOwnProperty(column)) {
            res.send(`Field not send: ${column}`)
            return
        }
    })

    if (user.name.length > 255) {
        res.send("The \"name\" field is larger than 255 characters")
        return
    }

    const result = await pubsub(req.body, "users")
    console.log(user)
    res.send(result)
}