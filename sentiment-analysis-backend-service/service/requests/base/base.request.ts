import getEnvValue from "../../utils/env.utils";

class BaseRequest {
  public getDefaultHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  public getDefaultAPIKey() {
    return {
      apiKey: getEnvValue("API_KEY"),
    };
  }

  public getDefaultQueryParams() {
    return {
      country: "us",
      category: "business",
    };
  }
}

export default BaseRequest;
