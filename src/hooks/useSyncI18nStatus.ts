import { useEffect, useState } from 'react';
import { usePersistFn } from '@/hooks/usePersistFn';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export const useSyncI18nStatus = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [connected, setConnected] = useState(false);

  const notifyIframeLocaleChange = usePersistFn(() => {
    if (connected) {
      const iframe: any = document.getElementById('instant-rate');
      if (iframe) {
        iframe.contentWindow.postMessage(
          {
            event: 'changeLanguage',
            value: i18n.languages[0],
          },
          '*',
        );
      }
    }
  });

  useEffect(() => {
    setConnected(false);
  }, [router.pathname]);

  useEffect(() => {
    notifyIframeLocaleChange();
  }, [notifyIframeLocaleChange, i18n.languages[0]]);

  useEffect(() => {
    notifyIframeLocaleChange();
  }, [notifyIframeLocaleChange, connected]);

  useEffect(() => {
    const fn = (e) => {
      if (e.data.event === 'instantRateAppMounted') {
        setConnected(true);
      }
    };
    window.addEventListener('message', fn);
    return () => {
      window.removeEventListener('message', fn);
    };
  }, []);
};
