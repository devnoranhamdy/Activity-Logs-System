const { Kafka } = require("kafkajs");
const LogProcessor = require("../../application/LogProcessor");

const kafka = new Kafka({
  clientId: "user-activity-consumer",
  brokers: [process.env.KAFKA_BROKER],
});
const consumer = kafka.consumer({ groupId: "log-group" });
const startConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: "user-activity-logs",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const log = JSON.parse(message.value.toString());
      await LogProcessor.process(log);
      console.log("Log processed and saved:", log);
    },
  });
};

module.exports = startConsumer;
