import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

class userInfoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.userInfoURL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getInfo() {
    return this.get('api/userinfo/');
  }
}

export default userInfoAPI;
