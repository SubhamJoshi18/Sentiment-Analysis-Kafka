import kafkaClient from "../../config/kafka.config";
import sentimentLogger from "../../logger/logger";
import { UnknownAny } from "../../types/types";
import { sentimentTopicConfig } from "../../constant/kafka.constant";
import { getObjectValue } from "../../utils/common.utils";

class KafkaPublisher {
  public async publishMessageToSentimentTopic(payload: object) {
    const producer = kafkaClient.producer();
    try {
      await producer.connect();

      sentimentLogger.info(`The Producer Has been Connected Successfully`);

      sentimentLogger.info(`Sending the Message to the Sentiment Analyzer`);

      await producer.send({
        topic: getObjectValue(sentimentTopicConfig, "name") as string,
        messages: [
          {
            value: JSON.stringify(payload),
          },
        ],
      });

      sentimentLogger.info(
        `Message Published to the Sentiment Analyzer Topic ${JSON.stringify(
          payload
        )}`
      );
    } catch (err: UnknownAny) {
      sentimentLogger.error(
        `Error Publishing the Message to the Sentiment Topic, Error ${err}`
      );
    } finally {
      sentimentLogger.info(`The Producer Has been DisConnected Successfully`);
      await producer.disconnect();
    }
  }
}

export default KafkaPublisher;
