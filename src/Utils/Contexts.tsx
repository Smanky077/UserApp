import { createContext, useContext } from 'react';

import User from '../Models/User';

interface Check {
   user: User | null;
   isModder?: boolean;
   isPKZIModder?: boolean;
}

export const CheckContext = createContext<Check>({ user: new User() });
export const useCheck = () => useContext(CheckContext);
