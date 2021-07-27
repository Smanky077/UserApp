import React from 'react';

import { SelectStyled } from '../Styles/TextStyledComponent';

export const SelectField = (props: React.InputHTMLAttributes<HTMLSelectElement>) => {
   return (
      <div>
         <SelectStyled value={props.value} onChange={(e) => props.onChange && props.onChange(e)}>
            {props.children}
         </SelectStyled>
      </div>
   );
};
