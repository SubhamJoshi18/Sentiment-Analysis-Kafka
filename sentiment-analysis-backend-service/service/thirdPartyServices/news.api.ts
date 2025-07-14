import { apiUrl } from "../constant/api.constant";
import RequestHelper from "../requests/request.helper";

class NewsService {
  public requestHelper: RequestHelper;
  public url: string = apiUrl;

  constructor() {
    this.requestHelper = new RequestHelper(this.url);
  }

  public async fetchNewsInfromation() {
    const allNews = await this.requestHelper.getRequest();
    return allNews;
  }
}

const getsNewsInstance = (): NewsService => {
  return new NewsService();
};

export default getsNewsInstance;
