import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  tableTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#FFFFFF',
  },
  title: {
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  subtitle: {
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '170%',
    color: 'rgba(0, 0, 0, 0.4)',
  },
  contentSubtitle: {
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '150%',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  contentTitle: {
    fontStyle: 'bold',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '150%',
    color: '#156EFA',
  },
  content: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '170%',
    color: 'rgba(0, 0, 0, 0.5)',
  },
}));

const Disclosure = (): JSX.Element => {
  const classes = useStyles();
  const { t } = useTranslation('disclosuresAndLicenses');

  return (
    <Grid container>
      <img
        src="/home/logos.png"
        style={{ position: 'absolute', zIndex: -1, width: '100%' }}
      />
      <Grid container item xs={12} justify="center" className={classes.title}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              {t('title')}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.subtitle}
            >
              {t('subtitle')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="subtitle2" align="center">
            <p>
              {t('table desc1')}
              <br></br>
              {t('table desc2')}{' '}
              <a
                style={{ color: '#156EFA' }}
                href="http://www.nmlsconsumeraccess.com/EntityDetails.aspx/COMPANY/2090196"
              >
                http://www.nmlsconsumeraccess.com/EntityDetails.aspx/COMPANY/2090196
              </a>
            </p>
            <br></br>
            <br></br>
          </Typography>
        </Grid>

        <Grid item xs={9}>
          <table
            style={{
              boxShadow: '2px 2px 7px 0px rgba(0, 0, 0, 0.15)',
              width: '100%',
              border: '0.5px solid #A6A9AC',
              borderCollapse: 'collapse',
            }}
          >
            <tr
              style={{
                background: '#156EFA',
                height: '64px',
              }}
            >
              <th
                style={{
                  textAlign: 'center',
                  width: '210px',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle1" className={classes.tableTitle}>
                  {t('Jurisdiction')}
                </Typography>
              </th>
              <th
                style={{
                  textAlign: 'center',
                  width: '687px',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle1" className={classes.tableTitle}>
                  {t('Regulatory Agency')}
                </Typography>
              </th>
              <th
                style={{
                  textAlign: 'center',
                  width: '250px',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle1" className={classes.tableTitle}>
                  {t('License Type')}
                </Typography>
              </th>
              <th
                style={{
                  textAlign: 'center',
                  width: '175px',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle1" className={classes.tableTitle}>
                  {t('License No.')}
                </Typography>
              </th>
            </tr>
            <tr
              style={{
                height: '80px',
                borderBottom: '0.5px solid #A6A9AC',
              }}
            >
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">{t('California')}</Typography>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">
                  {t('California Department of Business Oversight')}
                </Typography>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">
                  {t('Finance Lenders Law')}
                </Typography>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">60DBP-70976</Typography>
              </td>
            </tr>
            <tr
              style={{
                height: '80px',
              }}
            >
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">{t('California')}</Typography>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">
                  {t(
                    'California Department of financial Protection and Innovation',
                  )}
                </Typography>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">
                  {t('Financing Law')}
                </Typography>
              </td>
              <td
                style={{
                  textAlign: 'center',
                  borderRight: '0.5px solid #A6A9AC',
                }}
              >
                <Typography variant="subtitle2">2090196</Typography>
              </td>
            </tr>
          </table>
          <br></br>
          <br></br>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>
              <b style={{ fontFamily: 'MontserratBold' }}>
                {t('Important State Specific Disclosures')}
              </b>
              <br></br>
              {t('For California')}
            </p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>{t('state p1')}</p>
            <p>{t('state p2')}</p>
            <p>{t('state p3')}</p>
            <p>{t('state p4')}</p>
          </Typography>
          <Typography variant="subtitle1">
            {t('Department of Corporations')}
            <br></br>
            {t('3700 Wilshire Boulevard, Suite 600,')}
            <br></br>
            {t('Los Angeles, CA 90010')}
            <br></br>
          </Typography>
          <br></br>
          <Typography variant="subtitle1">{t('or')}</Typography>
          <br></br>
          <Typography variant="subtitle1">
            {t('Department of Corporations')}
            <br></br>
            {t('1390 Market Street, Suite 810,')}
            <br></br>
            {t('San Francisco, CA 94102')}
            <br></br>
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>
              <b style={{ fontFamily: 'MontserratBold' }}>
                {t('Important Federal Disclosures')}
              </b>
              <br></br>
              {t('Taxpayer Consent Acknowledgment')}
            </p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>{t('federal p')}</p>
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <p>
              <b style={{ fontFamily: 'MontserratBold' }}>
                {t('YouLand Disclosures and Licenses Information')}
              </b>
            </p>
          </Typography>
          <Typography variant="subtitle1" className={classes.content}>
            <p>{t('youland p')}</p>
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>

        <Grid item xs={9}>
          <Typography variant="subtitle1" className={classes.contentTitle}>
            <b style={{ fontFamily: 'MontserratBold', color: '#000000' }}>
              {t('Please send any feedback to')}{' '}
            </b>
            <b>feedback@YouLand.com</b>
          </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Disclosure;
