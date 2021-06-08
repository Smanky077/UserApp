import styled from 'styled-components';

interface iProps {
   prop?: string;
}

export const Table = styled.table`
   margin: 0 auto;
   border-collapse: collapse;
   table-layout: fixed;
   width: 100%;
`;
export const TrTag = styled.tr`
   background: #fff;
   font-size: 15px;
   :nth-child(even) {
      background: #f7f7f7;
   }
`;

export const TdTag = styled.td<iProps>`
   padding: 6px 2px;
   word-wrap: break-word;
   ${(props) => (props.prop ? 'text-align:' + props.prop : null)};
`;

export const Theader = styled.thead`
   background-color: #3d464c;
   height: 46px;
   color: #fff;
`;
