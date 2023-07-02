import httpClient from "./HttpClient";

const BASE_URL = "/api/v1/file/";

export default {
    uploadFile(data: FormData) {
        return httpClient.post(BASE_URL + "embedding", data);
    },
};
