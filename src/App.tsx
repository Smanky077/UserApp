import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { useApiGet } from './Servic/Api';
import AppRoutes from './AppRouter/AppRoutes';
import User from './Models/User';
import { CheckContext } from './Utils/Contexts';

function App() {
   const curUser = useApiGet<User>('/_vti_bin/UsersEndPoint.svc/users/current', '', {}, new User());
   const Modder = useApiGet<boolean>('/_vti_bin/UsersEndPoint.svc/users/check/groups/moderators', '', {}, false);
   const PKZIModder = useApiGet<boolean>('/_vti_bin/UsersEndPoint.svc/users/check/groups/PKZIModers', '', {}, false);

   return (
      <CheckContext.Provider value={{ user: curUser.data || null, isModder: Modder.data || false, isPKZIModder: PKZIModder.data || false }}>
         <div>
            <BrowserRouter>
               <AppRoutes />
            </BrowserRouter>
         </div>
      </CheckContext.Provider>
   );
}

export default App;
