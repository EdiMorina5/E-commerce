import React from 'react'

export default function Search({search}) {
    function handleSearch(e){
        const query = e.target.value;
        search(query);
    }
  return <input type="search" placeholder='Search...' name="search" onChange={handleSearch} />;

}
