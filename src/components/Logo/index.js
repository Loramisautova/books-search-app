import React, { useMemo } from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.main,
    },
}));

export const Logo = (props) => {
    const { size } = props;
    const classes = useStyles();

    const fontSize = useMemo(() => size === 'small' ? 'h5.fontSize' : 'h2.fontSize', [size]);

    return (
        <Typography className={classes.root} component="div">
            <Box fontSize={fontSize} fontWeight="fontWeightBold">
                Book&nbsp;Searcher
            </Box>
        </Typography>
    );
};
