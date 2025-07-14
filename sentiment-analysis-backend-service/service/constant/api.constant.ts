import getEnvValue from "../utils/env.utils";

export const apiUrl: `https:${string}` = `https://newsapi.org/v2/top-headlines`;
export const apiKey = getEnvValue("API_KEY");
