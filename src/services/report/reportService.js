import request from "../apiCentral";

// var axios = require("axios");

// var config = {
//   method: "get",
//   url: "http://zistvy69:8080/rest/api/2/search?jql=project=ZD&customfield_11804.id=16607&maxResults=1000",
//   headers: {
//     Authorization: "Basic YXRlbWVsOkZiNTM1MyoqKg=="
//   }
// };
// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

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
