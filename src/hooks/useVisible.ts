import { useState } from 'react';

export const useVisible = (initialValue = false) => {
  const [visible, setVisible] = useState(initialValue);
  const open = () => {
    setVisible(true);
  };
  const close = () => {
    setVisible(false);
  };

  return {
    visible,
    open,
    close,
  };
};
