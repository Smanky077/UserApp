import styled from 'styled-components';
import { FaRegEdit, FaCheck, FaTimes, FaFileDownload } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

interface IUserMarker {
   locatinPlace?: string;
   left?: string;
   top?: string;
}

export const DateIcon = styled(MdDateRange)`
   color: #3d464c;
   margin-left: 5px;
   margin-top: 5px;
   cursor: pointer;
   font-size: 20px;
   :hover {
      font-size: 25px;
   }
`;
export const EditIcon = styled(FaRegEdit)`
   color: #fff;
   margin-right: 17px;
   font-size: 20px;
   :hover {
      font-size: 25px;
      color: #ffd89c;
   }
`;
export const FileDownloadIcon = styled(FaFileDownload)`
   color: #3d464c;
   margin-left: 5px;
   margin-top: 5px;
   cursor: pointer;
   font-size: 20px;
   :hover {
      font-size: 25px;
   }
`;
export const AcceptIcon = styled(FaCheck)`
   color: #fff;
   margin-right: 17px;
   font-size: 20px;
   cursor: pointer;
   :hover {
      font-size: 25px;
      color: #ffd89c;
   }
`;
export const CancleIcon = styled(FaTimes)`
   color: #fff;
   margin-right: 17px;
   font-size: 20px;
   cursor: pointer;
   :hover {
      font-size: 25px;
      color: #ffd89c;
   }
`;
export const UserMarker = styled.div<IUserMarker>`
   width: 20px;
   height: 20px;
   margin: 0;
   background-image: url(/SiteCollectionDocuments/userAppNew/marker.png);
   background-size: cover;
   ${(props) => (props.locatinPlace ? 'display:block' : 'display:none')};
   margin-top: ${(props) => props.top}px;
   margin-left: ${(props) => props.left}px;
   position: absolute;
   z-index: 50;
`;
