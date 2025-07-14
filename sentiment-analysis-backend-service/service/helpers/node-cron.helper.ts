import cron from "node-cron";
import { CRON_TIME, EVERY_5_SECOND } from "../constant/cron.constant";
import cronJobsCallback from "../cronjobs/cron.callback";
import getEnvValue from "../utils/env.utils";

class CronHelper {
  public defaultTime: string = EVERY_5_SECOND;

  constructor() {}

  public cronCallback() {
    return cronJobsCallback;
  }

  public startService() {
    cron.schedule(this.defaultTime, this.cronCallback());
  }
}

export default CronHelper;
