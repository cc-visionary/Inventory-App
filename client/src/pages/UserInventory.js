import React, { useState } from 'react';

import '../assets/styles/pages/UserInventory.css';

const UserInventory = () => {
  const [searchValue, setSearchValue] = useState('');

  return <div id='user-inventory'>
    <div className="header">
      <input 
        className="search-input" 
        placeholder="Search" 
        onChange={(e) => setSearchValue(e.target.value)} 
        value={searchValue} 
      />
      <></>
    </div>
  </div>
};

export default UserInventory;