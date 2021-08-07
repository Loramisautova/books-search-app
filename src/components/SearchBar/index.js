import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

import { useLazySearchVolumeQuery } from '../../store/api';

export const SearchBar = (props) => {
    const { value, onSearch } = props;
    const [query, setQuery] = useState('');
    const [searchVolume] = useLazySearchVolumeQuery();

    useEffect(() => {
        if (value !== undefined) {
            setQuery(value);
            searchVolume(value);
        }
    }, [value]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = (e) => {
        if (query) {
            onSearch?.(query);
            e.preventDefault();
        }
    };

    return (
        <form noValidate autoComplete="off" onSubmit={handleSearch}>
            <TextField
                id="outlined-search"
                label="Search book"
                type="search"
                variant="outlined"
                value={query}
                onChange={handleChange}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )}}
                fullWidth
            />
        </form>
    )
}
