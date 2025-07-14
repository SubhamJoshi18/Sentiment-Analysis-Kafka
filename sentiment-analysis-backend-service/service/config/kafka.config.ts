import { Kafka } from "kafkajs";
import getEnvValue from "../utils/env.utils";

const kafkaClient = new Kafka({
  clientId: getEnvValue("KAFKA_CLIENT_ID") as string,
  brokers: [getEnvValue("BROKER_URL")].filter(Boolean) as string[],
});

export default kafkaClient;
