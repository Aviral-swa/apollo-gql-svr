const parseUsers = (users, userinfo) => {
  const usersList = [];
  users.forEach((user) => {
    userinfo.forEach((info) => {
      if (user.testId === info.testId) {
        const usersWithData = {
          ...user,
          city: info.city,
        };
        usersList.push(usersWithData);
      }
    });
  });
  return usersList;
};

export default parseUsers;
