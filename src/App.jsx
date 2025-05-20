import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';


const App = () => {
  return (
    <div >
      <Header />
      <main >
        <Outlet />
        
      </main>
    
    </div>
  );
};

export default App;