import { RouteComponentProps } from 'react-router-dom';
//import { useContext } from 'react';

import { useApiGet } from '../Servic/Api';
import User from '../Models/User';
import { UserForm } from '../Components/Forms/UserForm';
import { ViewUserTable } from '../Components/FormsTables/ViewUserTable';
import { Loading } from '../Utils/Loading';

export const ViewUser = (props: RouteComponentProps<any>) => {
   const { id } = props.match.params;

   const user = useApiGet<User>('/_vti_bin/UsersEndPoint.svc/users/', id, {}, new User());

   return (
      <div>
         <Loading loading={user.loading}>
            <UserForm link={`/EditeUser/${id}`} user={user.data}>
               <div>
                  <ViewUserTable item={user.data} />
               </div>
            </UserForm>
         </Loading>
      </div>
   );
};
