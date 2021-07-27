import { RouteComponentProps } from 'react-router-dom';
//import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';

import { useApiGet } from '../Servic/Api';
import User from '../Models/User';
import Floor from '../Models/Floor';
import { Loading } from '../Utils/Loading';
import { UserForm } from '../Components/Forms/UserForm';
import { EditUserForm } from '../Components/FormsTables/EditUserForm';
import { GoBack } from '../Utils/Helpers';

export const EditeUser = (props: RouteComponentProps<any>) => {
   const { id } = props.match.params;
   const { data, setData, loading, put } = useApiGet<User>('/_vti_bin/UsersEndPoint.svc/users', '/' + id, {}, new User());
   const floors = useApiGet<Floor[]>('/_vti_bin/UsersEndPoint.svc/getFloors', null, {}, []);
   const onSave = () => {
      put && put(data);
   };
   const onCancel = () => {
      GoBack(props.history);
   };
   return (
      <div>
         <Loading loading={loading}>
            <UserForm user={data} setData={setData} onSave={onSave} onCancel={onCancel}>
               <EditUserForm user={data} floors={floors.data} setData={setData} onSave={onSave} onCancel={onCancel} />
            </UserForm>
         </Loading>
      </div>
   );
};
