import request from "../apiCentral";

export const login = async (email, password) => {
  return await request(
    {
      url: `/users/login`,
      method: "POST",
      data: {
        email: email,
        password: password
      }
    },
    false
  );
};

const getCalendars = (filterData) => {
  return request({
    url: "/calendars",
    method: "GET",
    params: filterData
  });
};

const jiraService = {
  login,
  getCalendars
};

export default jiraService;
