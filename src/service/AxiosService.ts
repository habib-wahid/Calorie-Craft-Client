import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {'Content-Type': 'application/json'}
});


export const fetchData = async <T>(url: string, params: Record<string, any> = {}): Promise<T> => {
    try{
        const paramConfig: AxiosRequestConfig = {params}
        console.log("para ", paramConfig);
        const response = await axiosInstance.get<T>(url, paramConfig);
        return response.data;
    } catch(err){
        console.log("Error ", err);
        throw new Error("Something happened");
    }
}