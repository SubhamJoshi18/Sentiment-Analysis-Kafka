import BaseRequest from "./base/base.request";
import GETMethodHelper from "./methods/get.request";

class RequestHelper extends BaseRequest {
  public apiUrl: string;
  public get: GETMethodHelper;

  constructor(apiUrl: string) {
    super();
    this.apiUrl = apiUrl;
    this.get = new GETMethodHelper();
  }

  public async getRequest() {
    const response = await this.get.getHTTPRequest(
      this.apiUrl,
      this.getDefaultQueryParams(),
      this.getDefaultHeaders()
    );
    return response;
  }
}

export default RequestHelper;
