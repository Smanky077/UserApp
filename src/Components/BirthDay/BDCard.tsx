import User from '../../Models/User';
import { StyledLink } from '../../Styles/Styled';

interface IProps {
   item: User;
}

export const BDCard = (props: IProps) => {
   const { item } = props;
   return (
      <div style={{ display: 'flex', width: '370px' }}>
         <div style={{ width: '100px', padding: '2px' }}>
            <img
               alt=""
               style={{ maxWidth: '95px', maxHeight: '100px' }}
               src={item.photo || '/SiteCollectionDocuments/userAppNew/noPhoto.png'}
            />
         </div>
         <div style={{ width: '270px' }}>
            <StyledLink to={`/ViewUser/${item.id}`}>{item.name}</StyledLink>
            <div style={{ fontSize: '14px' }}>{item.division}</div>
         </div>
      </div>
   );
};
