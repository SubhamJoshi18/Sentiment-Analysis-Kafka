import { UnknownAny } from "../../types/types";
import RequestHelper from "../../requests/request.helper";
import { apiUrl } from "../../constant/api.constant";

class CronHandler {
  public requestHelper: RequestHelper;

  constructor() {
    this.requestHelper = new RequestHelper(apiUrl);
  }

  public async evaluateTheProcess() {
    try {
      const response = await this.requestHelper.getRequest();
      console.log(response);
    } catch (err: UnknownAny) {
      throw new Error(err);
    }
  }
}

const getCronInstance = (): CronHandler => {
  return new CronHandler();
};

export default getCronInstance;
