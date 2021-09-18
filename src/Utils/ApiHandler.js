import axios from "axios";

class ApiHanlder {
    constructor() {
        this.instance = axios.create();
        this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
    }
    handleError = (res) => {
        return Promise.reject(res);
    }
    handleSuccess = (res) => {
        return res;
    }
    get = (url) => {
        return this.instance.get(url);
    }
    post = (url, data) => {
        return this.instance.post(url, data);
    }
    put = (url, data) => {
        return this.instance.put(url, data);
    }
    put = (url) => {
        return this.instance.delete(url);
    }
}
export default new ApiHanlder();