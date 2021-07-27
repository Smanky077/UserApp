import { FunctionComponent } from 'react';

import User from '../../Models/User';
import Floor from '../../Models/Floor';
import { Rand } from '../../Utils/Helpers';
import { TextField } from '../TextField';
import { Table, Theader, TdTag, TrTag } from '../../Styles/TableStyled';
import { AcceptIcon, CancleIcon, FileDownloadIcon, DateIcon, UserMarker } from '../../Styles/IconStyled';
import { SelectField } from '../../Components/SelectField';
import { TextAreaField } from '../../Components/TextAreaField';
import { useCheck } from '../../Utils/Contexts';

interface IProps {
   user: User;
   floors: Floor[];
   setData?: React.Dispatch<React.SetStateAction<User>>;
   onSave?: () => void;
   onCancel?: () => void;
}

export const EditUserForm: FunctionComponent<IProps> = ({ user, setData, onSave, onCancel, floors }) => {
   const Check = useCheck();
   const location = user.locationPlace ? user.locationPlace.split(',') : ['0', '0'];
   const marker = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      location[0] = (e.nativeEvent.offsetX - 7).toString();
      location[1] = (e.nativeEvent.offsetY - 13).toString();
      setData && setData({ ...user, locationPlace: location[0] + ',' + location[1] });
   };

   const DownloadPKZI = () => {
      try {
         window.location.href = `${process.env.REACT_APP_API_URL}/_vti_bin/UsersEndPoint.svc/export/UserSystemPKZI`;
      } catch (er) {
         console.log(er);
      }
   };

   const PKZIForm = () => {
      if (Check.isModder || Check.isPKZIModder) {
         return (
            <>
               <TrTag>
                  <TdTag>Имя ПКЗИ</TdTag>
                  <TdTag>
                     <div style={{ display: 'flex' }}>
                        <TextField
                           value={user.pkziName !== null ? user.pkziName : ''}
                           onChange={(e) => setData && setData({ ...user, pkziName: e.target.value })}
                        />
                        <FileDownloadIcon onClick={DownloadPKZI} />
                     </div>
                  </TdTag>
               </TrTag>
               <TrTag>
                  <TdTag>Дата записи ПКЗИ</TdTag>
                  <TdTag>
                     <div style={{ display: 'flex' }}>
                        <TextField
                           value={user.pkziDate !== null ? user.pkziDate : ''}
                           onChange={(e) => setData && setData({ ...user, pkziDate: e.target.value })}
                        />
                        <DateIcon
                           onClick={() => {
                              let date = new Date();
                              setData && setData({ ...user, pkziDate: date.toLocaleDateString() });
                           }}
                        />
                     </div>
                  </TdTag>
               </TrTag>
               <TrTag>
                  <TdTag>Статус ПКЗИ</TdTag>
                  <TdTag>
                     <SelectField
                        value={user.pkziStatus !== null ? user.pkziStatus : ''}
                        onChange={(e) => setData && setData({ ...user, pkziStatus: e.target.value })}
                     >
                        <option value=""></option>
                        <option value="На руках">На руках</option>
                        <option value="Сдан">Сдан</option>
                        <option value="Не выдан">Не выдан</option>
                        <option value="Действующий">Действующий</option>
                     </SelectField>
                  </TdTag>
               </TrTag>
            </>
         );
      }
   };
   const lacation = () => {
      if (user.locationFloor !== null && user.locationFloor !== '') {
         return (
            <TrTag>
               <TdTag colSpan={2}>
                  <UserMarker locatinPlace={user.locationPlace} top={location && location[1]} left={location && location[0]} />
                  <img
                     alt="План этажа"
                     src={`/SiteAssets/FloorPlan/${user.locationFloor}.jpg?id=${Rand()}`}
                     width="1000px"
                     onClick={(e) => marker(e)}
                  />
               </TdTag>
            </TrTag>
         );
      }
   };
   const body = () => {
      return (
         <>
            <TrTag>
               <TdTag>День рождения</TdTag>
               <TdTag>
                  <TextField
                     maxLength={5}
                     value={user.birthday !== null ? user.birthday : ''}
                     onChange={(e) => setData && setData({ ...user, birthday: e.target.value })}
                  />
                  <span style={{ fontSize: '14px' }}>вводить в формате "01.01"</span>
               </TdTag>
            </TrTag>
            <TrTag>
               <TdTag>Примечание</TdTag>
               <TdTag>
                  <TextAreaField
                     size={3}
                     value={user.note !== null ? user.note : ''}
                     onChange={(e) => setData && setData({ ...user, note: e.target.value })}
                  />
               </TdTag>
            </TrTag>
            <TrTag>
               <TdTag>Расположение(Адрес)</TdTag>
               <TdTag>
                  <SelectField
                     value={user.locationFloor !== null ? user.locationFloor : ''}
                     onChange={(e) => setData && setData({ ...user, locationFloor: e.target.value })}
                  >
                     <option value=""></option>
                     {floors.map((e) => {
                        return (
                           <option key={Rand()} value={e.floor}>
                              {e.floor}
                           </option>
                        );
                     })}
                  </SelectField>
               </TdTag>
            </TrTag>
            {lacation()}
            {PKZIForm()}
         </>
      );
   };
   return (
      <Table>
         <Theader>
            <tr>
               <th style={{ textAlign: 'left' }}>Карточка сотрудника - {user && user.name}</th>
               <th style={{ textAlign: 'right' }}>
                  <div style={{ position: 'relative' }}>
                     <AcceptIcon onClick={onSave} style={{ position: 'absolute', right: '40px', bottom: '-10px' }} />
                     <CancleIcon onClick={onCancel} style={{ position: 'absolute', right: '11px', bottom: '-11px' }} />
                  </div>
               </th>
            </tr>
         </Theader>
         <tbody>{body()}</tbody>
      </Table>
   );
};
