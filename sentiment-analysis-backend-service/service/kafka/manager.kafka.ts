import kafkaClient from "../config/kafka.config";
import sentimentLogger from "../logger/logger";
import { UnknownAny } from "../types/types";
import BaseKafka from "./base/base.kafka";

class KafkaManager extends BaseKafka {
  public async initalizeKafkaClient() {
    const kafkaAdmin = kafkaClient.admin();

    try {
      await kafkaAdmin.connect();
      sentimentLogger.info(`The Kafka Admin is Connected....`);
      await this.deleteTopics(kafkaAdmin);
      await this.createTopics(kafkaAdmin);
    } catch (err: UnknownAny) {
    } finally {
      sentimentLogger.info(`The Topics Has been Initalize`);
      await kafkaAdmin.disconnect();
      sentimentLogger.info(`The Kafka Admin is DisConnected....`);
    }
  }
}

const getKafkaInstance = (): KafkaManager => {
  return new KafkaManager();
};

export default getKafkaInstance;
