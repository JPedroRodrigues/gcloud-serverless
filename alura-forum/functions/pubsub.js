const PubSub = require('@google-cloud/pubsub').PubSub
const instance = new PubSub()

module.exports = function pubsub(data, topic) {
    if (typeof data !== 'string') data = JSON.stringify(data)
    
    data = Buffer.from(data)
    return instance.topic(topic).publish(data)
}