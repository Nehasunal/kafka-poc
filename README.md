# KafkaJS Project

This project demonstrates a basic setup for Kafka using `kafkajs`, with a producer and consumer implemented in Node.js. Docker is used to manage Kafka and Zookeeper services.

## Project Structure

- **`docker-compose.yml`**: Docker Compose configuration for running Kafka and Zookeeper.
- **`producer.js`**: Kafka producer script that sends messages to a Kafka topic.
- **`consumer.js`**: Kafka consumer script that reads messages from a Kafka topic.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/)


### 1. Clone the Repository

Clone the repository to your local machine:

```sh
git clone <repository-url>
cd <repository-directory>
```

To start Kafka and Zookeeper using Docker Compose, run:
```sh
sudo docker-compose up -d
```

To check the status of your Docker containers:
```sh
sudo docker-compose ps
sudo docker-compose logs kafka
sudo docker-compose logs zookeeper
```


### 2. Install dependency

```sh
npm install kafkajs
```

## Usage

After setting up Kafka and Zookeeper, you can run the producer and consumer scripts as described in the following sections.

### Producer

The producer script (`producer.js`) sends a message to the Kafka topic `kafka-poc`. To run the producer:

```sh
node producer.js
```

To run the consumer:
```sh
node consumer.js
```