import React from 'react';



const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className='pa2 br3 mg3 '>
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
        <input className='pa3 br2 bg-near-white mg3' type="search"  placeholder="Search Robots" onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;