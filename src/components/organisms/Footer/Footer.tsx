import React, { FC, useCallback, useMemo, useState } from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import { GlobalTheme } from '@/theme';
import logoWhite from '../../../../public/logo_white.png';
import { flexCenterV, size } from '@/common/styles';
import { TextInput } from '@/components/molecules';
import { ContactUsModal } from '@/components/organisms';
import { useRouter } from 'next/router';
import validate from 'validate.js';
import { useVisible, useCommonSvg } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { useSnackbar, VariantType } from 'notistack';

export interface FooterProps {
  scene: PageScene;
}

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

const footerBg: Record<PageScene, string> = {
  mortgage: '#051229;',
  alternativeMortgage: '#212223;',
  rental: '#180733;',
  bridge: '#032824;',
  jumbo: '#252D3E;',
  agent: '#4A4A4A;',
};

const iconColor: Record<PageScene, string> = {
  mortgage: '#156EFA;',
  alternativeMortgage: '#927F64;',
  rental: '#53269B;',
  bridge: '#28514D;',
  jumbo: '#5D4D60;',
  agent: '#BEBBEC;',
};

const radioColor: Record<PageScene, string> = {
  mortgage: '#2A6AE3;',
  alternativeMortgage: '#FCD400;',
  rental: '#AE47FF;',
  bridge: '#29B5AE;',
  jumbo: '#906F8E;',
  agent: '#FFEF5F;',
};

const liveChatBtnColor: Record<PageScene, string> = {
  mortgage: '#93B8FF;',
  alternativeMortgage: '#B7AB9B;',
  rental: '#9657FD;',
  bridge: '#29B5AE;',
  jumbo: '#878188;',
  agent: '#BEBBEC',
};

const useFooterStyles = makeStyles<GlobalTheme, FooterProps>((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '60px 53px 70px 53px',
    background: ({ scene }) => footerBg[scene],
    '& $shareColumn, & $prodColumn, & $partnerColumn, & $aboutUsColumn, & $legalColumn, & $formColumn':
      {
        display: 'flex',
        flexDirection: 'column',
      },
  },
  logo: {},
  shareIcon: {
    ...size(30),
    fill: ({ scene }) => iconColor[scene],
    cursor: 'pointer',
  },
  shareList: {
    ...flexCenterV,
    justifyContent: 'space-between',
    filter: 'drop-shadow(1px 1px 1px #000000)',
  },
  listTitle: {
    height: 40,
    lineHeight: '40px',
    fontFamily: 'MontserratBold',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  listItem: {
    height: 32,
    lineHeight: '32px',
    fontSize: 16,
    color: '#fff',
    cursor: 'pointer',
  },
  liveChatBtn: {
    position: 'absolute',
    right: 36,
    top: -62,
    textTransform: 'none',
    ...size(240, 62),
    color: '#051229;',
    fontSize: 24,
    fontFamily: 'MontserratBold',
    background: ({ scene }) => liveChatBtnColor[scene],
    '& .MuiButton-label': {
      position: 'relative',
      top: 4,
    },
    '&:hover': {
      background: ({ scene }) => liveChatBtnColor[scene],
    },
  },
  shareColumn: {
    width: 135,
    '& $logo': {
      ...size(135, 32),
      marginBottom: 20,
    },
  },
  prodColumn: {},
  partnerColumn: {},
  aboutUsColumn: {},
  legalColumn: {},
  formColumn: {
    width: 386,
  },
  formDesc: {
    color: '#fff',
  },
  loginBtn: {
    ...size(386, 64),
    boxShadow:
      '1px 1px 2px rgba(23, 26, 31, 0.5), -1px -1px 2px rgba(240, 245, 254, 0.1)',
    background: (props) => theme.customPalette[props.scene].buttonBg,
    borderRadius: '5px',
    fontFamily: 'MontserratBold',
    color: '#fff',
    textTransform: 'none',
  },
  copyRight: {
    position: 'absolute',
    bottom: 70,
    left: 52,
    color: 'rgba(255,255,255,.5)',
  },
}));

