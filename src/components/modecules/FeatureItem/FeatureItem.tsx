import { ReactNode } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

export interface FeatureItemProps {
  imageUrl?: string;
  contentPosition: 'left' | 'right' | 'bottom';
  title: string;
  content?: string;
  titleWidth?: string;
  contentWidth?: string;

  button?: ButtonProps;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  imageUrl,
  contentPosition,
  title,
  content,
  button,
  children,
  titleWidth,
  contentWidth,
}) => {
  const getContent = (
    title: string,
    content?: string,
    button?: ButtonProps,
    children?: ReactNode,
  ) => {
    return (
      <Grid
        item
        container
        style={{ padding: '10px' }}
        alignItems="center"
        justify="center"
        direction="column"
        spacing={4}
      >
        <Grid item style={{ width: titleWidth }}>
          <Typography
            style={{
              textAlign: 'center',
              fontFamily: 'MontserratBold',
              fontStyle: 'normal',
              fontSize: '24px',
              lineHeight: '150%',
              color: '#051229',
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item style={{ width: contentWidth }}>
          {content !== undefined && (
            <Typography
              style={{
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontWeight: 'normal',
                fontSize: '16px',
                lineHeight: '170%',
                color: '#051229',
              }}
            >
              {content}
            </Typography>
          )}
        </Grid>
        {children !== undefined && (
          <Grid item alignItems="center">
            {children}
          </Grid>
        )}
        <Grid item>{button !== undefined && <Button {...button} />}</Grid>
      </Grid>
    );
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      spacing={2}
      direction="row"
      item
      xs={12}
    >
      <Grid
        item
        container
        md={contentPosition === 'bottom' ? 12 : 6}
        sm={12}
        alignItems="center"
        justify="center"
      >
        {contentPosition !== 'left'
          ? imageUrl !== null && (
              <div style={{ height: '60px' }}>
                <img
                  src={imageUrl}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    // borderRadius: 'var(--border-radius, 10px)',
                  }}
                />
              </div>
            )
          : getContent(title, content, button, children)}
      </Grid>
      <Grid
        item
        container
        md={contentPosition === 'bottom' ? 12 : 6}
        sm={12}
        alignItems="center"
        justify="center"
      >
        {contentPosition !== 'left'
          ? getContent(title, content, button, children)
          : imageUrl !== null && (
              <div style={{ height: '60px' }}>
                <img
                  src={imageUrl}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 'var(--border-radius, 10px)',
                  }}
                />
              </div>
            )}
      </Grid>
    </Grid>
  );
};

export default FeatureItem;
