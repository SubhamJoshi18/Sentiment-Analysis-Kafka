import axios from "axios";
import { UnknownAny } from "../../types/types";
import sentimentLogger from "../../logger/logger";

class GETMethodHelper {
  public cacheRequest: Map<string, Record<string, string>> = new Map();

  public async getHTTPRequest(
    apiUrl: string,
    queryParams: Record<string, string>,
    headers: object
  ) {
    if (this.cacheRequest.size > 0) {
      this.cacheRequest.clear();
    }
    if (!this.cacheRequest.has(apiUrl)) {
      this.cacheRequest.set(apiUrl, queryParams);
    }
    let retryCount = 5;
    while (retryCount > 0) {
      try {
        let baseUrl = apiUrl;
        baseUrl = baseUrl.endsWith("?") ? baseUrl : baseUrl.concat("?");
        for (const [key, value] of Object.entries(
          this.cacheRequest.get(apiUrl) as object
        )) {
          baseUrl += `${key}=${value}`;
        }
        const apiResponse = await axios.get(baseUrl, { headers: headers });
        return apiResponse;
      } catch (err: UnknownAny) {
        const isMaximumRetryExceeded = retryCount.toString().startsWith("0");
        if (isMaximumRetryExceeded) {
          throw new Error(
            `The API Request Has Maximum Exceeded,Terminating the Service`
          );
        }

        sentimentLogger.error(
          `Retrying the API Request Call, Count : ${retryCount - 1}`
        );
        retryCount = retryCount - 1;
        continue;
      }
    }
  }
}

export default GETMethodHelper;
