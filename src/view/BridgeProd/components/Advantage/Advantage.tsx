import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    height: '400px',
    width: '100%',
    marginTop: '120px',
    marginBottom: '120px',
  },
  lineConvas: {
    position: 'absolute',
    height: '350px',
    width: '1200px',
  },
  lineImg: {
    height: '177px',
    marginTop: '130px',
  },
  contentConvas: {
    height: '350px',
    width: '1200px',
  },
  titleConvas: {
    float: 'right',
    width: '700px',
  },
  roofImg: {
    position: 'relative',
    right: '62px',
    top: '30px',
  },
  textConvas: {
    position: 'relative',
    top: '200px',
    left: '40px',
    width: 650,
  },
}));

const Advantage = (): JSX.Element => {
  const classes = useStyles();
  const { t } = useTranslation('bridge');

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid
        container
        item
        xs={12}
        className={classes.lineConvas}
        justify="center"
      >
        <img src={'/bridge/line.svg'} className={classes.lineImg} />
      </Grid>
      <Grid container item xs={12} className={classes.contentConvas}>
        <Grid item xs={6}>
          <div data-aos="fade-right" className={classes.titleConvas}>
            <div className={classes.roofImg}>
              <img src={'/bridge/roof.svg'} />
            </div>
            <div>
              <Typography variant="h3">{t('take advantage')}</Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.textConvas}>
            <Typography data-aos="fade-left" variant={'subtitle1'}>
              {t('short term program')}
              {/* Bridge loan is a short-term program designed to be
              <br />
              utilized until permanent financing is secured or a<br />
              property is sold. It is very popular for real estate <br />
              investors when it comes to purchasing properties to <br />
              fix and flip. */}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Advantage;
