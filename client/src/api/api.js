import axios from "axios";
const { REACT_APP_BACKEND_URL } = process.env;

const client = axios.create({
    baseURL: `${REACT_APP_BACKEND_URL}/api`,
});

client.defaults.withCredentials = REACT_APP_BACKEND_URL.includes("localhost");

export const api = {
    validateAnswers: (practiceId, answers) => client.post(`practices/${practiceId}/check`, answers),
    authorizeUser: (authData) => client.post(`/auth`, authData),
};