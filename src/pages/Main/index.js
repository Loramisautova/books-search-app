import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { SearchBar } from '../../components/SearchBar';
import { ROUTES } from '../../router/consts';
import { Logo } from '../../components/Logo';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    logo: {
        display: 'flex',
        justifyContent: 'center',
    }
});

export const MainPage = () => {
    // const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    // const query = useSelector(state => state.query);

    const handleSearch = (query) => {
        history.push(`${ROUTES.SEARCH.PATH}?q=${query}`);
        // dispatch(saveQuery('ТУТ должно быть значение запроса из SearchBar'));
    };

    return (
        <Grid className={classes.root} container>
            <Grid xs={6} item>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <SearchBar onSearch={handleSearch} />
            </Grid>
        </Grid>
    );
}
