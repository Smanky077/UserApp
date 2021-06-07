import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApiGet, apiConfig } from '../Servic/Api';
import User from '../Models/User';
import axios from 'axios';

export const Users: React.FunctionComponent = () => {
   const [param, setParam] = useState('');
   const [data, setData] = useState<User[]>();
   // const { data, loading, error, findUsers } = useApiGet<User[]>('/_vti_bin/UsersEndPoint.svc/users', {
   //    parameters: { name: param, department: param, phone: param, extPhone: param, division: param },
   // });

   const Find = async () => {
      const res = await axios.get('/_vti_bin/UsersEndPoint.svc/users', {
         ...apiConfig,
         params: { parameters: { name: param, department: param, phone: param, extPhone: param, division: param } },
      });
      setData(res.data);
   };
   return (
      <div>
         <input type="text" value={param} onChange={(e) => setParam(e.target.value)} />
         <button onClick={Find}>Find</button>
      </div>
   );
};
