import { sentimentTopicConfig } from "../../constant/kafka.constant";
import { IGenericTopic } from "../../interface/kafka.interface";
import { getObjectValue } from "../../utils/common.utils";

class KafkaTopics {
  public sentimentTopic: Record<string, any> = {
    name: sentimentTopicConfig["name"],
    partition: sentimentTopicConfig["partition"],
    replica: sentimentTopicConfig["replica"],
  };

  public getTopics(): Array<{
    topic: string;
    numPartitions: number;
    replicationFactor: number;
  }> {
    return [
      {
        topic: getObjectValue(this.sentimentTopic, "name"),
        numPartitions: getObjectValue(this.sentimentTopic, "partition"),
        replicationFactor: getObjectValue(this.sentimentTopic, "replica"),
      },
    ];
  }
}

export default KafkaTopics;
