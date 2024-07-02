const PubSub = require("../../node_modules/@google-cloud/pubsub").PubSub
const PubSubInstance = new PubSub()

module.exports = function pubsub(data, topic) {
    if (typeof data !== `string`) {
        data = JSON.stringify(data)
    }

    data = Buffer.from(data)
    // .publish(data) method is deprecated
    return PubSubInstance.topic(topic).publishMessage(data)
}