"use strict"

const insert = require("../bigquery/insert")

module.exports = async function insertActivity(event) {
    try {
        const encodedActivity = event.data
        const activityJson = Buffer.from(encodedActivity, "base64").toString()
        const activity = JSON.parse(activityJson)

        const results = await insert(activity)
        console.log(results)
    } catch (exception) {
        console.error(exception)
        console.log(exception.response)
    }
}