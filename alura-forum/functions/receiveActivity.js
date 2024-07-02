"use strict"

const PubSub = require("./PubSub")

module.exports = async function receiveActivity(req, res) {
    const result = await PubSub(req.body, "Activities")
    console.log(req.body)
    res.send(result)
}