import axios, { AxiosRequestConfig } from 'axios';
import React,{ useState, useEffect } from 'react';

export const apiConfig:AxiosRequestConfig = {
    baseURL: 'http://sam-sng-nob06',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
     }
}
const Api = axios.create(apiConfig);
interface IUseApiResponse<T>{
    data:T|null;
    loading:boolean;
    error?:string|null;
    setData?: React.Dispatch<React.SetStateAction<T|null>>;
}


export const useApiGet = <T extends {}>(url:string , urlParams?:any,params?:{}):IUseApiResponse<T>=>{
    const [data,setData]=useState<T|null>(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [config,setConfig] = useState<AxiosRequestConfig>({method: 'get', url:urlParams?url+urlParams:url,params:params});

    const fetchData= async (conf:AxiosRequestConfig) =>{
        setLoading(true);
        try{
            const res = await Api(conf) 
            setData((res.data.value || res.data) as T);

        }catch(error){
            setError(error.toString());
        }finally{
            setLoading(false);
        }
    }
    // const findUsers = (param:string)=>{
    //     setConfig({params:`parameters=${{name:param,department:param,phone:param,extPhone:param,division:param}}`});
    // };

    useEffect(()=>{
        fetchData(config);
    },[config]);

    return {data,loading,error,setData};
}