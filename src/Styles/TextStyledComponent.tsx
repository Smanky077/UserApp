import styled from 'styled-components';

export const SearchInput = styled.input`
   width: 600px;
   font-size: 18px;
   padding: 6px 8px;
   border-radius: 5px;
   border: 1px solid #a6a6a6;
   :hover {
      border: 1px solid #ffd89c;
   }
`;

export const TextFieldStyled = styled.input`
   width: 400px;
   font-size: 16px;
   padding: 5px 8px;
   border-radius: 5px;
   border: 1px solid #a6a6a6;
   :hover {
      border: 1px solid #ffd89c;
   }
`;
export const TextAreaStyled = styled.textarea`
   width: 400px;
   font-size: 16px;
   padding: 5px 8px;
   border-radius: 5px;
   border: 1px solid #a6a6a6;
   overflow: auto;
   :hover {
      border: 1px solid #ffd89c;
   }
`;
export const SelectStyled = styled.select`
   width: 418px;
   font-size: 16px;
   padding: 5px 8px;
   border-radius: 5px;
   border: 1px solid #a6a6a6;
   ::-ms-expand {
      border: none;
      background-color: #fff;
   }
   :hover {
      border: 1px solid #ffd89c;
   }
`;

export const TextFieldWrapperStyled = styled.div`
   display: flex;
`;

export const Button = styled.button`
   font: inherit;
   border: 1px solid #ead08e;
   border-radius: 5px;
   background-color:#f9bd27;
   height:40px;
   cursor: pointer;
:hover {
    background-color: #ead08e; 
    border: 1px solid #ead08e;
 }
:active {
    background-color: #ef6b01;
    border: 1px solid #ef6b01;
`;
export const ButtonConteiner = styled.div`
   margin-left: 10px;
`;
export const ButtonsWrapper = styled.div`
   margin-top: 10px;
   display: flex;
`;
