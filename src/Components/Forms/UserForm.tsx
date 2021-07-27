import { FunctionComponent } from 'react';
import FileBase from 'react-file-base64';

import { ButtonConteiner, Button, ButtonsWrapper } from '../../Styles/TextStyledComponent';
import { ButtonLink, StyledLink } from '../../Styles/Styled';
import { useCheck } from '../../Utils/Contexts';
import User from '../../Models/User';

interface formProps {
   title?: string;
   onSave?: () => void;
   onCancel?: () => void;
   setData?: React.Dispatch<React.SetStateAction<User>>;
   link?: string;
   user?: User;
}
export const UserForm: FunctionComponent<formProps> = ({ user, link, children, onSave, setData, onCancel }) => {
   const Check = useCheck();
   const CurUser = Check.user?.email === user?.email ? true : false;
   const but = () => {
      if (link) {
         return (
            <ButtonsWrapper>
               <ButtonConteiner>
                  <ButtonLink to={link} curuser={CurUser ? 1 : 0} ismodder={Check.isModder ? 1 : 0}>
                     Изменить
                  </ButtonLink>
               </ButtonConteiner>
            </ButtonsWrapper>
         );
      }
      return (
         <ButtonsWrapper>
            <ButtonConteiner>
               <Button onClick={onSave}>Сохранить</Button>
            </ButtonConteiner>
            <ButtonConteiner>
               <Button onClick={onCancel}>Отмена</Button>
            </ButtonConteiner>
         </ButtonsWrapper>
      );
   };
   const img = () => {
      if (link) {
         return (
            <img
               src={user?.photo || '/SiteCollectionDocuments/userAppNew/noPhoto.png'}
               alt=""
               width="150px"
               style={{ display: 'block', marginTop: '10px', marginBottom: '10px' }}
            />
         );
      }
      return (
         <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <img
               src={user?.photo || '/SiteCollectionDocuments/userAppNew/noPhoto.png'}
               alt=""
               width="150px"
               style={{ display: 'block', marginTop: '10px' }}
            />
            <FileBase
               multiple={false}
               onDone={(t) => {
                  if (user) setData && setData({ ...user, photo: t.base64 });
               }}
            />
         </div>
      );
   };

   return (
      <div>
         <h2 style={{ marginBottom: '8px' }}>Телефонный справочник</h2>
         <StyledLink style={{ fontSize: '14px' }} to="/">
            Вернуться
         </StyledLink>
         {img()}
         <div>{children}</div>
         {but()}
      </div>
   );
};
