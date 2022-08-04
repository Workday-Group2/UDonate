const PRODUCTION_API_BASE_URL = "https://u-d0nate.herokuapp.com";
const DEVELOPMENT_API_BASE_URL = "https://u-d0nate.herokuapp.com";

const API_BASE_URL = process.env.NODE_ENV === "production" ? PRODUCTION_API_BASE_URL : DEVELOPMENT_API_BASE_URL;

export default API_BASE_URL