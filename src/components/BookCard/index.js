import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    cover: {
        width: 250,
    },
    img: {
        backgroundColor: '#f5f5f5',
    }
  }));

export default function BookCard(props) {
    const { bookTitle, bookAuthor, bookCategories, bookImg, bookDescription } = props;
    const classes = useStyles();

    return (
        <Grid container directrion="row" className={classes.root}>
            <Grid item xs={6}>
                <Box className={classes.img} display="flex" justifyContent="center" alignItems="center" height="100%">
                    <Box boxShadow={3}>
                         <img
                            className={classes.cover}
                            src={bookImg}
                            alt={bookTitle}
                        />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box p={7}>
                    <Box mb={3}>
                        <Typography variant="subtitle1" color="textSecondary">{bookCategories}</Typography>
                    </Box>
                    <Box mb={1}>
                        <Typography fontWeight="fontWeightBold" component="h5" variant="h5">{bookTitle}</Typography>
                    </Box>
                    <Box mb={3}>
                        <Typography variant="subtitle1" color="textSecondary">{bookAuthor}</Typography>
                    </Box>
                    <Box mb={1}>
                        <Typography component="h5" variant="h5">О книге</Typography>
                    </Box>
                    <Box>
                        <Typography paragraph>{bookDescription}</Typography>
                    </Box>
                </Box>
            </Grid> 
        </Grid>
    )
}