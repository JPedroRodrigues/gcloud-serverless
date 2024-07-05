"use strict"

const PubSub = require("./pubsub")

module.exports = async function receiveActivity(req, res) {
    const activity = req.body

    const tableColumns = [
        "activity_creation_date",
        "activity_type",
        "course_name",
        "course_name",
        "text"
    ]

    tableColumns.forEach(column => {
        if (!activity.hasOwnProperty(column)) {
            res.send(`Field not send: ${column}`)
            return
        }
    })

    const activityTypes = ["criar-pergunta", "responder-pergunta"]
    if (activityTypes.indexOf(activity.activity_type) === -1) {
        res.send("Field not send or invalid: activity_type")
        return
    }

    if (activity.text.length > 255) {
        res.send("The field is larger than 255 characters")
        return
    }

    const result = await PubSub(req.body, "activities")
    console.log(req.body)
    res.send(result)
}