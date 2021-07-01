import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useApiGet } from '../Servic/Api';
import User from '../Models/User';
import { UserForm } from '../Components/Forms/UserForm';
import { ViewUserTable } from '../Components/ViewUserTable';

export const ViewUser = (props: RouteComponentProps<any>) => {
   const { id } = props.match.params;

   const user = useApiGet<User>('/_vti_bin/UsersEndPoint.svc/users/', id);
   return (
      <div>
         <UserForm link={`/EditeUser/${id}`}>
            <div>
               <ViewUserTable item={user.data && user.data} />
            </div>
         </UserForm>
      </div>
   );
};
