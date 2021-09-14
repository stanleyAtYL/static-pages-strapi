import React, { FC, useCallback, useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  makeStyles,
  Modal,
  ModalProps,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { absoluteCenter, flexCenterV, size } from '@/common/styles';
import { TextInput } from '@/components/molecules';
import validate from 'validate.js';
import { useLocaleBtn, useCommonSvg } from '@/hooks';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useSnackbar, VariantType } from 'notistack';

const useStyles = makeStyles({
  root: {
    ...(absoluteCenter as any),
    width: 1152,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  contactDetails: {
    overflow: 'hidden',
    position: 'relative',
    ...size(472, 756),
    background: '#CDE3FF',
    boxShadow: '2px 2px 2px rgba(8, 32, 70, 0.3)',
    borderRadius: '0 50px 0 0',
  },
  contactDetailsRow: {
    height: 30,
    marginBottom: 24,
    color: '#051229;',
    ...flexCenterV,
    '& $icon': {
      marginRight: 8,
    },
  },
  icon: {
    ...size(30),
    fill: '#156EFA;',
  },
  iconClose: {
    position: 'absolute',
    top: 28,
    right: 40,
    ...size(16),
    cursor: 'pointer',
  },
  circle: {
    ...size(352),
    borderRadius: '50%',
    background: '#156EFA;',
    boxShadow: '1px 1px 2px rgba(8, 32, 70, 0.5);',
    position: 'absolute',
    top: -198,
    left: -74,
  },
  logo: {
    position: 'absolute',
    top: 46,
    left: 46,
    ...size(134, 32),
  },
  skyline: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    ...size(472, 256),
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 500,
    left: 172,
    ...size(128, 30),
    cursor: 'pointer',
    filter: 'drop-shadow(1px 1px 1px #000000)',
  },
  submitBtn: {
    ...size(165, 50),
    position: 'absolute',
    right: 0,
    bottom: 93,
    background:
      'linear-gradient(275.62deg, #EDF4FF -21.52%, #2578FA 45.41%, #156EFA 99.19%);',
    boxShadow: '-1px -1px 5px rgba(0, 0, 0, 0.35);',
    borderRadius: '10px 0 0 0',
    color: '#fff',
    textTransform: 'none',
    fontFamily: 'MontserratBold',
  },
  footer: {
    ...size(1152, 93),
    background: '#051229',
    ...flexCenterV,
    justifyContent: 'space-between',
    padding: '0 74px',
  },
  link: {
    color: '#8998A9',
    display: 'inline-block',
    marginRight: 20,
  },
});

const useRadioStyles = makeStyles({
  root: {
    '& .MuiSvgIcon-root': {
      ...size(11),
      color: '#2A6AE3;',
    },
  },
  labelRoot: {
    marginRight: 8,
    marginLeft: 0,
    '& .MuiIconButton-root': {
      ...size(18),
    },
    '& .MuiFormControlLabel-label': {
      fontSize: 14,
      color: '#051229',
    },
  },
});

const useTextInputStyles = makeStyles({
  root: {
    color: '#051229;',
    width: '100%',
    padding: '0 16px',
    background: '#f2f7ff',
  },
  formLabel: {
    color: '#051229;',
    lineHeight: 1.5,
    fontSize: 16,
  },
});

type ContactUsModalProps = Omit<ModalProps, 'children'>;

const formSchema = {
  firstname: {
    presence: {
      allowEmpty: false,
      message: 'Must not be empty',
    },
  },
  lastname: {
    presence: {
      allowEmpty: false,
      message: 'Must not be empty',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'Must not be empty',
    },
    email: {
      message: 'Must be a legal email address',
    },
  },
  message: {
    presence: {
      allowEmpty: false,
      message: 'Must not be empty',
    },
  },
};

interface FormState {
  values: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    role: Role;
  };
  errors: any;
  isValid: boolean;
}

