import { makeStyles, Typography } from "@material-ui/core";
import React, { FC } from 'react';
import { ProductBanner } from '@/components/molecules';
import { Advantage, FeatureItem, Introduction1, Review } from "./components";
import { Features } from "./components";
import { Introduction2 } from './components';
import { Features2 } from './components';
import { HelpfulResource } from '@/components/organisms';
// import 'assets/css/divider.css';

const useStyles = makeStyles(() => ({
    root:{},
}));



export const BridgeProd: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ProductBanner scene={'bridge'} />
            <Advantage/>
            <Features/>
            <div style={{marginBottom:'40px'}}>
                <Introduction1/>
            </div>

            <div style={{marginBottom:'40px'}}>
                <Introduction2/>
            </div>

            <div style={{marginBottom:'80px'}}>
                <Features2/>
            </div>

            <Review/>
            <HelpfulResource scene={'bridge'} />
            
        </div>
    )
}