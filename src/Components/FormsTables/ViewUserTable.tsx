import { FunctionComponent } from 'react';

import { Table, TdTag, TrTag, Theader } from '../../Styles/TableStyled';
import User from '../../Models/User';
import { Rand } from '../../Utils/Helpers';
import { EditIcon, UserMarker } from '../../Styles/IconStyled';
import { StyledLink } from '../../Styles/Styled';
import { useCheck } from '../../Utils/Contexts';

interface IProps {
   item: User | null;
}

export const ViewUserTable: FunctionComponent<IProps> = ({ item }) => {
   const names = [
      { name: 'День рождения', nameItem: item?.birthday },
      { name: 'Электронная почта', nameItem: item?.email },
      { name: 'Телефон', nameItem: item?.phone },
      { name: 'Внутр.телефон', nameItem: item?.extPhone },
      { name: 'Мобильный телефон', nameItem: item?.mobilePhone },
      { name: 'Должность', nameItem: item?.position },
      { name: 'Управление', nameItem: item?.department },
      { name: 'Подразделение', nameItem: item?.division },
      { name: 'Руководитель подразделения', nameItem: item?.chiefDivision },
      { name: 'Вышестоящее подразделение', nameItem: item?.generalDivision },
      { name: 'Замещающий сотрудник', nameItem: item?.deputy },
      { name: 'Период отсутствия', nameItem: item?.absentTime },
      { name: 'Примечание', nameItem: item?.note },
      { name: 'Имя ПКЗИ', nameItem: item?.pkziName },
      { name: 'Срок действия ПКЗИ', nameItem: item?.pkziDate },
      { name: 'Расположение(Адрес)', nameItem: item?.locationFloor },
      { name: 'Карта', nameItem: item?.locationFloor },
   ];
   const Check = useCheck();
   const CurUser = Check.user?.email === item?.email ? true : false;
   const location = item?.locationPlace ? item?.locationPlace.split(',') : ['0', '0'];

   const body = () => {
      return names.map((name) => {
         if (name.name === 'Карта' && name.nameItem) {
            return (
               <TrTag key={Rand()}>
                  <TdTag colSpan={2}>
                     <UserMarker locatinPlace={item?.locationPlace} top={location && location[1]} left={location && location[0]} />
                     <img alt="План этажа" src={`/SiteAssets/FloorPlan/${name.nameItem}.jpg?id=${Rand()}`} width="1000px"></img>
                  </TdTag>
               </TrTag>
            );
         }
         if (name.nameItem) {
            return (
               <TrTag key={Rand()}>
                  <TdTag>{name.name}</TdTag>
                  <TdTag>{name.nameItem}</TdTag>
               </TrTag>
            );
         }
      });
   };
   const EditLink = () => {
      if (CurUser || Check.isModder) {
         return (
            <StyledLink to={`/EditeUser/${item && item.id}`}>
               <EditIcon />
            </StyledLink>
         );
      }
      return <></>;
   };

   return (
      <Table>
         <Theader>
            <tr>
               <th style={{ textAlign: 'left' }}>Карточка сотрудника - {item && item.name}</th>
               <th style={{ textAlign: 'right' }}>{EditLink()}</th>
            </tr>
         </Theader>
         <tbody>{body()}</tbody>
      </Table>
   );
};