export const ContactUsModal: FC<ContactUsModalProps> = (props) => {
  const classes = useStyles();
  const radioClasses = useRadioStyles();
  const textInputClasses = useTextInputStyles();
  const { renderSvgIcon } = useCommonSvg();
  // form
  const [formState, setFormState] = useState<FormState>({
    values: {
      role: 'borrower',
    },
    errors: {},
    isValid: true,
  });

  const changeFormState = useCallback(
    (e) => {
      const { name, value } = e.target;
      const updatedValue = {
        ...formState.values,
        [name]: value,
      };
      const error = validate(updatedValue, { [name]: formSchema[name] });
      setFormState({
        values: updatedValue,
        errors: {
          ...formState.errors,
          [name]: error ? error[name] : error,
        },
        isValid: !error,
      });
    },
    [formState.errors, formState.values],
  );

  const changeRole = useCallback((e) => {
    setFormState((state) => ({
      ...state,
      values: {
        ...state.values,
        role: e.target.value,
      },
    }));
  }, []);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = useCallback(
    (variant: VariantType, message: string) => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar(message, { variant });
    },
    [enqueueSnackbar],
  );

  const handleSubmit = useCallback(async () => {
    const errors = validate(formState.values, formSchema);
    setFormState({
      values: formState.values,
      errors: errors || {},
      isValid: !errors,
    });
    if (errors === void 0) {
      const configurations = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formState.values),
      };

      const response = await fetch(
        'https://qy5q4olkkl.execute-api.us-west-1.amazonaws.com/prod/contact',
        configurations,
      );
      const data = await response.json();

      //Because we dont set up the response model at lambda yet
      //To-Do: Set up response model
      handleClickVariant('success', 'Submit message successfully!');
      // if (data.message) {
      //   handleClickVariant('success', 'Submit message successfully!');
      // } else {
      //   handleClickVariant('warning', 'Submit message failed.');
      // }
      setFormState({
        values: {
          role: 'borrower',
        },
        errors: {},
        isValid: true,
      });
    }
  }, [formState.values, handleClickVariant]);

  const { renderToggleLocaleBtn } = useLocaleBtn(props);

  const { t } = useTranslation(['footer', 'contactUs']);

  return (
    <Modal {...props}>
      <div className={classes.root}>
        <Box display={'flex'} alignItems={'flex-start'}>
          <div className={classes.contactDetails}>
            <div className={classes.circle} />
            <img src="/logo_white.png" className={classes.logo} alt="" />
            <img
              src="/contactUs/skyline.png"
              className={classes.skyline}
              alt=""
            />
            <Box width={370} position={'absolute'} top={196} left={51}>
              <Typography variant={'h5'} align="center">
                {t('contactUs:read and respond')}
              </Typography>
            </Box>
            <Box width={344} left={64} top={328} position={'absolute'}>
              <div className={classes.contactDetailsRow}>
                {renderSvgIcon('telephone', classes.icon, {
                  ...size(28),
                  marginRight: 9,
                })}
                <span>1-833-968-5263</span>
              </div>
              <div className={classes.contactDetailsRow}>
                {renderSvgIcon('email', classes.icon, {
                  ...size(25, 20),
                  marginRight: 12,
                })}
                <span>borrow@youland.com</span>
              </div>
              <div className={classes.contactDetailsRow}>
                {renderSvgIcon('location', classes.icon, {
                  ...size(24, 23),
                  marginRight: 13,
                })}
                <span>/ 353 King St, San Francisco, CA 94105 /</span>
              </div>
            </Box>
            <Box className={classes.socialIcons}>
              {renderSvgIcon('twitter', classes.icon)}
              {renderSvgIcon('youtube', classes.icon)}
              {renderSvgIcon('ins', classes.icon)}
            </Box>
            <Box position="absolute" width={384} top={548} left={66}>
              <div className={classes.contactDetailsRow}>
                <span>Business Hour: 9am-6pm/Day (Except holidays)</span>
              </div>
            </Box>
          </div>
          <Box width={534} position={'absolute'} top={68} right={73}>
            <Box mb={'16px'}>
              <Box className={textInputClasses.formLabel}>
                {t('first name')} *
              </Box>
              <TextInput
                classes={{
                  root: textInputClasses.root,
                }}
                scene={'mortgage'}
                value={formState.values['firstname']}
                name={'firstname'}
                error={
                  formState.errors['firstname']
                    ? formState.errors['firstname'][0]
                    : ''
                }
                required={true}
                onChange={changeFormState}
                errorTextIsAbsolute={true}
              />
            </Box>
            <Box mb={'16px'}>
              <Box className={textInputClasses.formLabel}>
                {t('last name')} *
              </Box>
              <TextInput
                classes={{
                  root: textInputClasses.root,
                }}
                scene={'mortgage'}
                value={formState.values['lastname']}
                name={'lastname'}
                error={
                  formState.errors['lastname']
                    ? formState.errors['lastname'][0]
                    : ''
                }
                required={true}
                onChange={changeFormState}
                errorTextIsAbsolute={true}
              />
            </Box>
            <Box mb={'16px'}>
              <Box className={textInputClasses.formLabel}>{t('email')} *</Box>
              <TextInput
                errorTextIsAbsolute={true}
                classes={{
                  root: textInputClasses.root,
                }}
                scene={'mortgage'}
                value={formState.values['email']}
                name={'email'}
                error={
                  formState.errors['email'] ? formState.errors['email'][0] : ''
                }
                required={true}
                onChange={changeFormState}
              />
            </Box>
            <Box mb={'16px'}>
              <Box className={textInputClasses.formLabel}>{t('phone')}</Box>
              <TextInput
                classes={{
                  root: textInputClasses.root,
                }}
                scene={'mortgage'}
                value={formState.values['phone']}
                name={'phone'}
                onChange={changeFormState}
              />
            </Box>
            <Box mb={'26px'}>
              <Box className={textInputClasses.formLabel}>{t('message')} *</Box>
              <TextInput
                errorTextIsAbsolute={true}
                classes={{
                  root: textInputClasses.root,
                }}
                multiline={true}
                scene={'mortgage'}
                value={formState.values['message']}
                error={
                  formState.errors['message']
                    ? formState.errors['message'][0]
                    : ''
                }
                name={'message'}
                required={true}
                onChange={changeFormState}
              />
            </Box>
            <Box mb={'8px'} color={'#051229'}>
              {t('i am')}
            </Box>
            <Box mb={'8px'}>
              <RadioGroup
                row
                value={formState.values.role}
                onChange={changeRole}
              >
                <FormControlLabel
                  classes={{
                    root: radioClasses.labelRoot,
                  }}
                  value="borrower"
                  control={
                    <Radio
                      classes={{ root: radioClasses.root }}
                      color="primary"
                    />
                  }
                  label={t('borrower')}
                />
                <FormControlLabel
                  classes={{
                    root: radioClasses.labelRoot,
                  }}
                  value="broker"
                  control={
                    <Radio
                      classes={{ root: radioClasses.root }}
                      color="primary"
                    />
                  }
                  label={t('broker')}
                />
                <FormControlLabel
                  classes={{
                    root: radioClasses.labelRoot,
                  }}
                  value="lender"
                  control={
                    <Radio
                      classes={{ root: radioClasses.root }}
                      color="primary"
                    />
                  }
                  label={t('lender')}
                />
                <FormControlLabel
                  classes={{
                    root: radioClasses.labelRoot,
                  }}
                  value="agent"
                  control={
                    <Radio
                      classes={{ root: radioClasses.root }}
                      color="primary"
                    />
                  }
                  label={t('agent')}
                />
                <FormControlLabel
                  classes={{
                    root: radioClasses.labelRoot,
                  }}
                  value="others"
                  control={
                    <Radio
                      classes={{ root: radioClasses.root }}
                      color="primary"
                    />
                  }
                  label={t('other')}
                />
              </RadioGroup>
            </Box>
            <Box mb={'8px'}>
              <Typography variant={'body2'} style={{ color: '#051229' }}>
                {t('by submitting')}
              </Typography>
            </Box>
          </Box>
          <Box
            display={'inline-block'}
            className={classes.iconClose}
            onClick={(e) => {
              props.onClose(e, 'backdropClick');
            }}
          >
            {renderSvgIcon('close', '', { ...size(16) })}
          </Box>
          <Button onClick={handleSubmit} classes={{ root: classes.submitBtn }}>
            {t('contactUs:submit')}
          </Button>
        </Box>
        <Box className={classes.footer}>
          {renderToggleLocaleBtn('#fff')}
          <Box color={'#8998A9;'}>
            <Link href={'#'}>
              <a className={classes.link}>{t('privacy policy')}</a>
            </Link>
            <Link href={'#'}>
              <a className={classes.link}>{t('contactUs:licenses')}</a>
            </Link>
            <Link href={'#'}>
              <a className={classes.link}>{t('contactUs:youland')}</a>
            </Link>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};
