import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import AppRoutes from './AppRouter/AppRoutes';

function App() {
   return (
      <div>
         <BrowserRouter>
            <AppRoutes />
         </BrowserRouter>
      </div>
   );
}

export default App;
