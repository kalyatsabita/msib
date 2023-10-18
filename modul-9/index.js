const mqtt = require('mqtt');

const client = mqtt.connect("mqtt://test.mosquitto.org");

var winston = require('winston');
var {Loggly} = require('winston-loggly-bulk');

winston.add(new Loggly({
    token: "bbc19715-bc76-4431-8bb7-1f3a35b101b9",
    subdomain: "kalya",
    tags: ["Winston-NodeJS"],
    json: true
}));

winston.log('info', "Hello World from Node.js!");

(() => {
    client.on("connect", () => {
        client.subscribe("/mbkm/kalya/sensor", (err) => {
            if (!err) {
                client.publish("presence", "Hello mqtt");
            }
        });
    });
    client.on("message", (topic, message) => {
        let jsonString = message.toString();
        let json = JSON.parse(jsonString);
        winston.log('info', {...json});
        //message is buffer
        console.log(json);
    });
})();