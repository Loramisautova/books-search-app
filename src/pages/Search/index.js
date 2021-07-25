import React from 'react';

import SearchBar from '../../components/SearchBar';

export default function Search() {

    function handleSearch(e) {
        console.log('You clicked search.');
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
        </div>
    );
}