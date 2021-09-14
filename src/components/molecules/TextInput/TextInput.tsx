import React, { FC, useEffect, useMemo, useState } from 'react';
import { Box, Input, InputProps, makeStyles } from '@material-ui/core';
import { GlobalTheme } from '@/theme';

const textInputPalette: Record<PageScene, { inputBg: string }> = {
  mortgage: {
    inputBg: '#101F3A;',
  },
  alternativeMortgage: {
    inputBg:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), rgba(95, 79, 55, 0.15);',
  },
  rental: {
    inputBg:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), rgba(225, 223, 229, 0.1);',
  },
  bridge: {
    inputBg:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), rgba(225, 223, 229, 0.05);',
  },
  jumbo: {
    inputBg:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), rgba(135, 129, 136, 0.15);',
  },
  agent: {
    inputBg: 'rgba(255, 255, 255, .5);',
  },
};

const useTextInputStyles = makeStyles<GlobalTheme, TextInputProps>(() => ({
  root: {
    color: '#fff',
    width: 386,
    height: ({ multiline }) => (multiline ? 91 : 50),
    padding: '0 32px',
    background: ({ scene }) => textInputPalette[scene].inputBg,
    borderRadius: '3px',
    border: (props) => {
      return props.error ? '1px solid #f00' : '1px solid transparent';
    },
    '&::after, &::before': {
      display: 'none',
    },
  },
  inputMultiline: {},
}));

interface TextInputProps extends InputProps {
  scene: PageScene;
  errorTextIsAbsolute?: boolean;
}

export const TextInput: FC<TextInputProps> = (props) => {
  const {
    placeholder = '',
    required,
    value,
    onChange,
    name,
    error,
    multiline,
    errorTextIsAbsolute,
  } = props;
  const classes = useTextInputStyles(props);
  const [p, setP] = useState('');
  useEffect(() => {
    setP(placeholder);
  }, [placeholder]);
  const renderInput = useMemo(
    () => (
      <Input
        rows={multiline ? 3 : 1}
        multiline={multiline}
        autoComplete={'off'}
        name={name}
        placeholder={p + (p && required ? ' *' : '')}
        classes={{ root: classes.root, inputMultiline: classes.inputMultiline }}
        value={value || ''}
        onChange={onChange}
      />
    ),
    [
      classes.inputMultiline,
      classes.root,
      multiline,
      name,
      onChange,
      p,
      required,
      value,
    ],
  );
  return (
    <React.Fragment>
      {renderInput}
      {error && (
        <Box
          color={'#FF0000'}
          fontSize={12}
          position={errorTextIsAbsolute ? 'absolute' : 'relative'}
          mt={errorTextIsAbsolute ? 0 : '9px'}
        >
          {error}
        </Box>
      )}
    </React.Fragment>
  );
};
