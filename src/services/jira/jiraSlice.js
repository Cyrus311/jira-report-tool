import jiraService from "./jiraService";

//! Login user
export const login = async (user) => {
  try {
    const response = await jiraService.login(user);
    //! Data manipulation
    return response;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return message;
  }
};
