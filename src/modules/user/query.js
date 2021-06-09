import { ApolloError } from 'apollo-server-express';
import parseUsers from '../../lib/helper';

const Query = {
  getAllUsersWithData: async (_parent, args, { dataSources }) => {
    try {
      const users = await dataSources.userAPI.getAllUsers();
      const userinfo = await dataSources.userInfoAPI.getInfo();
      const usersList = parseUsers(users.data, userinfo.data);
      return {
        ...users,
        data: usersList,
      };
    } catch (err) {
      console.log(err);
      throw new ApolloError('Network Error', 404, err);
    }
  },

  getAllUserSvc: async (_parent, _args, { dataSources }) => {
    try {
      const response = await dataSources.userAPI.getAllUserSvc();
      console.log(response);
      const { users, infoData: { data: userinfo } } = response.data;
      const usersList = parseUsers(users, userinfo);
      return {
        message: 'success',
        data: usersList,
        status: 200,
      };
    } catch (err) {
      console.log(err);
      throw new ApolloError('Network Error', 404, err);
    }
  },
};

export default Query;
