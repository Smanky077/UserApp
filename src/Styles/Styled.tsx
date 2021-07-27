import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ILinkBut {
   curuser: number;
   ismodder?: number | null | undefined;
}

export const StyledLink = styled(Link)`
   color: #000;
   font-weight: 600;
   :hover {
      text-decoration: none;
   }
`;

export const ButtonLink = styled(Link)<ILinkBut>`
   color: #000;
   display:${(props) => (props.curuser === 1 || props.ismodder === 1 ? 'inline-block' : 'none')};
   text-decoration: none;
   font: inherit;
   border: 1px solid #ead08e;
   border-radius: 5px;
   background-color: #f9bd27;
   padding: 8.6px 5.5px;
   cursor: pointer;
   :hover {
      background-color: #ead08e; 
      border: 1px solid #ead08e;
   }
  :active {
      background-color: #ef6b01;
      border: 1px solid #ef6b01;
`;
