import React from 'react';

import User from '../../Models/User';
import { BDCard } from './BDCard';

interface IProps {
   items: User[] | null;
}

export const BDUsers = (props: IProps) => {
   return (
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '800px' }}>
         {props.items &&
            props.items.map((e) => {
               return (
                  <div key={e.id}>
                     <BDCard item={e} />
                  </div>
               );
            })}
      </div>
   );
};
