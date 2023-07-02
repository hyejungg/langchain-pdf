import httpClient from "./HttpClient";

const BASE_URL = "/api/v1/query/";

export default {
    chat(data: any) {
        return httpClient.post(BASE_URL + "chat", data);
    },
};
