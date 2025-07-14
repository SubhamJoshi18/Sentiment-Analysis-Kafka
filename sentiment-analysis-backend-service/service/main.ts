import CronHelper from "./helpers/node-cron.helper";
import getKafkaInstance from "./kafka/manager.kafka";

(async () => {
  const cronInstance = new CronHelper();
  const kafkaManager = getKafkaInstance();
  await kafkaManager.initalizeKafkaClient();
  cronInstance.startService();
})();
