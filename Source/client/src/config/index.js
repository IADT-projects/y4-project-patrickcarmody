import axios from "axios";

export default axios.create({
    // Hosted API base URL
    baseURL: 'https://us-central1-crowdfunder-e7a8f.cloudfunctions.net/api'
    // Local base URL
    // baseURL: 'http://localhost:3005/'
});