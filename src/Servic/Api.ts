import axios, { AxiosRequestConfig } from 'axios';
import React,{ useState, useEffect } from 'react';

import { successSave, errorSave } from '../Utils/Notify';

export const apiConfig:AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL||'',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'      
     }
}
const Api = axios.create(apiConfig);
interface IUseApiResponse<T>{
    data:T;
    loading:boolean;
    error?:string|null;
    setData?: React.Dispatch<React.SetStateAction<T>>;
    put?:(item:T)=>void;
}


export const useApiGet = <T extends {}>(baseUrl:string , urlParams:any|boolean,params:{},initial:T):IUseApiResponse<T>=>{
    const url = baseUrl;
    const [data,setData]=useState<T>(initial);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState<string|null>(null);
    const [config,setConfig] = useState<AxiosRequestConfig>({method: 'get', url:urlParams?url+urlParams:url,params:params});

    const fetchData= async (conf:AxiosRequestConfig) =>{
        setLoading(true);
        try{
            const res = await Api(conf)
            if(conf.method==="PUT"||conf.method==="POST"){
                successSave('Сохранено');
            }else{
                setData((res.data.value || res.data) as T);
            }
                
        }catch(error){
            errorSave("Что то пошло не так");
            setError(error.toString());
        }finally{
            setLoading(false);
        }
    }
    const put = (item: T)=>{
        setConfig({method:'PUT',url,data:item});
    }

    useEffect(()=>{
        fetchData(config);
    },[config]);

    return {data,loading,error,setData,put};
}