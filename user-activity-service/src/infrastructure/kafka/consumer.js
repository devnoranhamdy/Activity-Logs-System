const { Kafka } = require("kafkajs");
const LogProcessor = require("../../application/LogProcessor");

console.log("c1");
const kafka = new Kafka({
  clientId: "user-activity-consumer",
  brokers: [process.env.KAFKA_BROKER],
});
console.log("c2");
const consumer = kafka.consumer({ groupId: "log-group" });
console.log("c3");
const startConsumer = async () => {
  console.log("c4");
  console.log("Connecting to Kafka broker:", process.env.KAFKA_BROKER);
  await consumer.connect();
  console.log("c5");
  await consumer.subscribe({
    topic: "user-activity-logs",
    fromBeginning: true,
  });
  console.log("c6");

  await consumer.run({
    eachMessage: async ({ message }) => {
      const log = JSON.parse(message.value.toString());
      await LogProcessor.process(log);
      console.log("Log processed and saved:", log);
    },
  });
  console.log("c7");
};

module.exports = startConsumer;
