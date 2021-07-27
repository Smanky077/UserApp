import { TextFieldStyled, TextFieldWrapperStyled } from '../Styles/TextStyledComponent';

export const TextField = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
   return (
      <TextFieldWrapperStyled>
         <TextFieldStyled
            maxLength={props.maxLength}
            type="text"
            value={props.value}
            onChange={(e) => props.onChange && props.onChange(e)}
         />
      </TextFieldWrapperStyled>
   );
};
