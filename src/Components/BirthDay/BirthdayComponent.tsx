import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useApiGet } from '../../Servic/Api';
import { GetDayMonth } from '../../Utils/Helpers';
import User from '../../Models/User';
import { BDUsers } from './BDUsers';

export const BirthdayComponent = () => {
   const today = GetDayMonth(new Date().toLocaleDateString());
   const yesterday = GetDayMonth(new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString());
   const tomorrow = GetDayMonth(new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString());
   const todayBirthUsers = useApiGet<User[]>('/_vti_bin/UsersEndPoint.svc/users', null, { parameters: { birthday: today } });
   const yesterdayBirthUsers = useApiGet<User[]>('/_vti_bin/UsersEndPoint.svc/users', null, { parameters: { birthday: yesterday } });
   const tomorrowBirthUsers = useApiGet<User[]>('/_vti_bin/UsersEndPoint.svc/users', null, { parameters: { birthday: tomorrow } });
   return (
      <div style={{ width: '800px' }}>
         <h3>Дни рождения</h3>
         <Tabs>
            <TabList>
               <Tab>Сегодня</Tab>
               <Tab>Завтра</Tab>
               <Tab>Вчера</Tab>
            </TabList>
            <TabPanel>
               <BDUsers items={todayBirthUsers.data} />
            </TabPanel>
            <TabPanel>
               <BDUsers items={yesterdayBirthUsers.data} />
            </TabPanel>
            <TabPanel>
               <BDUsers items={tomorrowBirthUsers.data} />
            </TabPanel>
         </Tabs>
      </div>
   );
};
