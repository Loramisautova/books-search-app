import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
  }));

export default function Search() {
    const classes = useStyles();
    
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item className={classes.root}>
                <TextField
                    id="outlined-search" 
                    label="Search book" 
                    type="search" 
                    variant="outlined"
                    InputProps={{endAdornment: <SearchIcon />}}
                />
            </Grid>
        </Grid>
    )
}