const useRadioStyles = makeStyles<GlobalTheme, FooterProps>(() => ({
  root: {
    '& .MuiSvgIcon-root': {
      ...size(11),
      color: ({ scene }) => radioColor[scene],
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
      color: '#fff',
    },
  },
}));

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

export const Footer: FC<FooterProps> = (props) => {
  const { scene } = props;
  const classes = useFooterStyles(props);
  const radioClasses = useRadioStyles(props);
  const { t } = useTranslation(['footer', 'common']);
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

  const router = useRouter();

  const jumpRouter = useCallback(
    (key: string) => () => {
      router.push(key);
    },
    [router],
  );

  const renderProdColumn = useMemo(() => {
    return (
      <>
        <div className={classes.listTitle}>{t('products')}</div>
        <div onClick={jumpRouter('/mortgage')} className={classes.listItem}>
          {t('common:mortgage')}
        </div>
        <div
          onClick={jumpRouter('/alter-mortgage')}
          className={classes.listItem}
        >
          {t('common:alternative mortgage')}
        </div>
        <div onClick={jumpRouter('/rental')} className={classes.listItem}>
          {t('common:rental')}
        </div>
        <div onClick={jumpRouter('/bridge')} className={classes.listItem}>
          {t('common:bridge')}
        </div>
        <div onClick={jumpRouter('/jumbo')} className={classes.listItem}>
          {t('common:jumbo')}
        </div>
      </>
    );
  }, [classes.listItem, classes.listTitle, jumpRouter, t]);

  const { renderSvgIcon } = useCommonSvg();

  // contact us modal
  const {
    visible,
    open: openContactUsModal,
    close: closeContactUsModal,
  } = useVisible();

  return (
    <div className={classes.root}>
      {/* <Button classes={{ root: classes.liveChatBtn }}>{t('live chat')}</Button> */}
      <div className={classes.shareColumn}>
        <img
          src={logoWhite}
          className={classes.logo}
          alt=""
          onClick={jumpRouter('/')}
        />
        <div className={classes.shareList}>
          {renderSvgIcon('twitter', classes.shareIcon)}
          {renderSvgIcon('youtube', classes.shareIcon)}
          {renderSvgIcon('linkin', classes.shareIcon)}
          {renderSvgIcon('facebook', classes.shareIcon)}
        </div>
      </div>
      <div className={classes.prodColumn}>{renderProdColumn}</div>
      <div className={classes.partnerColumn}>
        <div className={classes.listTitle}>{t('partners')}</div>
        <div onClick={jumpRouter('/agent')} className={classes.listItem}>
          {t('agent')}
        </div>
        <div onClick={jumpRouter('/broker')} className={classes.listItem}>
          {t('broker')}
        </div>
      </div>
      <div className={classes.aboutColumn}>
        <div className={classes.listTitle}>{t('about us')}</div>
        <div onClick={jumpRouter('/about-us')} className={classes.listItem}>
          {t('company')}
        </div>
        {/* <div className={classes.listItem}>{t('press')}</div>
        <div className={classes.listItem}>{t('career')}</div> */}
        <div onClick={jumpRouter('/glossary')} className={classes.listItem}>
          {t('glossary')}
        </div>
        <div onClick={jumpRouter('/faq')} className={classes.listItem}>
          {t('FAQ')}
        </div>
        <div onClick={jumpRouter('/resources')} className={classes.listItem}>
          {t('resources')}
        </div>
        <div onClick={openContactUsModal} className={classes.listItem}>
          {t('contact')}
        </div>
      </div>
      <div className={classes.legalColumn}>
        <div className={classes.listTitle}>{t('legal')}</div>
        <div
          onClick={jumpRouter('/privacy-policy')}
          className={classes.listItem}
        >
          {t('privacy policy')}
        </div>
        <div onClick={jumpRouter('/term-of-use')} className={classes.listItem}>
          {t('terms of use')}
        </div>
        {/* <div
          onClick={jumpRouter('/electronic-communications-policy')}
          className={classes.listItem}
        >
          {t('electronic communications policy')}
        </div> */}
        <div onClick={jumpRouter('/disclosure')} className={classes.listItem}>
          {t('disclosure & License')}
        </div>
      </div>
      <div className={classes.formColumn}>
        <Box mb={'8px'}>
          <TextInput
            scene={scene}
            value={formState.values['firstname']}
            name={'firstname'}
            error={
              formState.errors['firstname']
                ? formState.errors['firstname'][0]
                : ''
            }
            placeholder={t('first name')}
            required={true}
            onChange={changeFormState}
          />
        </Box>
        <Box mb={'8px'}>
          <TextInput
            scene={scene}
            value={formState.values['lastname']}
            name={'lastname'}
            error={
              formState.errors['lastname']
                ? formState.errors['lastname'][0]
                : ''
            }
            placeholder={t('last name')}
            required={true}
            onChange={changeFormState}
          />
        </Box>
        <Box mb={'8px'}>
          <TextInput
            scene={scene}
            value={formState.values['email']}
            name={'email'}
            error={
              formState.errors['email'] ? formState.errors['email'][0] : ''
            }
            placeholder={t('email')}
            required={true}
            onChange={changeFormState}
          />
        </Box>
        <Box mb={'8px'}>
          <TextInput
            scene={scene}
            value={formState.values['phone']}
            name={'phone'}
            placeholder={t('phone')}
            onChange={changeFormState}
          />
        </Box>
        <Box mb={'8px'}>
          <TextInput
            multiline={true}
            scene={scene}
            value={formState.values['message']}
            error={
              formState.errors['message'] ? formState.errors['message'][0] : ''
            }
            name={'message'}
            required={true}
            placeholder={t('message')}
            onChange={changeFormState}
          />
        </Box>
        <Box mb={'8px'} color={'#fff'}>
          {t('i am')}
        </Box>
        <Box mb={'8px'}>
          <RadioGroup row value={formState.values.role} onChange={changeRole}>
            <FormControlLabel
              classes={{
                root: radioClasses.labelRoot,
              }}
              value="borrower"
              control={
                <Radio classes={{ root: radioClasses.root }} color="primary" />
              }
              label={t('borrower')}
            />
            <FormControlLabel
              classes={{
                root: radioClasses.labelRoot,
              }}
              value="broker"
              control={
                <Radio classes={{ root: radioClasses.root }} color="primary" />
              }
              label={t('broker')}
            />
            <FormControlLabel
              classes={{
                root: radioClasses.labelRoot,
              }}
              value="lender"
              control={
                <Radio classes={{ root: radioClasses.root }} color="primary" />
              }
              label={t('lender')}
            />
            <FormControlLabel
              classes={{
                root: radioClasses.labelRoot,
              }}
              value="agent"
              control={
                <Radio classes={{ root: radioClasses.root }} color="primary" />
              }
              label={t('agent')}
            />
            <FormControlLabel
              classes={{
                root: radioClasses.labelRoot,
              }}
              value="others"
              control={
                <Radio classes={{ root: radioClasses.root }} color="primary" />
              }
              label={t('other')}
            />
          </RadioGroup>
        </Box>
        <Box mb={'8px'}>
          <Typography variant={'body2'} className={classes.formDesc}>
            {t('by submitting')}
          </Typography>
        </Box>
        <Button
          disabled={!formState.isValid}
          classes={{
            root: classes.loginBtn,
          }}
          onClick={handleSubmit}
        >
          {t('contact us')}
        </Button>
      </div>
      <Box className={classes.copyRight}>{t('copyright')}</Box>
      <ContactUsModal
        open={visible}
        onClose={closeContactUsModal}
        disableAutoFocus={true}
        disableEnforceFocus={true}
      />
    </div>
  );
};
