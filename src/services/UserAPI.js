import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

class userAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.userURL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getAllUsers() {
    return this.get('api/user/');
  }

  async getAllUserSvc() {
    return this.get('api/user/svc');
  }
}

export default userAPI;
