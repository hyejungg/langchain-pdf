import axios from "axios";

const httpClient = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json; charset=utf-8",
        Pragma: "no-cache",
    },
});

export default httpClient;
