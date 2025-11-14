const { Kafka } = require("kafkajs");

console.log("b1");
const kafka = new Kafka({
  clientId: "user-activity-producer",
  brokers: [process.env.KAFKA_BROKER],
});
console.log("b2");
const producer = kafka.producer();
console.log("b3");
const sendLog = async (log) => {
  console.log("b4");
  await producer.connect();
  console.log("b5");
  await producer.send({
    topic: "user-activity-logs",
    messages: [{ value: JSON.stringify(log) }],
  });
  console.log("b6");
};

module.exports = { sendLog };
