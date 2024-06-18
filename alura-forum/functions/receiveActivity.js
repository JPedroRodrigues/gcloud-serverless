module.exports = function receiveActivity(req, res) {
    console.log(req.body)
    res.send(JSON.stringify(req.body))
}
