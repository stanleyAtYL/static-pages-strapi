import { Grid } from '@material-ui/core';
import { Gif } from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

// const comments = [
//   {
//     comment:
//       '"YouLand has helped me close many deals within the past few years. When I need a loan closed quickly and with certainty I know YouLand is the right choice!"',
//     name: '- Robert K.',
//     product: '$1.6MM Multifamily loan',
//   },
//   {
//     comment:
//       '"Their team at YouLand is super helpful and the system is easy to use"',
//     name: '- Alvin Y',
//     product: '$3MM Fix and Flip Loan',
//   },
//   {
//     comment:
//       '"I would recommend YouLand to anyone who needs to close quickly and wants transparency in a lender"',
//     name: '- Jason W.',
//     product: '$2MM Purchase Bridge Loan',
//   },
// ];

const Reviews = (): JSX.Element => {
  const { t } = useTranslation('homepage');

  const comments = useMemo(
    () => [
      {
        comment: t('review1 content'),
        name: '- Jason W.',
        product: t('review1 product'),
      },
    ],
    [t],
  );

  return (
    <Grid
      container
      style={{ height: '800px', background: '#EDF4FF' }}
      justify="center"
    >
      <Grid item xs={4}>
        <img
          src={'/home/man.png'}
          style={{
            position: 'relative',
            left: '220px',
            top: '160px',
          }}
        />
      </Grid>
      <Grid
        container
        item
        xs={8}
        justify="center"
        style={{ marginTop: 'auto' }}
      >
        <Grid item xs={12} style={{ height: '70px' }}>
          <div
            style={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '32px',
              lineHeight: '150%',
              color: '#000000',
              textAlign: 'center',
            }}
          >
            {t('review title')}
          </div>
        </Grid>
        <div>
          <img
            style={{
              position: 'relative',
              left: '-300px',
            }}
            src={'/home/c.png'}
          />
        </div>

        <Grid
          container
          item
          xs={12}
          style={{ height: '300px' }}
          justify="center"
        >
          <div style={{ width: '500px' }}>
            <Carousel
              autoPlay={true}
              animation="slide"
              navButtonsAlwaysInvisible={true}
              interval={4000}
            >
              {comments.map((comment, i) => {
                return (
                  <Grid key={i} container direction="column">
                    <div
                      style={{
                        fontFamily: 'MontserratBold',
                        fontSize: '23px',
                        lineHeight: '160%',
                        textAlign: 'right',
                      }}
                    >
                      {comment.name} - {comment.product}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Montserrat',
                        fontSize: '23px',
                        lineHeight: '160%',
                        textAlign: 'right',
                      }}
                    >
                      {t('review1 address')}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Montserrat',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '24px',
                        lineHeight: '170%',
                        textAlign: 'center',
                        marginTop: '30px',
                        height: '200px',
                      }}
                    >
                      {comment.comment}
                    </div>
                  </Grid>
                );
              })}
            </Carousel>
          </div>
        </Grid>
      </Grid>
      <Grid item>
        <img
          style={{
            position: 'relative',
            bottom: '400px',
          }}
          src={'/home/map.png'}
        />
      </Grid>
    </Grid>
  );
};

export default Reviews;
