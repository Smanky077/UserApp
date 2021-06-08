import { FunctionComponent } from 'react';

import User from '../Models/User';
import { Table, TdTag, TrTag, Theader } from '../Styles/TableStyled';
import { StyledLink } from '../Styles/Styled';

interface ITableProps {
   items: User[] | null;
   title?: string;
   height?: string;
}

export const SearchTable: FunctionComponent<ITableProps> = ({ items }) => {
   const body = () => {
      if (items === null) {
         return <div>Не найдено</div>;
      }
      return items.map((item) => {
         return (
            <TrTag key={item.id}>
               <TdTag>
                  <img src={item.photo} />
               </TdTag>
               <TdTag prop="center">
                  <StyledLink to={`/ViewUser/${item.id}`}>{item.name}</StyledLink>
               </TdTag>
               <TdTag>{item.position}</TdTag>
               <TdTag>{item.department}</TdTag>
               <TdTag>{item.email}</TdTag>
               <TdTag prop="center">{item.extPhone}</TdTag>
            </TrTag>
         );
      });
   };

   return (
      <div style={{ maxWidth: '1300px', marginTop: '20px', display: items === null ? 'none' : 'block' }}>
         <Table>
            <Theader>
               <tr>
                  <th>Фото</th>
                  <th>ФИО</th>
                  <th>Должность</th>
                  <th>Подразделение</th>
                  <th>Эл.почта</th>
                  <th>Внут.Телефон</th>
               </tr>
            </Theader>
            <tbody>{body()}</tbody>
         </Table>
      </div>
   );
};
