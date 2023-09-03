import React from 'react';
import Navbar from './Navbar/Navbar';
import Shop from './Footer/shop';
import Profile from './Profile/profile';

const App = () => {
  return (
    <div className="relative flex flex-col">
      <Navbar/>
      <Profile/>
      <Shop/>
    </div>
  )
}

export default App;