import axios from "axios";

export default axios.create({
    // Hosted API base URL
    
    // Network base URL
    baseURL: 'http://192.168.0.205:3005/api' 
    // Local base URL
    // baseURL: 'http://localhost:3005/api'
});