const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092']
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
    topic: 'kafka-poc',
    messages: [
      { value: 'Hello KafkaJS!' }
    ]
  });

  console.log("Message sent successfully!");
  await producer.disconnect();
};

run().catch(console.error);
