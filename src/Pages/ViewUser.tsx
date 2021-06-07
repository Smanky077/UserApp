import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export const ViewUser = (props: RouteComponentProps<any>) => {
   return <div>{props.match.params.id}</div>;
};
