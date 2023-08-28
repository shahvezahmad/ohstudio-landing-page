import React from 'react';
import Navbar from './Navbar/Navbar';
import Shop from './Footer/shop';

const App = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar/>
      <Shop/>
    </div>
  )
}

export default App;