import React from 'react';
import { Input } from '../Styles/TextStyledComponent';

export const TextField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
   return (
      <div style={{ display: 'flex' }}>
         <Input
            onKeyPress={(e) => props.onKeyPress && props.onKeyPress(e)}
            placeholder={props.placeholder ? props.placeholder : ''}
            type="text"
            value={props.value}
            onChange={(e) => props.onChange && props.onChange(e)}
         />
      </div>
   );
};
