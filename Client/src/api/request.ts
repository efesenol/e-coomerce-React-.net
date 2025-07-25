import axios, {AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

axios.defaults.baseURL = "http://localhost:5224/api/";

axios.interceptors.response.use(response => {
    return response
},(error: AxiosError) => {
    
    const{data, status} = error.response as AxiosResponse;
    switch(status)
    {
        case 400:
            if(data.errors) {
                const modelErrors : string[] = [];
                for(const key in data.errors){
                    modelErrors.push(data.errors[key]);
                }
                throw modelErrors
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 404:
            router.navigate("/not-found")
            break;
        case 500:
            router.navigate("/server-error", {state:{error: data, status: status}})
            break;
        default:
            break;

    }
    return Promise.reject(error.response);
})

const queries ={
    get: (url: string) => axios.get(url).then((response: AxiosResponse)=> response.data),
    post: (url: string, body: {}) => axios.post(url,body).then((response: AxiosResponse)=> response.data),
    put: (url: string, body: {}) => axios.put(url, body).then((response: AxiosResponse)=> response.data),
    delete: (url: string) => axios.delete(url).then((response: AxiosResponse)=> response.data),
}

const Errors = {
    get400Error: () => queries.get("/error/bad-request"),
    get401Error: () => queries.get("/error/unauthorized"),
    get404Error: () => queries.get("/error/not-found"),
    get500Error: () => queries.get("/error/server-error"),
    getValidationError: () => queries.get("/error/validation-error")

}
const Catalog = {
    list: () => queries.get("products"),
    details: (id: number) => queries.get(`products/${id}`)
}

const request = {
    Catalog, Errors
}

export default request