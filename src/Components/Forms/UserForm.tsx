import React, { FunctionComponent } from 'react';

import { ButtonConteiner, Button, ButtonsWrapper } from '../../Styles/TextStyledComponent';
import { ButtonLink, StyledLink } from '../../Styles/Styled';
interface formProps {
   title?: string;
   onSave?: () => void;
   onCancel?: () => void;
   link?: string;
}
export const UserForm: FunctionComponent<formProps> = ({ link, children }) => {
   const but = () => {
      if (link) {
         return (
            <ButtonsWrapper>
               <ButtonConteiner>
                  <ButtonLink to={link}>Изменить</ButtonLink>
               </ButtonConteiner>
            </ButtonsWrapper>
         );
      }
      return (
         <ButtonsWrapper>
            <ButtonConteiner>
               <Button>Сохранить</Button>
            </ButtonConteiner>
            <ButtonConteiner>
               <Button>Отмена</Button>
            </ButtonConteiner>
         </ButtonsWrapper>
      );
   };
   return (
      <div>
         <h2 style={{ marginBottom: '8px' }}>Телефонный справочник</h2>
         <StyledLink to="/">Вернуться</StyledLink>
         <div>{children}</div>
         {but()}
      </div>
   );
};
