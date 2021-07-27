import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure({hideProgressBar:true,closeButton:false});

export const successSave=(msg:string)=>toast.success(msg);
export const errorSave = (msg:string)=> toast.error(msg);