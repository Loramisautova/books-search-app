import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

import { SearchBar } from '../SearchBar';
import { Logo } from '../Logo';
import { ROUTES } from '../../router/consts';

const useStyles = makeStyles((theme) => ({
    root: {
        background : '#ffffff',
        padding: `${theme.spacing(2)}px 0`,
    },
    logo: {},
    searchBar: {
        marginLeft: theme.spacing(3),
        width: 600,
    }
}));

export const Header = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();

    const queryParams = useMemo(
        () => new URLSearchParams(location.search),
        [location.search],
    );

    const handleSearch = (query) => {
        history.push(`${ROUTES.SEARCH.PATH}?q=${query}`);
    }

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <div className={classes.logo}>
                    <Logo size="small" />
                </div>
                <div className={classes.searchBar}>
                    <SearchBar value={queryParams.get('q')} onSearch={handleSearch} />
                </div>
            </Toolbar>
        </AppBar>
    )
}
