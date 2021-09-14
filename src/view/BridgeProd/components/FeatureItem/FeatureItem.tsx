import { useState } from "react";
import { Grid, makeStyles, Typography } from '@material-ui/core';

interface FeatureItemProps {
    imgUrl:string,
    title:string,
    content:string,
}

const useStyles = makeStyles(() => ({
    item:{
        width:'370px',
        height:'150px'
    },

    icon:{
        paddingRight:'10px'
    },

    content:{
        width:'270px',
        padding:'20px',
        borderLeft:'3px solid #28514D',
        background:'#F5FBF4'
    },

    title:{
        fontFamily:'MontserratBold',

    }

}))

const FeatureItem = ({
    imgUrl,
    title,
    content,
    ...rest
}:FeatureItemProps):JSX.Element => {
    const classes = useStyles();

    return (
        <Grid container className={classes.item}>
            <Grid item className={classes.icon}>
                <img src={imgUrl}/>
            </Grid>
            <Grid item className={classes.content}>
                <Typography variant='subtitle2' className={classes.title}>{title}</Typography>
                <Typography variant='subtitle2'>
                    {content}
                </Typography>
            </Grid>
        </Grid>
    )

}

export default FeatureItem;