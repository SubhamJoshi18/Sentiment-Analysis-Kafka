import CronHelper from "./helpers/node-cron.helper";

(async () => {
  const cronInstance = new CronHelper();
  cronInstance.startService();
})();
