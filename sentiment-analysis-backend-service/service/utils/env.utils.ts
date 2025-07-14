import dotenv from "dotenv";
import sentimentLogger from "../logger/logger";
dotenv.config();

const getEnvValue = (key: string): string | undefined => {
  let envValue = undefined;
  if (Object.prototype.hasOwnProperty.call(process.env, key)) {
    envValue = process.env[key];
  }
  const isStillNull = typeof envValue === "object" && !envValue;
  if (isStillNull) {
    sentimentLogger.error(
      `Env Key : ${key} Does not Exists on the Environment Variable`
    );
    throw new Error(`Env Key ${key} Missing on the Environment Variable`);
  }
  return envValue;
};

export default getEnvValue;
