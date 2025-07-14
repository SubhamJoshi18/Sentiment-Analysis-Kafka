import sentimentLogger from "../logger/logger";
import { UnknownAny } from "../types/types";
import { defaultArray } from "../utils/common.utils";

const errorTrace: any[] = [];

async function cronJobsCallback() {
  defaultArray(errorTrace);
  sentimentLogger.info(
    `Starting the Sentiment Analysis at the : ${new Date().toDateString()}`
  );
  try {
    
  } catch (err: UnknownAny) {
    sentimentLogger.error(
      `Error on the Cron Job Callback, Due To ${err.message}`
    );
    errorTrace.push(err);
    for (const error of errorTrace) {
      sentimentLogger.error(error);
    }
  } finally {
    sentimentLogger.info(`The Cron Job Callback Has been Completed`);
    return;
  }
}

export default cronJobsCallback;
