import React from 'react';
import { SearchInput } from '../Styles/TextStyledComponent';

export const SearchTextField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
   return (
      <div style={{ display: 'flex' }}>
         <SearchInput
            onKeyPress={(e) => props.onKeyPress && props.onKeyPress(e)}
            placeholder={props.placeholder ? props.placeholder : ''}
            type="text"
            value={props.value}
            onChange={(e) => props.onChange && props.onChange(e)}
         />
      </div>
   );
};
