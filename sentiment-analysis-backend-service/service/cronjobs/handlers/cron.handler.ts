import { UnknownAny } from "../../types/types";
import RequestHelper from "../../requests/request.helper";
import { apiUrl } from "../../constant/api.constant";

class CronHandler {
  public requestHelper: RequestHelper;
  public apiHashMap: Record<string, Record<string, any>> = {};

  constructor() {
    this.requestHelper = new RequestHelper(apiUrl);
    this.apiHashMap = {
      [`${apiUrl}`]: {},
    };
  }

  public async evaluateTheProcess() {
    try {
      const response = await this.requestHelper.getRequest();

      const apiData = response?.data;

      if (Object.prototype.hasOwnProperty.call(apiData, "articles")) {
        if (Object.keys(this.apiHashMap).includes(apiUrl)) {
          this.apiHashMap[apiUrl] = {
            data: apiData.articles,
            totalData: apiData.totalResults,
          };
        }
      }
      const payload = JSON.parse(JSON.stringify(this.apiHashMap));
      console.log(payload);
    } catch (err: UnknownAny) {
      throw new Error(err);
    }
  }
}

const getCronInstance = (): CronHandler => {
  return new CronHandler();
};

export default getCronInstance;
