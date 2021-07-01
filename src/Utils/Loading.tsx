import { FunctionComponent } from 'react';

export const Loading: FunctionComponent<{ loading: boolean }> = ({ loading, children }) => {
   if (loading) return <div>Загрузка...</div>;
   return <>{children}</>;
};
