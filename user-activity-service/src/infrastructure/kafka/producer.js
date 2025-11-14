const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "user-activity-producer",
  brokers: [process.env.KAFKA_BROKER],
});
const producer = kafka.producer();
const sendLog = async (log) => {
  await producer.connect();
  await producer.send({
    topic: "user-activity-logs",
    messages: [{ value: JSON.stringify(log) }],
  });
};

module.exports = { sendLog };
