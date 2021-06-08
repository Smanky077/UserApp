import React, { useState, useEffect } from 'react';
import User from '../Models/User';
import axios from 'axios';

import { apiConfig } from '../Servic/Api';
import { SearchTable } from '../Components/SearchTable';
import { TextField } from '../Components/TextField';
import { Button, ButtonConteiner } from '../Styles/TextStyledComponent';
import { Loading } from '../Utils/Loading';

export const Users: React.FunctionComponent = () => {
   const [param, setParam] = useState('');
   const [data, setData] = useState<User[] | null>(null);
   const [loading, setLoad] = useState(false);
   const Find = async () => {
      setLoad(true);
      try {
         const res = await axios.get('/_vti_bin/UsersEndPoint.svc/users', {
            ...apiConfig,
            params: { parameters: { name: param, department: param, phone: param, extPhone: param, division: param } },
         });
         setData(res.data);
      } catch (error) {
      } finally {
         setLoad(false);
      }
   };
   const Clear = () => {
      setData(null);
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
         <h1>Телефонный справочник</h1>
         <div style={{ display: 'flex' }}>
            <TextField
               onKeyPress={(e) => (e.key === 'Enter' ? Find : null)}
               placeholder="Введите ФИО/подразделение/телефон"
               type="text"
               value={param}
               onChange={(e) => setParam(e.target.value)}
            />
            <ButtonConteiner>
               <Button onClick={Find}>Поиск</Button>
            </ButtonConteiner>
            <ButtonConteiner>
               <Button onClick={Clear}>Очистить</Button>
            </ButtonConteiner>
         </div>
         <Loading loading={loading}>
            <div style={{ display: 'flex' }}>
               <SearchTable items={data}></SearchTable>
            </div>
         </Loading>
      </div>
   );
};
