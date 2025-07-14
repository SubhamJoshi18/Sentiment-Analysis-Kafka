import { Admin } from "kafkajs";
import sentimentLogger from "../../logger/logger";
import { getObjectValue } from "../../utils/common.utils";
import KafkaTopics from "../topics/topic.kafka";
import { required_topics } from "../../constant/kafka.constant";

class BaseKafka extends KafkaTopics {
  public async deleteTopics(admin: Admin) {
    const { topics } = await admin.fetchTopicMetadata();
    const normalizedTopics = topics.map((topic) => topic.name);
    const isTopicAvailable =
      Array.isArray(normalizedTopics) && normalizedTopics.length > 0;
    if (isTopicAvailable) {
      sentimentLogger.info(`Deleting the Topics From the Kafka Cluster`);
      await admin.deleteTopics({ topics: normalizedTopics });
      sentimentLogger.info(
        `The Topics ${normalizedTopics.join(
          ","
        )} Has been Deleted From the Kafka Cluster`
      );
    }
    return;
  }

  public async createTopics(admin: Admin) {
    const isAlreadyExistsTopics = this.getTopics()
      .map((topic) => topic.topic)
      .filter((element) => required_topics.includes(element));

    if (isAlreadyExistsTopics.length > 0) {
      sentimentLogger.info(
        `The Topics Has been Already been Created by the Kafka Admin`
      );
    } else {
      const topic = await admin.createTopics({
        topics: this.getTopics(),
      });
      sentimentLogger.info(
        `The Topic Has been Created Having Partition ${getObjectValue(
          this.getTopics(),
          "partition"
        )}`
      );
    }
  }
}

export default BaseKafka;
