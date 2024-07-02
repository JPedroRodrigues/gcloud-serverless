const insert = require("../bigquery/Insert")

module.exports = async function InsertActivity(event) {
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