import reportService from "./reportService";

//! Module based report
export const moduleBased = async (user) => {
  try {
    const response = await reportService.getIssues(user);
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

//! Team based report
export const teamBased = async (user) => {
  try {
    const response = await reportService.getIssues(user);
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

//! Work on hand report
export const workOnHand = async (user) => {
  try {
    const response = await reportService.getIssues(user);
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

//! Person based report
export const personBased = async (user) => {
  try {
    const response = await reportService.getIssues(user);
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
