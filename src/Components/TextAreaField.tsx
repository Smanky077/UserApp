import { TextAreaStyled } from '../Styles/TextStyledComponent';

export const TextAreaField = (props: React.InputHTMLAttributes<HTMLTextAreaElement>) => {
   return (
      <div>
         <TextAreaStyled rows={props.size} value={props.value} onChange={(e) => props.onChange && props.onChange(e)} />
      </div>
   );
};
