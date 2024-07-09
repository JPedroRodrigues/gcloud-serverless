"use strict"

const insert = require("../bigquery/insert")

module.exports = async function insertUser(event) {
    try {
        const encodedUser = event.data
        const userJson = Buffer.from(encodedUser, "base64").toString()
        const user = JSON.parse(userJson)

        const results = await insert(user, "users")
        console.log(results)
    } catch (exception) {
        console.error(exception)
        console.log(JSON.stringify(exception.response))
    }
}