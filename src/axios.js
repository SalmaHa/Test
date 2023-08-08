// Import axios
import axios from 'axios';

// Create an instance of axios with default settings
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000', // This will be prepended to url parameter of request methods
  timeout: process.env.REACT_APP_TIMEOUT || 1000, // Specifies the number of milliseconds before the request times out
  headers: {'X-Custom-Header': process.env.REACT_APP_CUSTOM_HEADER} // Adds headers to the HTTP requests
});

// Export the instance to be used in other parts of the application
export default instance;