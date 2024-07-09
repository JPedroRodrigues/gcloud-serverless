'use strict'

// https://us-central1-alura-forum-428015.cloudfunctions.net/alura-forum-dev-receiveActivity
exports.receiveActivity = require("./functions/receiveActivity")
exports.insertActivity = require("./functions/insertActivity")

// https://us-central1-alura-forum-428015.cloudfunctions.net/alura-forum-dev-receiveUser
exports.receiveUser = require("./functions/receiveUser")
exports.insertUser = require("./functions/insertUser")