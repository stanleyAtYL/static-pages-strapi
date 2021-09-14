import { Grid, makeStyles, Typography } from '@material-ui/core';
import { FeatureItem } from 'components/modecules';
import { GlobalTheme } from '@/theme';
import { useTranslation } from 'react-i18next';
import backgroundPhoto from '../../../../../public/home/content-background2.svg';
import backgroundPhotoCN from '../../../../../public/home/content-background2-CN.svg';
import { useEffect, useState } from 'react';
import i18next from 'i18next';

const photoPath = {
  'en-US': backgroundPhoto,
  'zh-CN': backgroundPhotoCN,
};

const useStyles = makeStyles<GlobalTheme>((theme) => ({
  imgCanvas: {
    width: 'calc(100%)',
    zIndex: -1,
  },

  processImg: {
    width: '1200px',
  },

  contentCanvas: {
    marginTop: '20%',
    position: 'absolute',
  },

  processTitle: {
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '150%',
    color: '#051229',
  },

  processContent: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '170%',
    textAlign: 'center',
    color: '#051229',

    width: 245,
  },
}));

const Process = (): JSX.Element => {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState('/');
  const { t, i18n } = useTranslation('homepage');

  useEffect(() => {
    setImgUrl(photoPath[i18n.languages[0]]);
  }, [i18n.languages[0]]);

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.contentCanvas}
      >
        <Grid item xs={12}>
          {/* <Typography align='center' variant='h5'>100% Digitalized,<br></br> Automated and<br></br> Streamlined Process</Typography> */}
          <Typography align="center" variant="h5">
            {t('process summary')}
          </Typography>
        </Grid>
        <Grid item className={classes.processImg}>
          <img
            style={{ width: '1140px', paddingLeft: '30px' }}
            src={'/home/process2.svg'}
          />
          <div style={{ display: 'inline', float: 'left' }}>
            <Typography
              variant="h5"
              align="center"
              className={classes.processTitle}
            >
              {t('process1 title')}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.processContent}
            >
              {/* Fill out your application online <br></br>in as little as 5
              minutes. */}
              {t('process1 content')}
            </Typography>
          </div>
          <div
            style={{ display: 'inline', float: 'left', paddingLeft: '50px' }}
          >
            <Typography
              variant="h5"
              align="center"
              className={classes.processTitle}
            >
              {t('process2 title')}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.processContent}
            >
              {/* Our underwriting engine and <br></br>
              team will analyze your deal <br></br>
              to provide the best <br></br>
              possible terms. */}
              {t('process2 content')}
            </Typography>
          </div>
          <div
            style={{ display: 'inline', float: 'left', paddingLeft: '60px' }}
          >
            <Typography
              variant="h5"
              align="center"
              className={classes.processTitle}
            >
              {t('process3 title')}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.processContent}
            >
              {/* Receive your approval with the<br></br>
              confidence that you will <br></br>
              be able to close quickly. */}
              {t('process3 content')}
            </Typography>
          </div>
          <div
            style={{ display: 'inline', float: 'left', paddingLeft: '40px' }}
          >
            <Typography
              variant="h5"
              align="center"
              className={classes.processTitle}
            >
              {t('process4 title')}
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              className={classes.processContent}
            >
              {/* Close deals in as little as 5 days, <br></br>
              and the process is finished! */}
              {t('process4 content')}
            </Typography>
          </div>
        </Grid>

        {/* <Grid container justify='center' style={{position:'relative',width:'1200px',right:'50px',bottom:'70px'}} spacing={5}>
                    <div style={{width:'150px'}}>
                    <FeatureItem 
                        contentPosition='bottom' 
                        title='Application' 
                        content='Fill out your application online
                        in as little as 5 minutes.'
                        titleWidth='300px'
                        contentWidth='300px'
                    />
                    </div>
                    <Grid style={{paddingLeft:'50px'}}>
                    <FeatureItem 
                        contentPosition='bottom' 
                        title='Underwriting' 
                        content='Our underwriting engine and team will analyze your deal 
                        to provide the best 
                        possible terms.'
                        titleWidth='300px'
                        contentWidth='300px'
                    />
                    </Grid>
                    <Grid item>
                    <FeatureItem 
                        contentPosition='bottom' 
                        title='Approval' 
                        content='Receive your approval with the confidence that you will 
                        be able to close quickly.'
                        titleWidth='300px'
                        contentWidth='300px'
                    />
                    </Grid>
                    <Grid item>
                    <FeatureItem 
                        contentPosition='bottom' 
                        title='Closing' 
                        content='Close deals in as little as 5 days, and the process is finished!'
                        titleWidth='300px'
                        contentWidth='300px'
                    />
                    </Grid>
                </Grid>
             */}
      </Grid>
      <img className={classes.imgCanvas} src={imgUrl} />
    </div>
  );
};

export default Process;
