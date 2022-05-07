import request from "../apiCentral";

const getIssues = async (email, password) => {
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

const getCalendars = async (filterData) => {
  return await request({
    url: "/calendars",
    method: "GET",
    params: filterData
  });
};

const jiraService = {
  getIssues,
  getCalendars
};

export default jiraService;
